import React from "react";
import { Link } from "react-router-dom";

function SidebarItem({id, label, href }) {
  return (
    
      <div className="flex text-xl">
        <Link to={href} id={id} className="mx-8 hover:text-[#ffa31a] transition delay-150 duration-150">
          {label}
        </Link>
      </div>
    
  );
}

export default SidebarItem;
