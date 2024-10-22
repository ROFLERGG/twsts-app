'use client';

import { useEffect, useRef, useState } from 'react';
import DropdownMenu from '@/components/dropdown-menu';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = usePathname();

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={menuToggle} className="flex flex-col justify-center items-center p-2">
        <div className={`relative flex flex-col justify-center items-center overflow-hidden w-6 h-6`}>
          <span className={`absolute bg-neutral-50 duration-300 ease-in-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
          <span className={`absolute bg-neutral-50 duration-300 ease-in-out h-0.5 left-0 rounded-sm ${isOpen ? 'w-0 opacity-50' : 'w-6'}`}></span>
          <span className={`absolute bg-neutral-50 duration-300 ease-in-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
        </div>
      </button>
      {isOpen && <DropdownMenu isOpen={isOpen} />}
    </div>
  );
};

export default Menu;
