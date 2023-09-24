import React from 'react';
import backgroundImage from '../images/files2.jpg';

const Pdfview = () => {
  const caseDetails = [
    {
      caseNo: '001',
      caseName: 'Sample Case 1',
      judgeName: 'Judge A',
      judgementDate: '2023-08-30',
      pdfLink: 'https://example.com/sample-case-1.pdf',
    },
    {
      caseNo: '002',
      caseName: 'Sample Case 2',
      judgeName: 'Judge B',
      judgementDate: '2023-09-15',
      pdfLink: 'https://example.com/sample-case-2.pdf',
    },
  ];

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div
      style={divStyle}
      className="relative bg-opacity-40 bg-gray-100 min-h-screen flex items-center justify-center p-8 rounded-lg shadow-md"
    >
      <div className="w-full max-w-screen-xl mx-auto p-8 bg-[#F8F1F1] bg-opacity-80 backdrop-blur-lg rounded-lg shadow-md">
        <h1 className="text-5xl font-semibold mb-4 text-[#19456B] text-center">
          PDF VIEW
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#153E90] text-white">
                <th className="py-3 px-4">Case No.</th>
                <th className="py-3 px-4">Case Name</th>
                <th className="py-3 px-4">Judge Name</th>
                <th className="py-3 px-4">Judgement Date</th>
                <th className="py-3 px-4">PDF Link</th>
              </tr>
            </thead>
            <tbody>
              {caseDetails.map((caseDetail, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-200'}
                >
                  <td className="border py-2 px-4">{caseDetail.caseNo}</td>
                  <td className="border py-2 px-4">{caseDetail.caseName}</td>
                  <td className="border py-2 px-4">{caseDetail.judgeName}</td>
                  <td className="border py-2 px-4">
                    {caseDetail.judgementDate}
                  </td>
                  <td className="border py-2 px-4">
                    <a
                      href={caseDetail.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pdfview;
