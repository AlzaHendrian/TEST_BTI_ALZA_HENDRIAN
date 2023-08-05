import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { API } from '../config/Api';

function JobDetail({ job }) {
    const [form, setForm] = useState({
        displayName: "",
        subject: job.title,
        email: "",
        phone: "",
        message: "",
        ptJobApplyType: "APLICATION",
        isActive: true,
        ptJobPost: { id: 1 },
        document: null
    })

    const handleOnChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.type === 'file' ? e.target.files : e.target.value,
        });
    
      };

      const handleOnSubmit = async (e) => {
        try {
          e.preventDefault();
    
          const config = {
            headers: {
              'Content-type': 'multipart/form-data',
            },
          };
          const formData = new FormData();
          formData.set('displayName', form.displayName);
          formData.set('subject', form.subject);
          formData.set('email', form.email)
          formData.set('phone', form.phone);
          formData.set('message', form.message);
          formData.set('ptJobApplyType', form.ptJobApplyType);
          formData.set('isActive', form.isActive);
          formData.set('ptJobPost', form.ptJobPost);
          formData.set('document', form.document);
    
          const response = await API.post('/home-chat', formData, config);
          console.log('add home chat', response);
          setForm({
            displayName: '',
            subject: job.title,
            email: "",
            phone: "",
            message: "",
            ptJobApplyType: "APLICATION",
            isActive: true,
            ptJobPost: { id: 1 },
            document: null
          });
        } catch (err) {
          console.log('add home chat', err);
          setForm({
            displayName: '',
            subject: job.title,
            email: "",
            phone: "",
            message: "",
            ptJobApplyType: "APLICATION",
            isActive: true,
            ptJobPost: { id: 1 },
            document: null
          });
          return alert('Send data Success')
        }
      };
  return (
    <>
    <div className='bg-[#F6F4EB] grid grid-cols-1 mx-20 p-6 rounded-lg mb-12' style={{ boxShadow: '0px 2px 14px rgba(0, 0, 0, 0.2)' }}>
        <h1 className='font-bold text-[#557A46] text-xl'>{job.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: job.description.txt }} className='mt-5'/>
        <div className='mt-20'>
            <h1 className='font-bold text-xl'>Send Your Job Aplication</h1>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-2 w-[95%] mt-8'>
                        <div>
                            <h4 className='font-semibold mb-2'>Your Name</h4>
                            <input value={form.displayName} onChange={handleOnChange} type="text" name="displayName" id="" placeholder='enter your name' className='p-2 rounded-md placeholder:text-gray-400 bg-[#F6F4EB] w-full me-4' style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}/>
                        </div>
                        <div>
                            <h4 className='font-semibold ms-4 mb-2'>Mobile Number</h4>
                            <input value={form.phone} onChange={handleOnChange} type="text" name="phone" id="" placeholder='enter your mobile number' className='p-2 rounded-md placeholder:text-gray-400 bg-[#F6F4EB] w-full ms-4' style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}/>
                        </div>
                        <div className='mt-8'>
                            <h4 className='font-semibold mb-2'>Email Address</h4>
                            <input value={form.email} onChange={handleOnChange} type="text" name="email" id="" placeholder='enter your email' className='p-2 rounded-md placeholder:text-gray-400 bg-[#F6F4EB] w-full me-4' style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}/>
                        </div>
                        <div className='mt-8'>
                            <h4 className='font-semibold ms-4 mb-2'>Write Your Message Here...</h4>
                            <input value={form.message} onChange={handleOnChange} type="text" name="message" id="" placeholder='Write Your Message' className='p-2 rounded-md placeholder:text-gray-400 bg-[#F6F4EB] w-full ms-4' style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}/>
                        </div>
                        <div className='block mt-8'>
                            <h4 className='font-semibold mb-2'>File</h4>
                            <label htmlFor="fileInput" className="mb-2 flex items-center cursor-pointer">
                                <div className='bg-[#F29727] p-4 rounded-md'>
                                    <FiUpload className='font-bold text-white' size={40}/>
                                </div>
                                <input onChange={handleOnChange} name="document" type="file" id="fileInput" className="sr-only" />
                            </label>
                            <button className='bg-[#A8A196] text-white p-1 rounded-sm mt-4 font-semibold'>Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
  );
}

export default JobDetail;
