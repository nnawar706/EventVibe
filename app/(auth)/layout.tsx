import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex-center min-h-screen w-full bg-primary-50
        bg-dotted-pattern bg-cover bg-fixed bg-center">
            {children}
        </section>
    )
}

export default Layout