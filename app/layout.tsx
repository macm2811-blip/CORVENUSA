import type { Metadata } from 'next';
import './globals.css';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corven-usa.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:'CORVEN USA | Field Operations Management',
  description:'Operations management, data visibility and instructional design for telecom, fiber and technical field service teams in Indiana and across the U.S.',
  alternates:{ canonical:'/' },
  openGraph:{ title:'CORVEN USA | Field Operations. Under control.', description:'Operations, data and training for telecom, fiber and technical field service teams.', url:siteUrl, siteName:'CORVEN USA', locale:'en_US', type:'website', images:[{url:`${siteUrl}/og.png`,width:1200,height:630,alt:'CORVEN USA — Field operations. Under control.'}] },
  twitter:{ card:'summary_large_image', title:'CORVEN USA | Field Operations. Under control.', description:'Operations, data and training for telecom, fiber and technical field service teams.', images:[`${siteUrl}/og.png`] },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
