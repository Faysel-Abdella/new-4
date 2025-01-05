/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const NestedNav = ({ navLinks }: { navLinks: any[] }) => {
  // Recursive component for rendering nav items
  const NavItem = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    const hasChildren = item.children && item.children.length > 0;

    return (
      <div className="mb-2">
        <button
          onClick={toggleOpen}
          className="flex items-center justify-start gap-2 w-full px-2 py-1"
        >
          {hasChildren && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span className=" px-2">{item.name}</span>
        </button>
        {isOpen && hasChildren && (
          <div className="pl-4">
            {item.children.map((child: any, index: number) => (
              <NavItem key={index} item={child} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {navLinks.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </div>
  );
};

export default NestedNav;
