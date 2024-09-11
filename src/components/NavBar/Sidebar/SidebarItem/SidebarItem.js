import React from "react";
import { Link } from "react-router-dom";

function SidebarItem({id, label, href }) {
  return (
    
      <div className="flex text-lg md:text-sm lg:text-xl">
        <Link to={href} id={id} className="px-4 py-4 transition duration-150 delay-150 hover:text-color-primary">
          {label}
        </Link>
      </div>
    
  );
}

export default SidebarItem;
