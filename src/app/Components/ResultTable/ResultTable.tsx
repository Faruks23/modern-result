// components/ResultTable.js
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';

const ResultTable = ({ downloadPDF}:any) => {
  const studentInfo = {
    rollNo: "339302",
    name: "MST. SAMIRA AKTER",
    board: "CHITTAGONG",
    fathersName: "MD. ABDUL SAMAD",
    group: "HUMANITIES",
    mothersName: "MST. MANJUARA BEGUM",
    type: "REGULAR",
    dateOfBirth: "26-02-2007",
    result: "PASSED",
    institute: "LEMU CHHARI HIGH SCHOOL",
    gpa: 3.17
  };

  const gradeSheet = [
    { code: "101", subject: "BENGALI", grade: "A-" },
    { code: "107", subject: "ENGLISH", grade: "C" },
    { code: "109", subject: "MATHEMATICS", grade: "C" },
    { code: "127", subject: "SCIENCE", grade: "A-" },
    { code: "111", subject: "ISLAM AND MORAL EDUCATION", grade: "A-" },
    { code: "110", subject: "GEOGRAPHY & ENVIRONMENT", grade: "C" },
    { code: "153", subject: "HISTORY OF BANGLADESH AND WORLD CIVILIZATION", grade: "A-" },
    { code: "140", subject: "CIVICS AND CITIZENSHIP", grade: "A-" },
    { code: "154", subject: "INFORMATION AND COMMUNICATION TECHNOLOGY", grade: "A-" },
    { code: "134", subject: "AGRICULTURE STUDIES", grade: "A-" },
    { code: "147", subject: "PHYSICAL EDUCATION, HEALTH & SPORTS", grade: "A+" },
    { code: "156", subject: "CAREER EDUCATION", grade: "A" }
  ];


 

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-center text-xl font-bold p-4">SSC/Dakhil/Equivalent Result 2023</h2>
        <table className="w-full border-collapse  text-[12px] text-black font-normal">
          <tbody>
            <tr>
              <td className="p-1 border bg-gray-100 font-medium">Roll No</td>
              <td className="p-1 border">{studentInfo.rollNo}</td>
              <td className="p-1 border bg-gray-100 font-medium">Name</td>
              <td className="p-1 border">{studentInfo.name}</td>
            </tr>
            <tr>
              <td className="p-1 border bg-gray-100 font-medium">Board</td>
              <td className="p-1 border">{studentInfo.board}</td>
              <td className="p-1 border bg-gray-100 font-medium">Father's Name</td>
              <td className="p-1 border">{studentInfo.fathersName}</td>
            </tr>
            <tr>
              <td className="p-1 border bg-gray-100 font-medium">Group</td>
              <td className="p-1 border">{studentInfo.group}</td>
              <td className="p-1 border bg-gray-100 font-medium">Mother's Name</td>
              <td className="p-1 border">{studentInfo.mothersName}</td>
            </tr>
            <tr>
              <td className="p-1 border bg-gray-100 font-medium">Type</td>
              <td className="p-1 border">{studentInfo.type}</td>
              <td className="p-1 border bg-gray-100 font-medium">Date of Birth</td>
              <td className="p-1 border">{studentInfo.dateOfBirth}</td>
            </tr>
            <tr>
              <td className="p-1 border bg-gray-100 font-medium">Result</td>
              <td className="p-1 border font-bold text-green-600">{studentInfo.result}</td>
              <td className="p-1 border bg-gray-100 font-medium">Institute</td>
              <td className="p-1 border">{studentInfo.institute}</td>
            </tr>
            <tr>
              <td className="p-1 border bg-gray-100 font-medium">GPA</td>
              <td className="p-1 border font-bold" colSpan={3}>{studentInfo.gpa}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-center text-xl font-bold p-4">Grade Sheet</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-1 border bg-gray-200">Code</th>
              <th className="p-1 border bg-gray-200">Subject</th>
              <th className="p-1 border bg-gray-200">Grade</th>
            </tr>
          </thead>
          <tbody className='text-[12px] text-black font-normal'>
            {gradeSheet.map((subject, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="p-1 border">{subject.code}</td>
                <td className="p-1 border">{subject.subject}</td>
                <td className="p-1 border">{subject.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ResultTable;
