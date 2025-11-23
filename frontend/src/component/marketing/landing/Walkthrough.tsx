import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShieldCheck, GlobeLock, Lock } from 'lucide-react';


type TextContentProps = {
    title:string
    desc:string
    buttonTitle:string
}



type ImageContentProps = {
    title:string
    image:string
}

const iconMap = {
    ShieldCheck: ShieldCheck,
    GlobeLock: GlobeLock,
    Lock: Lock
};


export function WalkThrough () {

    const items = [
        {
            id:0,
            title:"Upload your documents",
            desc:"Upload your existing documents and make them trackable with detailed insights. Stop sending PDFs that nobody opens.",
            buttonTitle:"Start for Free",
            image:"ellty-templates-upload-4.png"
        },
        {
            id:1,
            title:"Flexible secure sharing",
            desc:"Send secure links with custom settings and get real-time notifications when viewed. Set passwords, require emails, add expiration dates, and restrict downloads. Complete control over who sees your content.",
            buttonTitle:"Start for Free",
            image:"agency-10.png"
        },
        {
            id:2,
            title:"Page-by-page analytics",
            desc:"Track every page interaction in real-time. Know which sections generate interest, how long people stay engaged, and where you lose their attention. Actionable data for better outcomes.",
            buttonTitle:"Learn more",
            image:"page-by-page-analytics.png"
        },
        {
            id:3,
            title:"Team workspaces",
            desc:"Build workspaces tailored to your team's needs. Centralize documents, control access with custom permissions, and streamline collaboration. Keep projects organized and teams connected.",
            buttonTitle:"Learn more",
            image:"ellty-workspace-2.png"
        },
    ]


    const EnterpricesContent = [
        {
            id:0,
            icons:"ShieldCheck",
            title:"Compliant Infrastructure",
            desc:"Leveraging AWS infrastructure with SOC 1 & 2, ISO 27001, and PCI DSS compliance. We inherit enterprise-grade security controls from the world's leading cloud provider."
        },
        {
            id:1,
            icons:"GlobeLock",
            title:"Enterprise Hosting",
            desc:"Your files are protected with multiple redundant backups across availability zones. Web Application Firewalls and DDoS protection guard against attacks 24/7."
        },
        {
            id:2,
            icons:"Lock",
            title:"256-bit AES Encryption",
            desc:"All documents are secured with AES-256 encryption, the same standard approved by the NSA for classified information and used by banks worldwide."
        },

    ]

    const TextContent = ({title, desc, buttonTitle}: TextContentProps) => (
        <div className="space-y-4">
            <h3 className="font-normal text-xl md:text-2xl lg:text-3xl text-black">{title}</h3>
            <p className="font-normal text-sm md:text-md lg:text-lg text-black" >{desc}</p>
            <Button variant={"outline"} className="text-base">{buttonTitle}</Button>
        </div>
    )

    const ImageContent = ({image, title}:ImageContentProps) => (
        <div className="relative w-full h-16 md:h:32 lg:h-96 rounded-2xl overflow-hidden">
            <Image
                src={`/${image}`}
                alt={title}
                fill
                className="object-cover"
            />
        </div>
    )



    return(
        <section className="mt-32">
            <div className="text-center flex flex-col mx-auto space-y-3">
                <p className="text-2xl font-normal md:text-3xl lg:text-4xl text-black ">Designed to make work easier</p>
                <p className="text-black text-sm font-normal md:text-md lg:text-lg ">Advanced features that streamline your workflow from sharing to closing.</p>
            </div>

            <div className="mt-16 px-8 md:px-16 lg:px-24">
                <div className="space-y-12 md:space-y-20">
                    {items.map((item, index) => {
                        const isEven = index % 2 == 0;
                        return (
                            <div key={index} className="grid md:grid-cols-2 lg:gap-20  gap-8 items-center">
                                {isEven ? (
                                <>
                                    {/* Image Left    */}
                                    <ImageContent image={item.image} title={item.title}/>
                                    {/* Text Right */}
                                    <TextContent desc={item.desc} title={item.title} buttonTitle={item.buttonTitle} />
                                </>
                            
                            ) : (
                                <>
                                {/* Text Right */}
                                    <TextContent desc={item.desc} title={item.title} buttonTitle={item.buttonTitle} />
                                {/* Image Left    */}
                                    <ImageContent image={item.image} title={item.title}/>
                            </>
                        )}

                            </div>
                        )
                    })}
                </div>
            </div>


            {/* Enterprise-grade security section */}
            <div className="mt-24 space-y-8">
                <div className="flex text-center justify-center">
                    <p className="font-normal text-2xl md:text-3xl lg:text-4xl">Enterprise-grade security</p>
                </div>
                <div className="grid grid-row-3 lg:grid-cols-3 px-4 py-8 lg:px-18 justify-center items-start space-y-4">
                    {EnterpricesContent.map((items) => {
                        //@ts-ignore
                         const IconComponent = iconMap[items.icons]; 
                         return(

                             <div key={items.id} className="gap-20 space-x-4 space-y-2">
                            <div className="bg-[#eee8ff] w-12 ml-4 h-12 rounded-lg flex items-center justify-center mb-4">{IconComponent && <IconComponent className="w-6 h-6 text-black"  />}</div>
                            <h3 className="lg:text-xl font-normal px-4 mb-2">{items.title}</h3>
                            <p className="font-normal tracking-tight text-md md:text-md lg:text-lg px-4 md:px-6">{items.desc}</p>

                        </div>
                        
                    )})}

                </div>

                <div className="mt-24 h-108 w-full px-8 bg-[#f4f3ed] border-b-gray-500">
                    <div className="container w-full h-[450px] flex flex-col space-y-8 text-center py-12 px-8 justify-center item-center">
                        <p className="text-2xl tracking-wide md:text-3xl lg:text-4xl font-normal">Start getting real data from every <br/> document you share</p>
                        <div className="flex justify-center">
                            <Button>Get started today </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    )
}