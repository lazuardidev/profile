'use client';

import * as React from 'react';
import { Mail } from 'lucide-react';
import { SuccessModal, ErrorModal } from '@/components/ui/modal';

import Image from 'next/image';
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
      <div className='relative flex justify-center items-start pt-20 pb-32 px-8 lg:px-32 bg-gradient-to-b from-transparent via-[rgba(27,178,201,0.0)] to-[#1BB2C9] min-h-screen'>
        {/* Glass board pattern background */}
        <div className='absolute inset-0 w-full h-full'>
          {/* Vertical glass strips pattern */}
          <div className='absolute inset-0 flex'>
            {Array.from({ length: 19 }).map((_, i) => (
              <div key={i} className='flex-1 relative'>
                <div
                  className='absolute inset-0 w-full h-full'
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

          {/* Dark overlay gradient */}
          <div
            className='absolute inset-0 w-full h-full'
            style={{
              background:
                'linear-gradient(180deg, #000 -15.44%, rgba(0, 0, 0, 0.00) 104.67%)',
            }}
          />
        </div>

        {/* Content container */}
        <div className='relative z-10 w-full max-w-7xl'>
          <div className='flex flex-col lg:flex-row gap-10 border border-[#22252B] bg-black p-6 md:p-10'>
            {/* Contact Form */}
            <div className='flex-1 flex flex-col gap-8'>
              <div className='space-y-4'>
                <h2 className='text-3xl md:text-5xl font-bold leading-tight tracking-tight'>
                  <span className='text-white'>Let&apos;s </span>
                  <span className='text-[#149BB0]'>Build Something </span>
                  <span className='text-white'>Great</span>
                </h2>
                <p className='text-[#A4A7AE] text-base leading-relaxed tracking-tight'>
                  Got an idea, a project, or just want to connect? I&apos;m
                  always open to new conversations.
                </p>
              </div>

              <form ref={formRef} onSubmit={onSubmit} className='space-y-5'>
                <div className='space-y-2'>
                  <label className='text-sm text-[#FDFDFD] leading-7'>
                    Name
                  </label>
                  <div className='h-12 px-4 py-2 border border-[#22252B] flex items-center'>
                    <input
                      type='text'
                      name='name'
                      required
                      placeholder='Enter your name'
                      className="flex-1 bg-transparent text-white placeholder:text-[#535862] text-base leading-8 tracking-tight focus:outline-none"
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-sm text-[#FDFDFD] leading-7'>
                    Email
                  </label>
                  <div className='h-12 px-4 py-2 border border-[#22252B] flex items-center'>
                    <input
                      type='email'
                      name='email'
                      required
                      placeholder='Enter your email'
                      className="flex-1 bg-transparent text-white placeholder:text-[#535862] text-base leading-8 tracking-tight focus:outline-none"
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-sm text-[#FDFDFD] leading-7'>
                    Message
                  </label>
                  <div className='h-[134px] px-4 py-2 border border-[#22252B] flex items-start'>
                    <textarea
                      name='message'
                      required
                      placeholder='Enter your message'
                      className='flex-1 bg-transparent text-white placeholder:text-[#535862] text-base leading-8 tracking-tight resize-none focus:outline-none'
                    />
                  </div>
                </div>

                <button
                  type='submit'
                  disabled={loading}
                  className='h-14 w-full bg-white flex items-center justify-center gap-2 p-2 hover:bg-gray-100 transition-colors disabled:opacity-60'
                >
                  <Mail className='w-6 h-6 text-black' />
                  <span className='text-black font-semibold text-base leading-8 tracking-tight'>
                    {loading ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className='flex-1 flex flex-col justify-between'>
              <div className='flex-1 space-y-5'>
                <div className='space-y-3'>
                  <h3 className='text-xl font-semibold text-[#FDFDFD] leading-9'>
                    Address
                  </h3>
                  <p className='text-[#A4A7AE] text-base leading-8 tracking-tight'>
                    Jakarta, Indonesia
                  </p>
                </div>

                <div className='w-full h-px bg-[#22252B]' />

                <div className='space-y-3'>
                  <h3 className='text-xl font-semibold text-[#FDFDFD] leading-9'>
                    Contact
                  </h3>
                  <p className='text-[#A4A7AE] text-base leading-8 tracking-tight'>
                    (+62) 1234567890
                  </p>
                </div>

                <div className='w-full h-px bg-[#22252B]' />

                <div className='space-y-5'>
                  <h3 className='text-xl font-semibold text-[#FDFDFD] leading-9'>
                    Social Media
                  </h3>
                  <div className='flex items-center gap-4'>
                    <Link
                      href='#'
                      className='hover:opacity-80'
                      aria-label='Facebook'
                    >
                      <Image
                        src='/icons/facebook-icon.svg'
                        alt='Facebook'
                        width={40}
                        height={40}
                      />
                    </Link>
                    <Link
                      href='#'
                      className='hover:opacity-80'
                      aria-label='LinkedIn'
                    >
                      <Image
                        src='/icons/linkedin-icon.svg'
                        alt='LinkedIn'
                        width={40}
                        height={40}
                      />
                    </Link>
                    <Link
                      href='#'
                      className='hover:opacity-80'
                      aria-label='Instagram'
                    >
                      <Image
                        src='/icons/instagram-icon.svg'
                        alt='Instagram'
                        width={40}
                        height={40}
                      />
                    </Link>
                    <Link
                      href='#'
                      className='hover:opacity-80'
                      aria-label='TikTok'
                    >
                      <Image
                        src='/icons/tiktok-icon.svg'
                        alt='TikTok'
                        width={40}
                        height={40}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* GET IN TOUCH text */}
              <div className='text-right mt-8'>
                <h1 className='text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight'>
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
