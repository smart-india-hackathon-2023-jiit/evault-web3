import React from 'react';
import backgroundImage from '../images/logins.jpg';

const Login = ({onConnect}) => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={divStyle}>
      <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border bg-transparent rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500 focus:bg-gray-100 text-black cursor-text"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border bg-transparent rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500 focus:bg-gray-100 text-black cursor-text"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-600">Or</p>
          <button className="bg-gray-200 hover:bg-orange-500 text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-gray active:bg-gray-400" onClick={onConnect}>
            Connect with Metamask
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
