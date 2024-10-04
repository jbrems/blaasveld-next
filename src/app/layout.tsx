import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Blaasveld.net",
  description: "Alle informatie over Blaasveld",
};

export default function RootLayout({
  children,
  clubs,
  events,
  shops,
}: Readonly<{
  children: React.ReactNode,
  clubs: React.ReactNode,
  events: React.ReactNode,
  shops: React.ReactNode,
}>) {
  return (
    <html lang="nl">
      <body>
        <nav>
          <ul style={{ display: 'flex', gap: '25px' }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/clubs">Verenigingen</Link></li>
            <li><Link href="/events">Activiteiten</Link></li>
            <li><Link href="/shops">Handelaars en Horeca</Link></li>
          </ul>
        </nav>
        <div>
          {children}
        </div>
        <div style={{display: 'flex', alignItems: 'stretch', gap: '10px'}}>
          {clubs}
          {events}
          {shops}
        </div>
      </body>
    </html>
  );
}
