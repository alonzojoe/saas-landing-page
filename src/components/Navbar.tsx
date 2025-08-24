import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="text-white" onClick={toggleMenu}>
      Navbar
    </div>
  );
};

export default Navbar;
