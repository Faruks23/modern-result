import React from 'react';

const StudentTable = ({ data }:any) => {
  return (
    <table className="w-[150px] divide-y divide-gray-200 absolute right-0 top-3 z-10">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Roll No
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Reg No
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((student:any, index:any) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-1 py-1 whitespace-nowrap">
              <div className="flex items-center">
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{student.studentInfo.rollNo}</div>
                </div>
              </div>
            </td>
            <td className="px-1 py-1 whitespace-nowrap">
              <div className="flex items-center">
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{student.studentInfo.regNo}</div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
