'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20'
      aria-label='Toggle theme'
    >
      {theme === 'light' ? (
        <Moon className='w-5 h-5 text-gray-800 dark:text-white' />
      ) : (
        <Sun className='w-5 h-5 text-white' />
      )}
    </button>
  );
}
