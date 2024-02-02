"use client";

import React from "react";
import ThemeIcon from "./ThemeIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8">
      <p className="text-2xl">Todo List</p>
      <ThemeIcon />
    </nav>
  );
};

export default Navbar;
