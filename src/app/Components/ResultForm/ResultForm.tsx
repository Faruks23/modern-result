import { Boards, Years } from '@/app/utils/data';
import React from 'react';

const ExamOptions = [
  {
    option:"SSC/Dakhil/Equivalent"
  },
  {
    option:"JSC/JDC"
  },
  {
    option:"SSC/Dakhil"
  },
  {
    option:"SSC(Vocational)"
  },
  {
    option:"HSC/Alim"
  },
  {
    option:"HSC(Vocational)"
  },
  {
    option:"HSC(BM)"
  },
  {
    option:"Diploma in Commerce"
  },
  {
    option:"Diploma in Business Studies" 
  },
]

function getRandomNumber1() {
  const min = 1;
  const max = 9;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomNumber2() {
  const min = 1;
  const max = 9;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




const ResultForm = () => {
  return (
    <div className=' px-[13%] mt-5'>
      <form className=' border flex flex-col gap-3 px-[50px] py-[40px]  shadow-sm rounded-md'>

        <div className=' flex justify-between items-center gap-3 '>
          <label className='  text-sm font-bold text-black w-[100px]'>
            Examination 
          </label>
          <label className='text-sm font-bold text-black'>
              :
            </label>
          <select name="" id="" className=' border  py-1 px-2 rounded-md shadow-sm outline-green-700 w-[234px]'>
            {
              ExamOptions.map(options => {
                return (
                  <>
                    <option className=' border rounded-md ' value={options.option}>
                      { options.option}
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
          <select name="" id="" className=' border  py-1 px-2 rounded-md shadow-sm outline-green-700  w-[234px]'>
            {
              Years.map(year => {
                return (
                  <>
                    <option className=' border rounded-md ' value={year.year}>
                      { year.year}
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
          <select name="" id="" className=' border  py-1 px-2 rounded-md shadow-sm outline-green-700  w-[234px]'>
            {
              Boards.map(year => {
                return (
                  <>
                    <option className=' border rounded-md ' value={year.value}>
                      {year.value}
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
          <input type="text" placeholder='000000' name="" id="" className='border  py-1 px-2 rounded-md shadow-sm outline-green-700 w-[234px]'/>
         
        </div>
        <div className=' flex justify-between items-center gap-3'>
          <label className=' text-sm font-bold text-black  w-[100px]'>
            Reg:No 
          </label>
          <label className='text-sm font-bold text-black'>
            :
          </label>
          <input type="text" placeholder='0000000000' name="" id="" className='border  py-1 px-2 rounded-md shadow-sm outline-green-700 w-[234px]'/>
         
        </div>
        <div className=' flex justify-between items-center gap-3'>
          <label className=' text-sm font-bold text-black  w-[100px]'>
           {getRandomNumber1()} + {getRandomNumber2()} 
          </label>
          <label className='text-sm font-bold text-black'>
            :
          </label>
          <input type="text" placeholder='00' name="" id="" className='border  py-1 px-2 rounded-md shadow-sm outline-green-700 w-[234px]'/>
         
        </div>
        <div className="submit-btn flex justify-end gap-3 items-center mt-3">
          <button type='reset' className='px-4 py-1 rounded-sm bg-green-500  text-sm'>Reset</button>
          <button type='submit' className='px-4 py-1 rounded-sm bg-green-600  text-sm'>Submit</button>

        </div>



      </form>
    </div>
  );
};

export default ResultForm;