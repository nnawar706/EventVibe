import {Header} from "@/components/public/Header";
import {Footer} from "@/components/public/Footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Header />
        <body>{children}</body>
        <Footer />
        </html>
    )
}