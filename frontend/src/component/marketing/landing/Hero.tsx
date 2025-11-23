import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"


export const Main = () => {
    return (
        <section className="flex flex-col items-center mt-18 min-h-[700px] px-2 py-2">
            <h1 className="text-6xl md:text-7xl font-normal leading-tight text-center mb-2 max-w-6xl">Virtial Data Room <br/> for Startups & VCs</h1>
            
            <p className="text-sm md:text-md lg:text-lg font-normal text-gray-600 text-center mb-10 max-w-2xl">Secure document sharing. Page-by-page analytics.DocSend alternative.</p>

            <Button size='sm'asChild className="text-lg px-8 py-6 rounded-lg">
                <Link href='/signup'>Get started today</Link>
            </Button>

            <p className="text-sm text-gray-500 mt-6">No credit card required</p>


            <p className="text-gray-800 text-lg mt-15 mb-10">Powered by</p>
            <Image src="/tech-logos.svg" alt="tech logos" width="1200" height="800" ></Image>
        </section>
    )
}