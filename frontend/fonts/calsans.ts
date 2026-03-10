// Using Google Fonts as an alternative since localFont is causing issues
import { Montserrat } from 'next/font/google';

export const calsans = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-calsans',
  display: 'swap',
});
