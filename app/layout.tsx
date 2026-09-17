import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Projects Portal — MIHUD Pilot', description: 'Ministry project and contract management portal' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
