import React from 'react';

const Menuitem = ({ key, className, children }) => ((
  <div key={`menu-container${key}`} className={`border-l-2 border-gray-300 pl-3 cursor-auto ${className} hover:border-sky-300`}>
    <span key={`menu-item${key}`} className="text-6xl leading-tight font-thin antialiased text-gray-800 drop-shadow-lg shadow-black cursor-pointer hover:select-menu">
      {children}
    </span>
  </div>
));

const Menulist = ({ children }) => ((
  children.map((row, index) => {
    return ((!row) ? <Menuitem key={index} >&emsp;</Menuitem> : <Menuitem>{row}</Menuitem>);
  })
));

const Menu = ({ className, children }) => (
    <div className={className}>
      <Menulist>{children}</Menulist>
    </div>
  );

export default Menu;
