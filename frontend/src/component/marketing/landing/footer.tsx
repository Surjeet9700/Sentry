import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Globe } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Left Column - Social Media */}
                    <div className="flex flex-col">
                        <div className="flex flex-col space-y-3 mb-12">
                            <Link href="https://twitter.com" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                                <FaTwitter className="w-4 h-4" />
                                <span className="text-sm">X (Twitter)</span>
                            </Link>
                            <Link href="https://linkedin.com" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                                <FaLinkedin className="w-4 h-4" />
                                <span className="text-sm">LinkedIn</span>
                            </Link>
                            <Link href="https://facebook.com" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                                <FaFacebook className="w-4 h-4" />
                                <span className="text-sm">Facebook</span>
                            </Link>
                            <Link href="https://instagram.com" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                                <FaInstagram className="w-4 h-4" />
                                <span className="text-sm">Instagram</span>
                            </Link>
                        </div>

                        {/* Logo */}
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight">ELLTY.</h3>
                        </div>
                    </div>

                    {/* Right Section - All link columns */}
                    <div className="lg:col-span-4">
                        {/* Top Row - 5 columns */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">

                            {/* Product Column */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 text-sm">Product</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/product/overview" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Product overview</Link></li>
                                    <li><Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link></li>
                                    <li><Link href="/updates" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Updates</Link></li>
                                    <li><Link href="/security" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Security</Link></li>
                                    <li><Link href="/status" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">System status</Link></li>
                                </ul>
                            </div>

                            {/* Features Column */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 text-sm">Features</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/features/sharing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Secure sharing</Link></li>
                                    <li><Link href="/features/analytics" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Document analytics</Link></li>
                                    <li><Link href="/features/screenshot" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Screenshot protection</Link></li>
                                    <li><Link href="/features/password" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Password protection</Link></li>
                                    <li><Link href="/features/lead" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Lead capture</Link></li>
                                    <li><Link href="/features/pitch-tracking" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pitch deck tracking</Link></li>
                                    <li><Link href="/features/pitch-sharing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pitch deck sharing</Link></li>
                                </ul>
                            </div>

                            {/* Resources Column */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 text-sm">Resources</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</Link></li>
                                    <li><Link href="/guides" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How to guides</Link></li>
                                    <li><Link href="/help" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Help center</Link></li>
                                    <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contacts</Link></li>
                                    <li><Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Careers</Link></li>
                                    <li><Link href="/policies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Company policies</Link></li>
                                </ul>
                            </div>

                            {/* Use Cases Column */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 text-sm">Use cases</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/use-cases/fundraising" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Fundraising</Link></li>
                                    <li><Link href="/use-cases/investor-updates" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Investor updates</Link></li>
                                    <li><Link href="/use-cases/board" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Board communications</Link></li>
                                    <li><Link href="/use-cases/pitch-deck" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pitch deck software</Link></li>
                                </ul>
                            </div>

                            {/* Industry Column */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 text-sm">Industry</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/industry/startup" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Startup</Link></li>
                                    <li><Link href="/industry/vc" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Venture capital</Link></li>
                                    <li><Link href="/industry/professional" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Professional services</Link></li>
                                    <li><Link href="/industry/nonprofit" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Nonprofit</Link></li>
                                </ul>
                            </div>

                        </div>

                        {/* Bottom Row - 3 columns */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                            {/* Alternatives Column */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 text-sm">Alternatives</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/compare/docsend" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">DocSend</Link></li>
                                    <li><Link href="/compare/digify" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Digify</Link></li>
                                    <li><Link href="/compare/ideals" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Ideals VDR</Link></li>
                                    <li><Link href="/compare/firmroom" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FirmRoom</Link></li>
                                    <li><Link href="/compare/attach" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Attach.io</Link></li>
                                    <li><Link href="/compare/brieflink" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Brieflink</Link></li>
                                    <li><Link href="/alternatives" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">DocSend alternatives</Link></li>
                                    <li><Link href="/alternatives/all" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">All alternatives</Link></li>
                                </ul>
                            </div>

                            {/* Read More Column */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 text-sm">Read more</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/guides/pdf-forwarding" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Prevent PDF forwarding</Link></li>
                                    <li><Link href="/guides/send-securely" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Send documents securely</Link></li>
                                    <li><Link href="/guides/deck-investors" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Send deck to investors</Link></li>
                                    <li><Link href="/guides/investor-outreach" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Investor outreach</Link></li>
                                    <li><Link href="/guides/track-activity" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Track activity on pitch deck</Link></li>
                                    <li><Link href="/guides/protect-deck" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Protect your pitch deck</Link></li>
                                </ul>
                            </div>

                            {/* Teams Column */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 text-sm">Teams</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/teams/executive" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">C-Suite/Executive</Link></li>
                                    <li><Link href="/teams/hr" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">HR</Link></li>
                                    <li><Link href="/teams/sales" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Sales</Link></li>
                                    <li><Link href="/teams/legal" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Legal</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar - Full Width */}
            <div className="border-t border-gray-200 w-full">
                <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-2 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-4 text-sm">
                        {/* Left: Language & Links */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600">
                            <button className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                                <Globe className="w-4 h-4" />
                                <span>English</span>
                            </button>
                            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Use</Link>
                            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
                        </div>

                        {/* Right: Copyright */}
                        <div className="text-gray-600">
                            © 2020-2025 All Right Reserved, Ellty ®
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
