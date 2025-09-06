import { LuFacebook } from "react-icons/lu";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { UserPlus, Search, Heart, MessageCircle,Mail, Phone, MapPin, Clock,  HeadphonesIcon, Users, Globe, Shield, Award, Target, Eye, Lightbulb } from 'lucide-react';

// section class
export const secCl = "my-16 md:my-20 lg:my-24";

// navbar options
export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Biodatas", href: "/biodatas" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
];

// footer options
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

// bannner options
export const sliders = [
    {
      img: "https://i.ibb.co/GF8yDjN/1r.jpg",
      title: "The Perfect Venue",
      des: "Discover the ideal setting for your special day. From charming gardens to elegant ballrooms, we have the perfect venue to make your wedding dreams come true.",
    },
    {
      img: "https://i.ibb.co/JsH7BTT/2.jpg",
      title: "Exquisite Bridal Gowns",
      des: "Find the dress of your dreams from our stunning collection of bridal gowns. Whether you're looking for something classic and timeless or modern and chic, we have a style for every bride.",
    },
    {
      img: "https://i.ibb.co/hZtFnw3/3.jpg",
      title: "Personalized Wedding Invitations",
      des: "Set the tone for your wedding with beautifully designed invitations that reflect your unique style and personality. From traditional to contemporary, we'll help you create invitations that leave a lasting impression.",
    },
    {
      img: "https://i.ibb.co/qkgmdcX/4.jpg",
      title: "Delicious Catering Options",
      des: "Treat your guests to a culinary experience they won't forget with our delicious catering options. From elegant plated dinners to casual buffet-style feasts, we'll work with you to create a menu that delights every palate.",
    },
    {
      img: "https://i.ibb.co/8dJbJfZ/5.jpg",
      title: "Capturing Precious Moments",
      des: "Trust our team of talented photographers and videographers to capture every precious moment of your wedding day. From the first look to the last dance, we'll ensure that every memory is preserved for a lifetime.",
    },
];

// premium profiles options
export const premiumProfiles = [
    {
      id: 1,
      biodataType: 'Male',
      profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      division: 'Dhaka',
      age: 28,
      occupation: 'Software Engineer'
    },
    {
      id: 2,
      biodataType: 'Female',
      profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      division: 'Chattagram',
      age: 25,
      occupation: 'Doctor'
    },
    {
      id: 3,
      biodataType: 'Male',
      profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      division: 'Sylhet',
      age: 32,
      occupation: 'Business Owner'
    },
    {
      id: 4,
      biodataType: 'Female',
      profileImage: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      division: 'Rangpur',
      age: 26,
      occupation: 'Teacher'
    },
    {
      id: 5,
      biodataType: 'Male',
      profileImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      division: 'Khulna',
      age: 30,
      occupation: 'Engineer'
    },
    {
      id: 6,
      biodataType: 'Female',
      profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      division: 'Barisal',
      age: 24,
      occupation: 'Student'
    }
];

// success stories options
export const successStories = [
{
    id: 1,
    coupleImage: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
    marriageDate: '2024-01-15',
    rating: 5,
    story: 'We found each other through SoulMate and it was love at first sight. The platform made it so easy to connect with genuine people. Thank you for bringing us together!'
},
{
    id: 2,
    coupleImage: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    marriageDate: '2023-12-20',
    rating: 5,
    story: 'After months of searching, we finally found our perfect match. The detailed profiles and verification process gave us confidence. We are now happily married!'
},
{
    id: 3,
    coupleImage: 'https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=400',
    marriageDate: '2023-11-10',
    rating: 4,
    story: 'SoulMate helped us find true love. The matching algorithm is amazing and we connected instantly. Our families are also very happy with our choice.'
},
{
    id: 4,
    coupleImage: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
    marriageDate: '2023-10-05',
    rating: 5,
    story: 'We were both skeptical about online matrimony, but SoulMate proved us wrong. The quality of profiles and the genuine people we met exceeded our expectations.'
}
];

// site work options
export const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Sign up and create a detailed profile with your preferences, photos, and personal information to attract compatible matches.",
      color: "text-rose-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Search,
      title: "Find Compatible Matches",
      description: "Browse through verified profiles and use our advanced search filters to find potential life partners based on your criteria.",
      color: "text-purple-500",
      bgColor: "bg-green-50"
    },
    {
      icon: MessageCircle,
      title: "Connect & Communicate",
      description: "Send interest requests and start meaningful conversations with your preferred matches in a safe and secure environment.",
      color: "text-yellow-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      title: "Find Your Soulmate",
      description: "Build meaningful relationships, meet in person with family involvement, and take the next step towards a happy married life.",
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    }
];

// contact us options
export const contactInfo = [
  {
    icon: Phone,
    title: "Call Us Anytime",
    details: ["+880 1571529918", "+880 9638727541"],
    description: "Available 24/7 for your queries and support",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["support@wedlockbd.com", "shamim401897@gmail.com" ],
    description: "We'll respond within 2-4 hours",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["123 Love Street, Dhanmondi", "Dhaka-1205, Bangladesh"],
    description: "Monday to Saturday, 9 AM - 6 PM",
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
    description: "Extended hours for premium members",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  }
];

export const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    description: "Get instant help from our support team with real-time chat assistance",
    features: ["Instant Response", "24/7 Available", "Multi-language Support"],
    action: "Start Chat Now",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: HeadphonesIcon,
    title: "Phone Consultation",
    description: "Speak directly with our matrimony experts for personalized guidance",
    features: ["Expert Advice", "Free Consultation", "Callback Service"],
    action: "Schedule Call",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with other members and get advice from our community",
    features: ["Member Stories", "Expert Tips", "Q&A Sessions"],
    action: "Join Community",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Globe,
    title: "Video Consultation",
    description: "Face-to-face consultation with our relationship counselors",
    features: ["Personal Guidance", "Relationship Tips", "Family Counseling"],
    action: "Book Session",
    color: "from-pink-500 to-pink-600"
  }
];

export const faqCategories = [
  {
    title: "Account & Profile",
    questions: [
      "How do I create a profile?",
      "How to verify my profile?",
      "Can I edit my information?",
      "How to delete my account?"
    ]
  },
  {
    title: "Matching & Search",
    questions: [
      "How does matching work?",
      "Can I search by location?",
      "How to save favorite profiles?",
      "What are compatibility scores?"
    ]
  },
  {
    title: "Privacy & Safety",
    questions: [
      "Is my information secure?",
      "How to report suspicious profiles?",
      "Can I block someone?",
      "What are privacy settings?"
    ]
  },
  {
    title: "Premium Features",
    questions: [
      "What are premium benefits?",
      "How to upgrade my account?",
      "Payment methods available?",
      "Can I cancel subscription?"
    ]
  }
];

export const officeLocations = [
  {
    city: "Dhaka",
    address: "123 Love Street, Dhanmondi, Dhaka-1205",
    phone: "+880 1234-567890",
    email: "dhaka@soulmate.com",
    manager: "Rahul Ahmed"
  },
  {
    city: "Chattagram",
    address: "456 Heart Avenue, Agrabad, Chattagram-4100",
    phone: "+880 1234-567891",
    email: "chattagram@soulmate.com",
    manager: "Fatima Khan"
  },
  {
    city: "Sylhet",
    address: "789 Romance Road, Zindabazar, Sylhet-3100",
    phone: "+880 1234-567892",
    email: "sylhet@soulmate.com",
    manager: "Arif Hassan"
  }
];

export const testimonials = [
  {
    name: "Sarah Ahmed",
    location: "Dhaka",
    message: "Excellent customer service! They helped me find my perfect match within 3 months.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Karim Rahman",
    location: "Chattagram",
    message: "The support team is very responsive and helpful. Highly recommend SoulMate!",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Nadia Khan",
    location: "Sylhet",
    message: "Professional service with genuine care for their members. Thank you SoulMate!",
    rating: 5,
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

// about us options
export const features = [
  {
    icon: Shield,
    title: "100% Verified Profiles",
    description: "All profiles are manually verified by our expert team to ensure authenticity and safety for our members.",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "Join thousands of families who trust us to find their perfect life partner in a safe environment.",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Globe,
    title: "Worldwide Reach",
    description: "Connect with potential matches not just locally but from around the globe with ease.",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Award,
    title: "Premium Service",
    description: "Dedicated support team available 24/7 with personalized matchmaking assistance.",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Target,
    title: "Perfect Matching",
    description: "AI-powered compatibility analysis to find your most suitable life partner.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Eye,
    title: "Privacy Protection",
    description: "Your personal information is completely secure with our advanced privacy measures.",
    color: "text-pink-500",
    bgColor: "bg-pink-50"
  }
];

export const values = [
  {
    title: "Trust & Safety",
    description: "We prioritize the safety and privacy of our members with strict verification processes and secure data handling.",
    icon: Shield
  },
  {
    title: "Cultural Values",
    description: "Respecting traditional Bengali marriage customs while embracing modern technology for better connections.",
    icon: Heart
  },
  {
    title: "Family Involvement",
    description: "We understand the importance of family in Bengali marriages and facilitate their meaningful involvement.",
    icon: Users
  },
  {
    title: "Quality Matches",
    description: "Our advanced algorithms ensure compatible matches based on preferences, values, and lifestyle choices.",
    icon: Target
  },
  {
    title: "Transparency",
    description: "Complete transparency in our processes, pricing, and member interactions for building trust.",
    icon: Eye
  },
  {
    title: "Innovation",
    description: "Continuously improving our platform with latest technology to enhance user experience.",
    icon: Lightbulb
  }
];

import shamim from "../assets/images/shamim.png";
import fatima from "../assets/images/fatima.jpeg";
import nadiya from "../assets/images/nadiya.jpeg";
import salman from "../assets/images/salman.jpg";

export const teamMembers = [
  {
    name: "Md. Shamim Islam",
    position: "Founder & CEO",
    image: shamim,
    description: "3.5+ years experience in matrimony industry"
  },
  {
    name: "Fatima Khan",
    position: "Head of Operations",
    image: fatima,
    description: "Expert in relationship counseling and matchmaking"
  },
  {
    name: "Salman Khan",
    position: "Technical Director",
    image: salman,
    description: "Leading our technology and security initiatives"
  },
  {
    name: "Nadia Rahman",
    position: "Customer Success Manager",
    image: nadiya,
    description: "Ensuring exceptional member experience and support"
  }
];


