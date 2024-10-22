'use client';

import Link from 'next/link';
import Menu from '@/components/menu';
import TestMenu from '@/components/test-menu';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="pt-4 fixed z-50 w-full bg-neutral-950">
      <div className={`container duration-300 ease-in-out ${isScrolled ? 'max-w-full' : ''}`}>
        <header className={`min-h-20 border-2 border-neutral-800 rounded-full px-8 py-4 flex justify-between items-center duration-150 transition-colors`}>
          <Link href="/" className="w-10 h-10 rounded-full bg-neutral-800 flex flex-col justify-center items-center">
            /
          </Link>
          <Menu />
          <TestMenu />
        </header>
      </div>
    </div>
  );
};

export default Header;
