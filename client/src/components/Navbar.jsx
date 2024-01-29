// import React from 'react';


// const Navbar = () => {
//   return (
//     <div className="navbar bg-white h-10">
//     <div className="logo">
//       <img src="logo.png" alt="Logo" width="150" height="50" />
//     </div>

//   </div>

//   );
// };

// export default Navbar;


import React from 'react';
import DropdownProfile from './DropdownProfile';

const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200 mx-2 px-2 py-2.5 rounded shadow-lg dark:bg-gray-800 w-auto'>
      <div className='container'>

        {/* Desktop Profile Dropdown */}
        <div className='flex justify-end'>
          <DropdownProfile />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
