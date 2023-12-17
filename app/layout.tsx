import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import {ClerkProvider} from "@clerk/nextjs";

import './globals.css'
import {Toaster} from "@/components/ui/toaster";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins'
})

export const metadata: Metadata = {
    title: 'EventVibe',
    description: 'Your go-to platform for managing events.',
    icons: {
        icon: '/assets/images/logo.svg'
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={poppins.className}>
                    {children}
                    <Toaster />
                </body>
            </html>
        </ClerkProvider>
    )
}
