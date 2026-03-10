import localFont from 'next/font/local';

// For Arabic text
export const notoSansArabic = localFont({
  src: [
    {
      path: '../public/fonts/arabic/NotoSansArabic-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/arabic/NotoSansArabic-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/arabic/NotoSansArabic-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-noto-sans-arabic',
});
