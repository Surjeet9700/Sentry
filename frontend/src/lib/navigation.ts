

export type SubItems = {
    heading?: string;
    subheading?: string;
    Image?: string;
    label?: string;
    href?: string;
    description?: string;
    listheading?:string
}

export type NavItems = {
    isMegaMenu?: boolean;
    href: string;
    subItems?: SubItems[][];
    label: string;
}

export const HeaderMenuItems: NavItems[] = [
    {
        label: "Product",
        href: "/product",
        isMegaMenu: true,
        subItems: [
            [
                {
                    heading: "Securely manage, track, and share documents",
                    subheading: "All-in-one document platform.From secure sharing to page-by-page analytics",
                    Image: "/ellty-product-menu-item.png",
                },
            ],
            // column 1: Platform 
            [
                { listheading:"Platform", label: "Product Overview", href: "/plaform/overview" },
                { label: "Updates", href: "/plaform/updates" },
                { label: "Security", href: "/plaform/security" },
                { label: "System status", href: "/plaform/system/status" },
            ],
            // column 1: Features
            [
                { listheading:"Features", label: "Secure sharing", href: "/features/sharing" },
                { label: "Document analytics", href: "/features/analytics" },
                { label: "Screenshot protection", href: "/features/screenshot" },
                { label: "Password protection", href: "/features/password" },
                { label: "Lead capture", href: "/features/lead" },
            ],
            // Column 3: Compare (links)
            [
                { listheading:"Compare", label: "vs DocSend", href: "/compare/docsend" },
                { label: "vs Digify", href: "/compare/digify" },
                { label: "vs iDeals VDR", href: "/compare/ideals" },
                { label: "vs PandaDoc", href: "/compare/pandadoc" },
                { label: "vs FirmRoom", href: "/compare/firmroom" },
                { label: "vs Attach.io", href: "/compare/attach" },
                { label: "vs BriefLink", href: "/compare/brief" },
            ],
        ]

    },
    {
        label: "Solutions",
        href: "/soultions",
        isMegaMenu: true,
        subItems: [
            [
                {
                    heading: "Built for your workflow",
                    subheading: "See how teams use Ellty for fundraising, pitching, and closing deals.",
                    Image: "/solutions.png"
                }
            ],
            // clomn Use cases
            [
                { listheading:"Use cases", label: "Fundraising", description: "Raise capital with data-driven insights", href: "/use-cases/fundraising" },
                { label: "Investor updates", description: "Turn updates into stronger relationships", href: "/use-cases/investor-updates" },
                { label: "Board management", description: "Distribute board materials securely", href: "/use-cases/board-management" },
                { label: "Pitch deck software", description: "Upload, share securely, track activity", href: "/use-cases/pitch-deck-software" },
            ],  // Industry
            [
                { listheading:"Industry", label: "Startup", description: "Share decks and track views", href: "/industry/startup" },
                { label: "Venture capital", description: "Manage deal flow securely", href: "/industry/venture-capital" },
                { label: "Professional services", description: "Send proposals with analytics", href: "/industry/professional-services" },
                { label: "Nonprofit", description: "Report to donors with control", href: "/industry/nonprofit" },
            ],
                //Teams
            [
                {
                    listheading:"Teams", label: "C-Suite/Executive", description: "Insights on investor activity",
                    href: "/executive"
                },
                {
                    label: "HR", description: "Share confidential files safely",
                    href: "/hr"
                },
                {
                    label: "Sales", description: "Track engagement on materials",
                    href: "/sales"
                },
                {
                    label: "Legal", description: "Control access to contracts",
                    href: "/legal"
                },
            ],
        ]
    },
    {
        label: "Resources",
        href: "/resources",
        isMegaMenu: true,
        subItems: [
            [
                // Learn colums    
                {
                    listheading:"Learn", label: "Blog", description: "Insights to help you work smarter",
                    href: "/blog"
                },
                {
                    label: "How to guides", description: "Qucik guides for getting started",
                    href: "/guides"
                },

            ],
            //support
            [
                
                {
                    listheading:"Support", label: "Contact us", description: "Talk to support, get quick help",
                    href: "/contact"
                },
                {
                    label: "Careers", description: "work with us Ellty",
                    href: "/careers"
                },
                {
                    label: "Policies", description: "How we keep things secure",
                    href: "/policies"
                },
            ]
        ]
    },
    {
        label: "Blog",
        href: "/blog",
        isMegaMenu: false
    },
    {
        label: "Pricing",
        href: "/pricing",
        isMegaMenu: false
    }
]