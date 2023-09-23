const Navbar = () => {
  return (
    <nav className="bg-white text-white p-2 fixed top-0 left-0 w-full font-display">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="../../public/law.jpg"
              alt="Your Logo"
              className="h-12 w-12"
            />
          </div>
          <div className="space-x-6">
            <a
              href="About"
              className="hover:text-[#053B50] hover:border-b-2 hover:border-[#053B50] px-2 py-1 rounded text-lg text-[#176B87]"
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-[#053B50] hover:border-b-2 hover:border-[#053B50] px-2 py-1 rounded text-lg text-[#176B87]"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-[#053B50] hover:border-b-2 hover:border-[#053B50] px-2 py-1 rounded text-lg text-[#176B87]"
            >
              Contact
            </a>
            <button
              className="bg-[#176B87] hover:bg-white hover:text-[#176B87] border-none"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
