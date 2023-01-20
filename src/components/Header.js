import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-20">
      <div className="md:px-16 px-6 pt-10 flex justify-between items-center">
        <h1 className="text-xl font-burtons">LEON</h1>
        <a
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cakeresume.com/s--X9cYt-RFKn8r38gUOSbUFw--/s0976144676s"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
