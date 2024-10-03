import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from '~/components/theme-provider'
import { Toaster } from '~/components/ui/sonner'
import { ny } from '~/lib/utils'
import '~/styles/globals.css'

const fontSans = FontSans({
   subsets: ['latin'],
   variable: '--font-sans',
})
export const metadata: Metadata = {
   title: "GDG RAIT Hacktober Fest '24",
   description: 'Code, Create, Collaborate – Open Source for All!',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={ny(
               'bg-background min-h-screen font-sans antialiased dark',
               fontSans.variable,
            )}
         >
            <ThemeProvider disableTransitionOnChange>
               {children}
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   )
}
