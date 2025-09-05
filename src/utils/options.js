import { LuFacebook } from "react-icons/lu";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";


// footer related options start
export const footerSections = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", href: "/" },
            { name: "Browse Profiles", href: "/" },
            { name: "Success Stories", href: "/" },
            { name: "About Us", href: "/" },
            { name: "Contact Us", href: "/" },
        ]
    },
    {
        title: "Services",
        links: [
            { name: "Premium Membership", href: "/" },
            { name: "Profile Verification", href: "/" },
            { name: "Matchmaking", href: "/" },
            { name: "Wedding Planning", href: "/" },
            { name: "Relationship Counseling", href: "/" },
        ]
    },
    {
        title: "Support",
        links: [
            { name: "Help Center", href: "/" },
            { name: "Privacy Policy", href: "/" },
            { name: "Terms of Service", href: "/" },
            { name: "Safety Guidelines", href: "/" },
            { name: "FAQ", href: "/" },
        ]
    }
];

export const socialLinks = [
    { icon: LuFacebook, href: "/" },
    { icon: FiTwitter, href: "/" },
    { icon: SiInstagram, href: "/" },
    { icon: TbBrandYoutubeFilled, href: "/" }
];

// footer related options end

// navbar related options start
export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Biodatas", href: "/biodatas" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
];