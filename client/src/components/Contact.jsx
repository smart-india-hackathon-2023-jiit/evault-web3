import { useState } from 'react';
import backgroundImageUrl from '../images/contact.jpg';

const Contact = () => {

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  const formContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', 
    zIndex: 2,
    maxWidth: '400px',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={containerStyle}>
      <div
        style={formContainerStyle}
        className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md"
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-[#053B50] text-lg">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-none rounded-lg shadow-sm focus:outline-none focus:border-[#279EFF] bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-[#053B50] text-lg">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-none rounded-lg shadow-sm focus:outline-none focus:border-[#279EFF] bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-[#053B50] text-lg">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-3 py-2 border-[#ffffff66] rounded-lg shadow-sm focus:outline-none focus:border-[#279EFF] bg-transparent"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#ffffff66] w-full text-gray-600 px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 ease-in-out hover:bg-[#ffffff33] border-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
