import Image from 'next/image';
import React from 'react';

const Form = () => {
  return (
    <div className='w-[650px] h-[680px] bg-white border  border-gray-200 rounded-md shadow-sm p-2'>
      <div className="form-head h-[121px] w-full bg-[rgb(238,238,238)] ">
        <div className="head-content flex">
          <div className="logo">
           
          </div>
          <div className="content">
            <div className="title pl-[5px] pb-[5px]pt-[10px] border-b flex bg-[#007814]">
              <h1 className='text-[rgb(149,225,125)] font-bold text-[17px] '>Ministry of Education</h1>
              <Image src={'/banner_flag.jpg'} width={200} height={41} alt='flag'></Image>
            </div>
            <div className="subtitle px-[5px]">

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;