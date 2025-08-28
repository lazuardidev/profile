'use client';

import * as React from 'react';
import { Mail } from 'lucide-react';
import { SuccessModal, ErrorModal } from '@/components/ui/modal';

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
                      className='flex-1 bg-transparent text-white placeholder:text-[#535862] text-base leading-8 tracking-tight focus:outline-none'
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
                      className='flex-1 bg-transparent text-white placeholder:text-[#535862] text-base leading-8 tracking-tight focus:outline-none'
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
                  <div className='flex items-center gap-3'>
                    {/* Facebook */}
                    <div className='w-10 h-10 rounded-full border border-[#252B37] flex items-center justify-center hover:border-[#149BB0] transition-colors cursor-pointer'>
                      <svg
                        className='w-3 h-5'
                        viewBox='0 0 12 21'
                        fill='#FDFDFD'
                      >
                        <path d='M10.8941 11.3023L11.464 7.68118H7.95329V5.32748C7.95329 4.33734 8.44342 3.36984 10.0107 3.36984H11.6293V0.28626C10.6867 0.135952 9.73426 0.0546359 8.77967 0.0429688C5.89017 0.0429687 4.00374 1.77996 4.00374 4.92011V7.68118H0.800781V11.3023H4.00374V20.0607H7.95329V11.3023H10.8941Z' />
                      </svg>
                    </div>

                    {/* Instagram */}
                    <div className='w-10 h-10 rounded-full border border-[#252B37] flex items-center justify-center hover:border-[#149BB0] transition-colors cursor-pointer'>
                      <svg
                        className='w-5 h-5'
                        viewBox='0 0 20 20'
                        fill='#FDFDFD'
                      >
                        <path d='M6.6712 10.0509C6.6712 8.2084 8.164 6.7143 10.006 6.7143C11.848 6.7143 13.3416 8.2084 13.3416 10.0509C13.3416 11.8934 11.848 13.3874 10.006 13.3874C8.164 13.3874 6.6712 11.8934 6.6712 10.0509ZM4.868 10.0509C4.868 12.8894 7.1683 15.1903 10.006 15.1903C12.8437 15.1903 15.144 12.8894 15.144 10.0509C15.144 7.2124 12.8437 4.9114 10.006 4.9114C7.1683 4.9114 4.868 7.2124 4.868 10.0509ZM14.1466 4.7077C14.1465 4.9452 14.2169 5.1774 14.3487 5.375C14.4806 5.5726 14.6681 5.7266 14.8874 5.8176C15.1068 5.9086 15.3482 5.9325 15.5811 5.8862C15.8141 5.84 16.0281 5.7257 16.1961 5.5578C16.3641 5.3899 16.4785 5.1759 16.5249 4.9429C16.5713 4.71 16.5477 4.4685 16.4569 4.249C16.3661 4.0294 16.2123 3.8418 16.0148 3.7098C15.8174 3.5777 15.5853 3.5072 15.3478 3.5071H15.3474C15.029 3.5072 14.7238 3.6337 14.4987 3.8588C14.2735 4.084 14.1469 4.3892 14.1466 4.7077ZM5.9636 18.1979C4.988 18.1534 4.4578 17.9909 4.1054 17.8536C3.6383 17.6716 3.3049 17.455 2.9545 17.1049C2.604 16.7548 2.3871 16.4217 2.206 15.9544C2.0687 15.6021 1.9062 15.0716 1.8618 14.0958C1.8133 13.0407 1.8036 12.7238 1.8036 10.051C1.8036 7.3781 1.8141 7.0621 1.8618 6.0062C1.9063 5.0303 2.07 4.5008 2.206 4.1475C2.3879 3.6802 2.6045 3.3468 2.9545 2.9962C3.3045 2.6457 3.6375 2.4287 4.1054 2.2476C4.4576 2.1101 4.988 1.9476 5.9636 1.9032C7.0183 1.8547 7.3351 1.845 10.006 1.845C12.6769 1.845 12.994 1.8555 14.0496 1.9032C15.0252 1.9477 15.5545 2.1114 15.9078 2.2476C16.3749 2.4287 16.7083 2.6461 17.0587 2.9962C17.4091 3.3463 17.6261 3.6797 17.8072 4.1475C17.9447 4.4998 18.1072 5.0303 18.1516 6.0062C18.2001 7.0613 18.2098 7.3781 18.2098 10.051C18.2098 12.7238 18.2001 13.0399 18.1516 14.0958C18.1071 15.0717 17.9438 15.6021 17.8072 15.9544C17.6253 16.4217 17.4087 16.7551 17.0587 17.1049C16.7087 17.4547 16.3753 17.6717 15.9078 17.8536C15.5555 17.9911 15.0252 18.1536 14.0496 18.1979C12.9949 18.2464 12.6781 18.2561 10.006 18.2561C7.3339 18.2561 7.0179 18.2464 5.9636 18.1979Z' />
                      </svg>
                    </div>

                    {/* LinkedIn */}
                    <div className='w-10 h-10 rounded-full border border-[#252B37] flex items-center justify-center hover:border-[#149BB0] transition-colors cursor-pointer'>
                      <svg
                        className='w-4 h-4'
                        viewBox='0 0 18 17'
                        fill='#FDFDFD'
                      >
                        <path d='M4.39744 16.1056V5.30049H0.809161V16.1056H4.39781H4.39744ZM2.60405 3.82549C3.85509 3.82549 4.63395 2.99578 4.63395 1.95888C4.61054 0.898348 3.85509 0.0917969 2.62784 0.0917969C1.39975 0.0917969 0.597656 0.898349 0.597656 1.95878C0.597656 2.99568 1.37623 3.82539 2.58054 3.82539H2.60377L2.60405 3.82549ZM6.3836 16.1056H9.97159V10.0722C9.97159 9.7497 9.99501 9.42635 10.0898 9.196C10.3491 8.55051 10.9395 7.88234 11.931 7.88234C13.229 7.88234 13.7486 8.87311 13.7486 10.3258V16.1056H17.3365V9.9103C17.3365 6.59156 15.5665 5.04717 13.2058 5.04717C11.2703 5.04717 10.4203 6.12992 9.94799 6.86738H9.97188V5.30087H6.38379C6.43062 6.31452 6.38351 16.106 6.38351 16.106L6.3836 16.1056Z' />
                      </svg>
                    </div>

                    {/* TikTok */}
                    <div className='w-10 h-10 rounded-full border border-[#252B37] flex items-center justify-center hover:border-[#149BB0] transition-colors cursor-pointer'>
                      <svg
                        className='w-4 h-5'
                        viewBox='0 0 18 20'
                        fill='#FDFDFD'
                      >
                        <path d='M15.2768 4.25239C15.1441 4.18381 15.0149 4.10863 14.8898 4.02713C14.5258 3.7865 14.192 3.50296 13.8958 3.18262C13.1545 2.33442 12.8776 1.47394 12.7756 0.871476H12.7797C12.6945 0.371404 12.7298 0.0478516 12.7351 0.0478516H9.35867V13.1038C9.35867 13.2791 9.35867 13.4523 9.3513 13.6235C9.3513 13.6448 9.34925 13.6645 9.34802 13.6874C9.34802 13.6968 9.34802 13.7067 9.34597 13.7165C9.34597 13.7189 9.34597 13.7214 9.34597 13.7239C9.31038 14.1923 9.16022 14.6448 8.90869 15.0416C8.65716 15.4384 8.31198 15.7673 7.9035 15.9994C7.47779 16.2416 6.99629 16.3686 6.5065 16.368C4.93338 16.368 3.65842 15.0852 3.65842 13.5011C3.65842 11.9169 4.93338 10.6341 6.5065 10.6341C6.80428 10.6339 7.10023 10.6807 7.38336 10.773L7.38746 7.33514C6.52794 7.22412 5.65475 7.29243 4.82295 7.53576C3.99116 7.7791 3.21882 8.19218 2.55466 8.74894C1.9727 9.25458 1.48345 9.85791 1.10891 10.5318C0.966388 10.7775 0.428636 11.7649 0.363516 13.3675C0.32256 14.2772 0.595737 15.2196 0.725976 15.6091V15.6173C0.807888 15.8466 1.1253 16.6293 1.64257 17.2891C2.05968 17.8183 2.55248 18.2833 3.10511 18.6689V18.6607L3.1133 18.6689C4.74785 19.7796 6.56015 19.7067 6.56015 19.7067C6.87387 19.694 7.9248 19.7067 9.11826 19.1411C10.442 18.5141 11.1955 17.5799 11.1955 17.5799C11.677 17.0217 12.0598 16.3855 12.3276 15.6988C12.6331 14.8956 12.7351 13.9323 12.7351 13.5473V6.62087C12.776 6.64544 13.3216 7.00627 13.3216 7.00627C13.3216 7.00627 14.1075 7.51003 15.3337 7.83808C16.2135 8.07153 17.3987 8.12068 17.3987 8.12068V4.84945C16.8879 4.90375 16.0596 4.67639 15.2768 4.25239Z' />
                      </svg>
                    </div>
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
