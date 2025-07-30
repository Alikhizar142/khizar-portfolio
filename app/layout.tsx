import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khizar Ali - AI Engineer Portfolio',
  description: 'AI Engineer & Student passionate about building intelligent systems that solve real-world problems. View my projects, experience, and skills.',
  generator: 'Next.js',
  keywords: ['AI Engineer', 'Machine Learning', 'Computer Vision', 'Python', 'TensorFlow', 'Portfolio'],
  authors: [{ name: 'Khizar Ali' }],
  creator: 'Khizar Ali',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
