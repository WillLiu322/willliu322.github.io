import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Wei Liu · 刘威 | HKUST (Guangzhou)',
  description:
    'Wei Liu, Research Assistant at HKUST (Guangzhou) since August 2026. Academic homepage with publications, experience, and education.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
