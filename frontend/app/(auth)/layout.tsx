import Image from 'next/image';
import React from 'react';

const AuthLayout = ({children} : {children: Readonly<React.ReactNode>}) => {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-700'>
      {/* <NavbarDemo /> */}
      <div className='flex flex-col md:flex-row h-screen'>
        {/* Left section with investment-themed content */}
        <div className='hidden   md:flex md:w-1/2 relative bg-blue-50 flex-col items-center justify-center '>
          <div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/30'></div>
          
          {/* Investment stats and graphics */}
          <div className='relative z-10 mb-12 w-full max-w-md'>
            <div className='bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100'>
              <h3 className='text-xl font-semibold text-blue-900 mb-4'>Why Choose Our Platform?</h3>
              
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <p className='text-sm font-medium text-gray-900'>Diversified Investment Options</p>
                    <p className='text-xs text-gray-500'>Access to stocks, bonds, ETFs, and more</p>
                  </div>
                </div>
                
                <div className='flex items-center'>
                  <div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <p className='text-sm font-medium text-gray-900'>Bank-Level Security</p>
                    <p className='text-xs text-gray-500'>Your investments are protected and secure</p>
                  </div>
                </div>
                
                <div className='flex items-center'>
                  <div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <p className='text-sm font-medium text-gray-900'>Performance Analytics</p>
                    <p className='text-xs text-gray-500'>Track and optimize your portfolio growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className='relative z-10 text-center'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4'>
              Grow Your Wealth with Smart Investments
            </h1>
            <p className='text-blue-800 text-lg md:text-xl mb-8'>
              Join thousands of investors who trust our platform for their financial future
            </p>
            <div className='flex justify-center'>
              <Image 
                src="/investora_logo/main_logo.png" 
                alt="Investment Platform" 
                className='h-24 w-auto'
                width={96}
                height={96}
              />
              {/* <img 
                src="/investora_logo/main_logo.png" 
                alt="Investment Platform" 
                className='h-24 w-auto'
              /> */}
            </div>
          </div>
        </div>
        
        {/* Right section with the form */}
        <div className='w-full md:w-1/2 flex items-center justify-center px-4 py-12 md:px-8 lg:px-12'>
          <div className='w-full max-w-md'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
