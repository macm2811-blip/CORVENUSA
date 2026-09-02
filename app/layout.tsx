import type { Metadata } from 'next';
import './globals.css';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corvenusa.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:'COREA OPS | Field Operations & Performance',
  description:'Field operations, performance improvement, data visibility and instructional design for telecom, fiber and technical service teams across the U.S.',
  alternates:{ canonical:'/' },
  openGraph:{ title:'COREA OPS | Field Operations & Performance', description:'Practical operations, data and training systems for telecom, fiber and technical field service teams.', url:siteUrl, siteName:'COREA OPS', locale:'en_US', type:'website', images:[{url:`${siteUrl}/og.png`,width:1200,height:630,alt:'COREA OPS — Field Operations & Performance'}] },
  twitter:{ card:'summary_large_image', title:'COREA OPS | Field Operations & Performance', description:'Practical operations, data and training systems for telecom, fiber and technical field service teams.', images:[`${siteUrl}/og.png`] },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
