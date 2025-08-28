'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  return (
    <nav className='fixed top-4 left-4 right-4 md:top-8 md:left-1/2 md:transform md:-translate-x-1/2 md:right-auto md:w-auto z-50'>
      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-6 bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10'>
        <div className='text-xl font-bold'>Edwin</div>
        <div className='flex items-center gap-6'>
          {navigationData.map((data) => (
            <a
              key={data.label}
              href={data.href}
              className='text-sm hover:text-[#149BB0] transition-colors'
            >
              {data.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation using Sheet */}
      <Sheet>
        <div className='md:hidden flex items-center justify-between flex-row bg-black/40 backdrop-blur-xl rounded-full px-4 py-4 border border-white/10'>
          <div className='text-xl font-bold text-white'>Edwin</div>
          <SheetTrigger asChild>
            <Menu className='cursor-pointer' />
          </SheetTrigger>
        </div>
        <SheetContent className='w-[calc(100%-2rem)] max-w-sm mx-4 my-4 h-[calc(100vh-2rem)] bg-gradient-to-br from-black/40 via-gray-900/30 to-black/60 backdrop-blur-2xl border border-white/20 shadow-2xl p-0 rounded-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-2 data-[state=closed]:slide-out-to-left-2 data-[state=open]:duration-300 data-[state=closed]:duration-200 ease-in-out [&>button]:hidden'>
          {/* Glass effect overlay */}
          <div className='absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 pointer-events-none rounded-2xl' />

          {/* Header */}
          <div className='relative flex items-center justify-between pl-6 pt-6 pr-6 rounded-t-2xl'>
            <div className='text-xl font-bold text-white drop-shadow-lg'>
              Edwin
            </div>
            <SheetClose asChild>
              <button className='text-white hover:text-gray-300 transition-colors p-1 rounded-full hover:bg-white/10'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </SheetClose>
          </div>

          {/* Navigation */}
          <nav className='relative pl-4'>
            <ul className='space-y-4'>
              {navigationData.map((data) => (
                <li key={data.label}>
                  <SheetClose asChild>
                    <Link
                      href={data.href}
                      className='text-white hover:text-[#149BB0] block text-lg font-medium transition-all duration-200 hover:bg-white/10 rounded-lg px-3 py-2'
                    >
                      {data.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
