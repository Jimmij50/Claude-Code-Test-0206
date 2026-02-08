import './globals.css'

export const metadata = {
  title: 'Simple Next.js Website',
  description: 'A simple one-page website built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
