'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const pages = [
  {
    name: 'ThreeJS',
    url: '/threejs',
  },
  {
    name: 'List',
    url: '/list',
  },
];

const TestMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  const menuToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <details className="relative" open={isOpen}>
      <summary onClick={menuToggle} className="flex flex-col justify-center items-center p-2 cursor-pointer">
        <div className={`relative flex flex-col justify-center items-center overflow-hidden w-6 h-6`}>
          <span className={`absolute bg-neutral-50 duration-300 ease-in-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
          <span className={`absolute bg-neutral-50 duration-300 ease-in-out h-0.5 left-0 rounded-sm ${isOpen ? 'w-0 opacity-50' : 'w-6'}`}></span>
          <span className={`absolute bg-neutral-50 duration-300 ease-in-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
        </div>
      </summary>
      <div className={`absolute z-50 flex flex-col right-0 top-20 bg-neutral-950 border-2 border-neutral-800 rounded-xl p-4 space-y-2`}>
        {pages.map((page) => (
          <Link key={page.name} href={page.url} className="rounded-full hover:bg-neutral-50 hover:bg-opacity-5 px-4 py-2 duration-300 ease-in-out">
            {page.name}
          </Link>
        ))}
      </div>
    </details>
  );
};

export default TestMenu;
