import Link from "next/link";

export const resourcesLinks = [
    { href: "#", text: "Getting Started" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Tutorials" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Community Forums" },
];

export const platformLinks = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
];

export const communityLinks = [
    { href: "#", text: "Events" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferences" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Jobs" },
];

const Footer = () => {
    return (
        <div className="mt-20 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-8">
                <div >
                    <h4 className="text-md font-semibold mb-4">Resources</h4>
                    <ul className="space-y-2">
                        {resourcesLinks.map((links,index)=>(
                           <li key={index} className="">
                            <Link href={links.href} className="text-neutral-300 hover:text-white">
                                {links.text}
                            </Link>
                           </li>
                
                        ))}
                    </ul>
                    </div>
                    {/*  */}
                    <div >
                    <h4 className="text-md font-semibold mb-4">Platform</h4>
                    <ul className="space-y-2">
                        {platformLinks.map((links,index)=>(
                           <li key={index} className="">
                            <Link href={links.href} className="text-neutral-300 hover:text-white">
                                {links.text}
                            </Link>
                           </li>
                
                        ))}
                    </ul>
                    </div>
                    {/*  */}
                    <div >
                    <h4 className="text-md font-semibold mb-4">Community</h4>
                    <ul className="space-y-2">
                        {communityLinks.map((links,index)=>(
                           <li key={index} className="">
                            <Link href={links.href} className="text-neutral-300 hover:text-white">
                                {links.text}
                            </Link>
                           </li>
                
                        ))}
                    </ul>
                    </div>
            </div>
        </div>
    )
}

export default Footer