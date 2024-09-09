import React from "react";
import SidebarItem from "./SidebarItem/SidebarItem";

function Sidebar() {
  const path = [
    {
      id: "about",
      label: "About",
      href: "/about",
    },
    {
      id: "getInTouch",
      label: "Get In Touch",
      href: "/contact",
    },
  ];
  return (
    <>
    
        {path.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}

    </>
  );
}

export default Sidebar;
