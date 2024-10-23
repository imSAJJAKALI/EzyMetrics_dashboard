import React from 'react';

const Navbar = () => {
  return (
    <div>
      {/* Navbar container */}
      <div className="h-16 border-b bg-[#629584] flex justify-end items-center px-4">
        {/* User Avatar */}
        <div className="w-10 h-10">
          <img
            className="w-full h-full rounded-full"
            src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-color-icon.png"
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
