import {Header} from "@/components/public/Header";
import {Footer} from "@/components/public/Footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <section className="flex h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        </section>
    )
}