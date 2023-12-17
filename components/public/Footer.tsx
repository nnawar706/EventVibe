import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="border-t">
            <div className="flex flex-col flex-between fkex-center wrapper gap-4 p-5
            text-center sm:flex-row">
                <Link href="/">
                    <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38}/>
                </Link>
                <p>EventVibe@2024. All Rights Reserved.</p>
            </div>
        </footer>
    )
}