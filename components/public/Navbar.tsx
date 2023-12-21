"use client"

import {navLinks} from "@/constants";
import {link} from "@/types/general";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {generateKey} from "@/lib/utils";

const Navbar = () => {
    const pathname = usePathname()

    return (
        <ul className="flex flex-col md:flex-between md:flex-row w-full items-start gap-5 mx-20">
            {navLinks.map((link: link) => {
                const isActive = pathname === link.route

                return (
                    <li
                        key={generateKey()}
                        className={`${isActive && `text-primary-500`} flex-center p-medium-16 whitespace-nowrap`}
                    >
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Navbar