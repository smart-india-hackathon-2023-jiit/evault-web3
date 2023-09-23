import React, { useState } from 'react';


function JudgmentForm() {
    const initialFormData = {
      title: '',
      dateOfJudgment: '',
      category: '',
      judgeName: '',
    };
  
    const [formData, setFormData] = useState(initialFormData);

    const handlepdf = (e) => {
    }
  

    const handleChange = (e) => {
        const { name, value, type} = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending data to a server or updating state.
    // For now, we'll just log the form data.
    console.log(formData);
    setFormData(initialFormData);
  };

  return (
    <div className='w-[100vw] bg-black h-[100vh] flex items-center justify-between mx-auto pt-[15rem]  text-white'>
        <div className='flex flex-col mx-auto h-[804px] w-[508px] p-[32px] bg-black text-[ #F1F2FF] gap-5'>
        <h1 className='text-center overflow-y-hidden'>E-Filing Form</h1>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-10'>
        <div className='flex flex-col gap-[6px]'>
          <label className='text-[20px] leading-[22px] font-normal flex flex-row gap-[2px] overflow-y-hidden'>Title <p className='text-[#EF476F] overflow-y-hidden'>*</p></label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className='w-full h-[48px] p-[12px] gap-[12px] input-shadow rounded-md  text-black'
            placeholder='Enter title'
          />
        </div>
        <div className='flex flex-col gap-[6px] '>
          <label className='text-[20px] leading-[22px] font-normal flex flex-row gap-[2px] overflow-y-hidden'>Date of Judgment<p className='text-[#EF476F] overflow-y-hidden'>*</p></label>
          <input
            type="date"
            name="dateOfJudgment"
            value={formData.dateOfJudgment}
            onChange={handleChange}
            className='w-full h-[48px] p-[12px] gap-[12px] input-shadow rounded-md text-black'
            placeholder='Enter date'
          />
        </div>
        <div className='flex flex-col gap-[6px]'>
          <label className='text-[20px] leading-[22px] font-normal flex flex-row gap-[2px] overflow-y-hidden'>Category <p className='text-[#EF476F] overflow-y-hidden'>*</p></label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className='w-full h-[48px] p-[12px] gap-[12px] input-shadow rounded-md text-black'
            placeholder='Select category'
          >
            <option value="">Select category</option>
            <option value="robbery">Robbery</option>
            <option value="murder">Murder</option>
            <option value="rape">Rape</option>
            {/* Add more categories here */}
          </select>
        </div>
        <div className='flex flex-col gap-[6px]'>
          <label className='text-[20px] leading-[22px] font-normal flex flex-row gap-[2px] overflow-y-hidden'>Judge Name <p className='text-[#EF476F]  overflow-y-hidden'>*</p></label>
          <input
            type="text"
            name="judgeName"
            value={formData.judgeName}
            onChange={handleChange}
            className='w-full h-[48px] p-[12px] gap-[12px] input-shadow rounded-md  text-black'
            placeholder='Enter judge name'
          />
        </div>
        <div className='flex flex-col gap-[6px]'>
            <label className='text-[20px] leading-[22px] font-normal flex flex-row gap-[2px] overflow-y-hidden'>
              Upload PDF File <p className='text-[#EF476F] overflow-y-hidden'>*</p>
            </label>
            <input
              type="file"
              name="pdfFile"
              accept=".pdf" // Specify accepted file types (PDF in this case)
              onChange={handlepdf}
              className='w-full p-[12px] gap-[12px] input-shadow rounded-md text-black'
            />
          </div>
        <button type="submit" className='w-full bg-[#FFD60A] text-black text-center rounded-md'>Submit</button>
      </form>
    </div>
    </div>
    
  );
}

export default JudgmentForm;
