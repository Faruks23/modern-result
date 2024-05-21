"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ResultForm, { StudentData } from '../ResultForm/ResultForm';
import ResultTable from '../ResultTable/ResultTable';
import StudentTable from '../StudentTable';
import Link from 'next/link';



// you can use a function to return the target element besides using React refs




const Form = () => {
  // const targetRef = useRef(null);
  const [getResult, setGetResult] = useState(false)
  const [findResult, setFindResult] = useState({})
  // const getTargetElement = () => document.getElementById('resultTable');

  // const downloadPDF = async () => {
  //   await generatePDF(targetRef, { filename: 'result.pdf' })
  // }
  const [Result, setResult] = useState<StudentData[]>([])

  useEffect(() => {
    fetch('/Result.json')
      .then(res => res.json())
      .then(result => setResult(result))
  }, [])

  return (
    <>
      <div className="getInfo  w-full    mb-3 flex   justify-end relative">
        {!getResult && <StudentTable data={Result} /> }
      </div>
      <div className='w-[650px] min-h-[680px] bg-white border  border-gray-200 rounded-md shadow-sm p-2'>

        <div className="form-head h-[121px] w-full bg-[rgb(238,238,238)] rounded-md ">
          <div className="head-content flex h-full justify-between">
            <div className="logo  flex  justify-center items-center h-full w-[141px]">
              <Image src={'/bd_logo.png'} width={80} height={80} alt='logo'></Image>
            </div>

            <div className="content h-full  w-[80%]">
              <div className="title pl-[5px]   border-b flex bg-[#007814] border-[hsl(128,83%,45%)]  justify-between ">
                <h1 className='text-[rgb(149,225,125)] font-bold text-[17px]  mt-[10px]'>Ministry of Education</h1>
                <Image src={'/banner_flag.jpg'} width={200} height={41} alt='flag' className=''></Image>
              </div>
              <div className="subtitle px-[5px] bg-[#007814] ">
                <h1 className=' text-[17px] text-[#FFFFEE] font-bold pt-[5px] pb-[3px]    '>Intermediate and Secondary Education Boards <br /> Bangladesh</h1>
              </div>
              <div className="head-bottom bg-[rgba(82,161,62,0.96)] py-1 px-1">
                <p className=' text-[11px] font-normal text-white  text-right'>Official Website of Education Board
                </p>
              </div>

            </div>
          </div>
        </div>

        {getResult ? <ResultTable findResult={findResult} ></ResultTable> : <ResultForm setGetResult={setGetResult} setFindResult={setFindResult}  ></ResultForm>}

            
        
        <div className="form-footer h-[95px] border-t-4 border-[#86c775] px-2 flex justify-between items-center text-[10px] text-[#666666] bg-gray-100 mt-[35px] shadow-sm">
          <p>©2005-2024 Ministry of Education, All rights reserved.</p>
          <div className='flex justify-between items-center gap-4'>
            <p>Powered by</p>
            <Image src={'/tbl_logo.png'} width={80} height={44} alt='brand'></Image>
          </div>
        </div>

      </div>
    </>
  );
};

export default Form;