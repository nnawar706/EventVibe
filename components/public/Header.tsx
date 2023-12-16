import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    <Image src="/assets/images/logo.svg" alt="Logo" width={128} height={38}/>
                </Link>
                <div className="flex w-32 justify-end gap-3"></div>
            </div>
        </header>
    )
}