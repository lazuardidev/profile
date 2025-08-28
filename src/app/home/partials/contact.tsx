'use client';

import * as React from 'react';
import { Mail } from 'lucide-react';
import { SuccessModal, ErrorModal } from '@/components/ui/modal';
import Link from 'next/link';

export default function Contact() {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      message: String(fd.get('message') || ''),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());

      // ✅ success
      setSuccessOpen(true);
      form.reset();
    } catch (err: unknown) {
      // ❌ error
      setErrorOpen(true);
      console.error(err instanceof Error ? err.message : err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <section id='contact' className='relative overflow-hidden'>
      {/* Background container with gradient */}
      <div className='relative flex justify-center items-start pt-20 pb-32 px-8 lg:px-32 bg-gradient-to-b from-transparent via-[rgba(27,178,201,0.0)] to-[#1BB2C9] dark:via-[rgba(27,178,201,0.0)] dark:to-[#1BB2C9] min-h-screen'>
        {/* Glass board pattern background */}
        <div className='absolute inset-0 w-full h-full'>
          {/* Vertical glass strips pattern */}
          <div className='absolute inset-0 flex'>
            {Array.from({ length: 19 }).map((_, i) => (
              <div key={i} className='flex-1 relative'>
                <div
                  className='absolute inset-0 w-full h-full dark:hidden'
                  style={{
                    background:
                      'linear-gradient(269deg, rgba(255, 255, 255, 0.20) 1.07%, rgba(200, 200, 200, 0.30) 17.36%, rgba(255, 255, 255, 0.00) 98.79%)',
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05) inset',
                    backdropFilter: 'blur(50px)',
                  }}
                />
                <div
                  className='absolute inset-0 w-full h-full dark:block hidden'
                  style={{
                    background:
                      'linear-gradient(269deg, rgba(22, 22, 24, 0.40) 1.07%, rgba(0, 0, 0, 0.40) 17.36%, rgba(26, 26, 29, 0.00) 98.79%)',
                    boxShadow: '0 2px 4px 0 rgba(255, 255, 255, 0.16) inset',
                    backdropFilter: 'blur(50px)',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Overlay gradient */}
          <div
            className='absolute inset-0 w-full h-full dark:hidden'
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.8) -15.44%, rgba(255, 255, 255, 0.2) 104.67%)',
            }}
          />
          <div
            className='absolute inset-0 w-full h-full dark:block hidden'
            style={{
              background:
                'linear-gradient(180deg, #000 -15.44%, rgba(0, 0, 0, 0.00) 104.67%)',
            }}
          />
        </div>

        {/* Content container */}
        <div className='relative z-10 w-full max-w-7xl'>
          <div className='flex flex-col lg:flex-row gap-10 border border-gray-200 dark:border-[#22252B] bg-white dark:bg-black p-6 md:p-10'>
            {/* Contact Form */}
            <div className='flex-1 flex flex-col gap-8'>
              <div className='space-y-4'>
                <h2 className='text-3xl md:text-5xl font-bold leading-tight tracking-tight'>
                  <span className='text-gray-900 dark:text-white'>
                    Let&apos;s{' '}
                  </span>
                  <span className='text-[#149BB0]'>Build Something </span>
                  <span className='text-gray-900 dark:text-white'>Great</span>
                </h2>
                <p className='text-gray-600 dark:text-[#A4A7AE] text-base leading-relaxed tracking-tight'>
                  Got an idea, a project, or just want to connect? I&apos;m
                  always open to new conversations.
                </p>
              </div>

              <form ref={formRef} onSubmit={onSubmit} className='space-y-5'>
                <div className='space-y-2'>
                  <label className='text-sm text-gray-700 dark:text-[#FDFDFD] leading-7'>
                    Name
                  </label>
                  <div className='h-12 px-4 py-2 border border-gray-300 dark:border-[#22252B] flex items-center'>
                    <input
                      type='text'
                      name='name'
                      required
                      placeholder='Enter your name'
                      style={{
                        WebkitBoxShadow: '0 0 0 1000px transparent inset',
                        WebkitTextFillColor: 'inherit',
                      }}
                      className='flex-1 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#535862] text-base leading-8 tracking-tight focus:outline-none [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-inherit [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_transparent]'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-sm text-gray-700 dark:text-[#FDFDFD] leading-7'>
                    Email
                  </label>
                  <div className='h-12 px-4 py-2 border border-gray-300 dark:border-[#22252B] flex items-center'>
                    <input
                      type='email'
                      name='email'
                      required
                      placeholder='Enter your email'
                      style={{
                        WebkitBoxShadow: '0 0 0 1000px transparent inset',
                        WebkitTextFillColor: 'inherit',
                      }}
                      className='flex-1 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#535862] text-base leading-8 tracking-tight focus:outline-none [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-inherit [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_transparent]'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-sm text-gray-700 dark:text-[#FDFDFD] leading-7'>
                    Message
                  </label>
                  <div className='h-[134px] px-4 py-2 border border-gray-300 dark:border-[#22252B] flex items-start'>
                    <textarea
                      name='message'
                      required
                      placeholder='Enter your message'
                      className='flex-1 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#535862] text-base leading-8 tracking-tight resize-none focus:outline-none'
                    />
                  </div>
                </div>

                <button
                  type='submit'
                  disabled={loading}
                  className='h-14 w-full bg-gray-900 dark:bg-white flex items-center justify-center gap-2 p-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-60'
                >
                  <Mail className='w-6 h-6 text-white dark:text-black' />
                  <span className='text-white dark:text-black font-semibold text-base leading-8 tracking-tight'>
                    {loading ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className='flex-1 flex flex-col justify-between'>
              <div className='flex-1 space-y-5'>
                <div className='space-y-3'>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-[#FDFDFD] leading-9'>
                    Address
                  </h3>
                  <p className='text-gray-600 dark:text-[#A4A7AE] text-base leading-8 tracking-tight'>
                    Jakarta, Indonesia
                  </p>
                </div>

                <div className='w-full h-px bg-gray-200 dark:bg-[#22252B]' />

                <div className='space-y-3'>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-[#FDFDFD] leading-9'>
                    Contact
                  </h3>
                  <p className='text-gray-600 dark:text-[#A4A7AE] text-base leading-8 tracking-tight'>
                    (+62) 1234567890
                  </p>
                </div>

                <div className='w-full h-px bg-gray-200 dark:bg-[#22252B]' />

                <div className='space-y-5'>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-[#FDFDFD] leading-9'>
                    Social Media
                  </h3>
                  <div className='flex items-center gap-4'>
                    <Link
                      href='#'
                      className='hover:opacity-80 transition-opacity'
                      aria-label='Facebook'
                    >
                      <svg
                        width={40}
                        height={40}
                        viewBox='0 0 24 24'
                        fill='none'
                        className='text-gray-700 dark:text-white'
                      >
                        <path
                          d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
                          fill='currentColor'
                        />
                      </svg>
                    </Link>
                    <Link
                      href='#'
                      className='hover:opacity-80 transition-opacity'
                      aria-label='LinkedIn'
                    >
                      <svg
                        width={40}
                        height={40}
                        viewBox='0 0 24 24'
                        fill='none'
                        className='text-gray-700 dark:text-white'
                      >
                        <path
                          d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
                          fill='currentColor'
                        />
                      </svg>
                    </Link>
                    <Link
                      href='#'
                      className='hover:opacity-80 transition-opacity'
                      aria-label='Instagram'
                    >
                      <svg
                        width={40}
                        height={40}
                        viewBox='0 0 24 24'
                        fill='none'
                        className='text-gray-700 dark:text-white'
                      >
                        <path
                          d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
                          fill='currentColor'
                        />
                      </svg>
                    </Link>
                    <Link
                      href='#'
                      className='hover:opacity-80 transition-opacity'
                      aria-label='TikTok'
                    >
                      <svg
                        width={40}
                        height={40}
                        viewBox='0 0 24 24'
                        fill='none'
                        className='text-gray-700 dark:text-white'
                      >
                        <path
                          d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'
                          fill='currentColor'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* GET IN TOUCH text */}
              <div className='text-right mt-8'>
                <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight'>
                  GET IN TOUCH
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portals */}
      <SuccessModal
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
        title='Thanks for Reaching Out!'
        message="I've received your message and will get back to you shortly."
      />
      <ErrorModal
        isOpen={errorOpen}
        onClose={() => setErrorOpen(false)}
        title='Message Not Sent'
        message="Something broke along the way. Let's try resending it."
        onButtonClick={() => formRef.current?.requestSubmit()}
      />
    </section>
  );
}
