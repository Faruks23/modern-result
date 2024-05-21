'use client'

import { Boards, ExamOptions, Years } from '@/app/utils/data';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';


interface StudentInfo {
  rollNo: string;
  regNO:string;
  name: string;
  board: string;
  fathersName: string;
  group: string;
  mothersName: string;
  type: string;
  dateOfBirth: string;
  result: string;
  institute: string;
  gpa: number;
}

interface Grade {
  code: string;
  subject: string;
  grade: string;
}

export interface StudentData {
  studentInfo: StudentInfo;
  gradeSheet: Grade[];
}


type Inputs = {
  ExamName: string,
  Year: string,
  board: string,
  roll: string,
  reg: string,
  sum: number,



}



const ResultForm = ({ setGetResult, setFindResult }:any) => {

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<Inputs>()
 const [sum1,setSum1]=useState(0)
  const [sum2, setSum2] = useState(0)
  const [Result, setResult] = useState<StudentData[]>([])

  useEffect(() => {
    fetch('/Result.json')
    .then(res=>res.json())
    .then(result =>setResult(result))
  },[])
  useEffect(()=>{
    function getRandomNumber1() {
      const min = 1;
      const max = 9;
      const sum1 = Math.floor(Math.random() * (max - min + 1)) + min;
      setSum1(sum1)
    }
    getRandomNumber1()

    function getRandomNumber2() {
      const min = 1;
      const max = 9;
      const sum2= Math.floor(Math.random() * (max - min + 1)) + min;
      setSum2(sum2)
    }
    getRandomNumber2()

  },[reset])
  const TotalSum = sum1+sum2

  const FormSubmit: SubmitHandler<Inputs> = (data) => {
       console.log(data)
  
    if (data && data.sum == TotalSum) {
      const promise = new Promise(async (resolve, reject) => {
        try {
          // Simulate a delay
          await new Promise((r) => setTimeout(r, 2000));

          // Make a POST request to the API
           

          const result = Result.find(item => item.studentInfo.rollNo === data.roll);

          console.log(result,'from')
          if (result) {
            setFindResult(result)
            resolve(result);
            setGetResult(true)
          }
          throw new Error('result not found')

        } catch (error: any) {
          reject(error.message);
        }
      });

      toast.promise(promise, {
        loading: 'Loading...',
        success: (result: any) => {
          if (result.studentInfo.result == 'PASSED') {
            return 'congratulation '
          }
          else {
            return 'Better lack next time'
          }
        },
        error: (err) => `Error: ${err}`,
      });

      reset();
    }




  }




  return (
    <div className=' px-[13%] mt-5'>

      <form onSubmit={handleSubmit(FormSubmit)} className=' border flex flex-col gap-3 px-[50px] py-[40px]  shadow-sm rounded-md'>

        <div className=' flex justify-between items-center gap-3 '>
          <label className='  text-sm font-bold text-black w-[100px]'>
            Examination
          </label>
          <label className='text-sm font-bold text-black'>
            :
          </label>
          <select  {...register("ExamName", { required: true })} name="ExamName" id="" className=' border  py-1 px-2 rounded-md shadow-sm outline-green-700 w-[234px] text-[14px]'>
            {
              ExamOptions.map(options => {
                return (
                  <>
                    <option key={options.option} className=' border rounded-md !text-sm ' value={options.option}>
                      {options.option}
                    </option>
                  </>
                )
              })
            }

          </select>
        </div>

        <div className=' flex justify-between items-center gap-3 '>
          <label className='  text-sm font-bold text-black w-[100px]'>
            Year
          </label>
          <label className='text-sm font-bold text-black'>
            :
          </label>
          <select  {...register("Year", { required: true })} name="Year" id="" className=' border  py-1 px-2 rounded-md shadow-sm outline-green-700  text-[14px] w-[234px]'>
            {
              Years.map(year => {
                return (
                  <>
                    <option key={year.year} selected={year.selected} disabled={year.disable} className=' border rounded-md ' value={year.year} color='red'>
                      {year.year}
                    </option>
                  </>
                )
              })
            }

          </select>
        </div>
        <div className=' flex justify-between items-center gap-3 '>
          <label className='  text-sm font-bold text-black w-[100px]'>
            Board
          </label>
          <label className='text-sm font-bold text-black'>
            :
          </label>
          <select  {...register("board", { required: true })} name="board" id="" className=' border   py-1 px-2 rounded-md shadow-sm outline-green-700  w-[234px] text-[14px]'>
            {
              Boards.map(board => {
                return (
                  <>
                    <option key={board.value} selected={board.selected} disabled={board.disable} className=' border rounded-md  ' value={board.value}>
                      {board.value}
                    </option>
                  </>
                )
              })
            }

          </select>
        </div>


        <div className=' flex justify-between items-center gap-3 '>
          <label className='  text-sm font-bold text-black w-[100px] '>
            Roll
          </label>
          <label className='text-sm font-bold text-black'>
            :
          </label>
          <input  {...register("roll")} type="number" placeholder='000000' name="roll" id="" className='border  py-1 px-2 rounded-md shadow-sm outline-green-700 w-[234px]' />
        </div>

        <div className=' flex justify-between items-center gap-3'>
          <label className=' text-sm font-bold text-black  w-[100px]'>
            Reg:No
          </label>
          <label className='text-sm font-bold text-black'>
            :
          </label>
          <input  {...register("reg", { required: true })} type="number" placeholder='0000000000' name="reg" id="" className='border  py-1 px-2 rounded-md shadow-sm outline-green-700 w-[234px]' />

        </div>
        <div className=' flex justify-between items-center gap-3'>
          <label className=' text-sm font-bold text-black  w-[100px]'>
            <span> {sum1}</span> +  <span>{sum2}</span>
          </label>
          <label className='text-sm font-bold text-black'>
            :
          </label>
          <input {...register("sum", { required: true })} type="number" placeholder='00' name="sum" id="" className='border  py-1 px-2 rounded-md shadow-sm outline-green-700 w-[234px]' />

        </div>
        <div className="submit-btn flex justify-end gap-3 items-center mt-3">
          <button type='reset' className='px-4 py-1 rounded-sm  border   text-sm shadow-sm'>Reset</button>
          <button type='submit' className='px-4 py-1 rounded-sm border border-green-500 text-sm hover:bg-green-600 duration-200 shadow-md'>Submit</button>

        </div>



      </form>
      <Toaster position="bottom-right" expand={false} />
    </div>
  );
};

export default ResultForm;