import Navbar from './Navbar';

const Mainpage = () => {
  return (
    <div
      className="relative"
      
    >
      <Navbar style={{ zIndex: '2' }} />
      {/* <div className="pt-16 flex justify-center items-center">
        <div className="bg-opacity-90 h-screen w-screen text-center">
          <h1 className="text-8xl text-[#EEE]">Welcome to Our eVault</h1>
          <p className="text-4xl text-[#EEE]">We provide excellent services.</p>
        </div>
      </div> */}
    </div>
  );
};

export default Mainpage;
