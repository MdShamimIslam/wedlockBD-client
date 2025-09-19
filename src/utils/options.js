
import { LuFacebook } from "react-icons/lu";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { UserPlus, Search, Heart, MessageCircle,Mail, Phone, MapPin, Clock,  HeadphonesIcon, Users, Globe, Shield, Award, Target, Eye, Lightbulb, 
  BarChart3, Edit, Crown, CheckCircle, Star, Settings, User, XCircle, 
  Calendar} from 'lucide-react';

import shamim from "../assets/images/shamim.png";
import fatima from "../assets/images/fatima.jpeg";
import nadiya from "../assets/images/nadiya.jpeg";
import salman from "../assets/images/salman.jpg";
import niha from "../assets/images/niha.jpg";
import rahim from "../assets/images/rahim.jpg";
import sayem from "../assets/images/sayem.jpg";


export const allBiodatas = [
  {
    id: 1,
    name: 'Ahmed Rahman',
    biodataType: 'Male',
    profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Dhaka',
    age: 28,
    occupation: 'Software Engineer',
    education: 'Masters in Computer Science',
    height: '5\'8"',
    religion: 'Islam',
    about: 'I am a dedicated software engineer with a passion for technology and innovation. Looking for a life partner who shares similar values and dreams.',
    partnerExpectations: 'Looking for an educated, caring, and understanding life partner who values family and has a positive outlook on life.',
    fatherOccupation: 'Business',
    motherOccupation: 'Teacher',
    familyType: 'Nuclear',
    siblings: '1 Brother, 1 Sister',
    phone: '+880 1712-345678',
    email: 'ahmed.rahman@email.com'
  },
  {
    id: 2,
    name: 'Fatima Khan',
    biodataType: 'Female',
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Chattagram',
    age: 25,
    occupation: 'Doctor',
    education: 'MBBS',
    height: '5\'4"',
    religion: 'Islam',
    about: 'I am a compassionate doctor who loves helping people. Family is very important to me and I believe in maintaining work-life balance.',
    partnerExpectations: 'Seeking a respectful, educated partner who understands the demands of my profession and supports my career goals.',
    fatherOccupation: 'Doctor',
    motherOccupation: 'House wife',
    familyType: 'Joint',
    siblings: '2 Sisters',
    phone: '+880 1812-345679',
    email: 'fatima.khan@email.com'
  },
  {
    id: 3,
    name: 'Karim Hassan',
    biodataType: 'Male',
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Sylhet',
    age: 32,
    occupation: 'Business Owner',
    education: 'MBA',
    height: '5\'10"',
    religion: 'Islam',
    about: 'I run my own business and believe in hard work and dedication. I value honesty, loyalty, and family traditions.',
    partnerExpectations: 'Looking for a traditional, family-oriented woman who can be my life partner and best friend.',
    fatherOccupation: 'Retired',
    motherOccupation: 'House wife',
    familyType: 'Joint',
    siblings: '1 Brother',
    phone: '+880 1912-345680',
    email: 'karim.hassan@email.com'
  },
  {
    id: 4,
    name: 'Nadia Ahmed',
    biodataType: 'Female',
    profileImage: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Rangpur',
    age: 26,
    occupation: 'Teacher',
    education: 'Masters in Education',
    height: '5\'3"',
    religion: 'Islam',
    about: 'I am passionate about education and love working with children. I believe in creating a nurturing and supportive family environment.',
    partnerExpectations: 'Seeking an understanding and supportive partner who values education and family life.',
    fatherOccupation: 'Teacher',
    motherOccupation: 'Teacher',
    familyType: 'Nuclear',
    siblings: '1 Sister',
    phone: '+880 1712-345681',
    email: 'nadia.ahmed@email.com'
  },
  {
    id: 5,
    name: 'Rashid Ali',
    biodataType: 'Male',
    profileImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Khulna',
    age: 30,
    occupation: 'Engineer',
    education: 'B.Sc in Civil Engineering',
    height: '5\'9"',
    religion: 'Islam',
    about: 'I am a civil engineer working on infrastructure projects. I enjoy traveling and exploring new places with family.',
    partnerExpectations: 'Looking for a caring and understanding life partner who enjoys traveling and values family time.',
    fatherOccupation: 'Engineer',
    motherOccupation: 'House wife',
    familyType: 'Nuclear',
    siblings: '2 Brothers',
    phone: '+880 1812-345682',
    email: 'rashid.ali@email.com'
  },
  {
    id: 6,
    name: 'Sadia Rahman',
    biodataType: 'Female',
    profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Barisal',
    age: 24,
    occupation: 'Student',
    education: 'Masters in Literature',
    height: '5\'2"',
    religion: 'Islam',
    about: 'I am currently pursuing my masters degree and love reading books. I believe in continuous learning and personal growth.',
    partnerExpectations: 'Seeking an educated and supportive partner who encourages my academic pursuits and personal development.',
    fatherOccupation: 'Business',
    motherOccupation: 'Teacher',
    familyType: 'Nuclear',
    siblings: '1 Brother',
    phone: '+880 1912-345683',
    email: 'sadia.rahman@email.com'
  },
  {
    id: 7,
    name: 'Mahmud Khan',
    biodataType: 'Male',
    profileImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Maymansign',
    age: 29,
    occupation: 'Job',
    education: 'BBA',
    height: '5\'7"',
    religion: 'Islam',
    about: 'I work in a multinational company and believe in maintaining work-life balance. Family values are very important to me.',
    partnerExpectations: 'Looking for a well-educated, family-oriented partner who shares similar values and life goals.',
    fatherOccupation: 'Job',
    motherOccupation: 'House wife',
    familyType: 'Joint',
    siblings: '1 Sister',
    phone: '+880 1712-345684',
    email: 'mahmud.khan@email.com'
  },
  {
    id: 8,
    name: 'Ayesha Begum',
    biodataType: 'Female',
    profileImage: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Dhaka',
    age: 27,
    occupation: 'House wife',
    education: 'Honours in Bangla',
    height: '5\'1"',
    religion: 'Islam',
    about: 'I believe in creating a warm and loving home environment. I enjoy cooking and taking care of family members.',
    partnerExpectations: 'Seeking a respectful and caring husband who values family traditions and supports my role as a homemaker.',
    fatherOccupation: 'Business',
    motherOccupation: 'House wife',
    familyType: 'Joint',
    siblings: '2 Brothers',
    phone: '+880 1812-345685',
    email: 'ayesha.begum@email.com'
  },
  {
    id: 9,
    name: 'Tariq Ahmed',
    biodataType: 'Male',
    profileImage: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Chattagram',
    age: 31,
    occupation: 'Doctor',
    education: 'MBBS, MD',
    height: '5\'11"',
    religion: 'Islam',
    about: 'I am a practicing physician who is dedicated to serving patients. I believe in leading a balanced life with strong moral values.',
    partnerExpectations: 'Looking for an educated, understanding partner who can support my medical career and share life responsibilities.',
    fatherOccupation: 'Doctor',
    motherOccupation: 'Teacher',
    familyType: 'Nuclear',
    siblings: '1 Brother, 1 Sister',
    phone: '+880 1912-345686',
    email: 'tariq.ahmed@email.com'
  },
  {
    id: 10,
    name: 'Ruma Khatun',
    biodataType: 'Female',
    profileImage: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Sylhet',
    age: 23,
    occupation: 'Student',
    education: 'Honours in Economics',
    height: '5\'3"',
    religion: 'Islam',
    about: 'I am a final year student with dreams of building a successful career. I value education and personal development.',
    partnerExpectations: 'Seeking an educated and ambitious partner who supports my career goals and believes in gender equality.',
    fatherOccupation: 'Teacher',
    motherOccupation: 'House wife',
    familyType: 'Nuclear',
    siblings: '1 Sister',
    phone: '+880 1712-345687',
    email: 'ruma.khatun@email.com'
  },
  {
    id: 11,
    name: 'Habib Rahman',
    biodataType: 'Male',
    profileImage: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Rangpur',
    age: 33,
    occupation: 'Business',
    education: 'Masters in Business',
    height: '5\'8"',
    religion: 'Islam',
    about: 'I run a successful family business and believe in traditional values. I enjoy spending time with family and friends.',
    partnerExpectations: 'Looking for a traditional, family-oriented woman who can be a good wife and mother to our future children.',
    fatherOccupation: 'Business',
    motherOccupation: 'House wife',
    familyType: 'Joint',
    siblings: '2 Brothers',
    phone: '+880 1812-345688',
    email: 'habib.rahman@email.com'
  },
  {
    id: 12,
    name: 'Nasreen Akter',
    biodataType: 'Female',
    profileImage: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Khulna',
    age: 28,
    occupation: 'Teacher',
    education: 'Masters in Mathematics',
    height: '5\'4"',
    religion: 'Islam',
    about: 'I am a mathematics teacher who loves working with students. I believe in the power of education to change lives.',
    partnerExpectations: 'Seeking an educated and supportive partner who values education and can be my companion in life\'s journey.',
    fatherOccupation: 'Job',
    motherOccupation: 'Teacher',
    familyType: 'Nuclear',
    siblings: '1 Brother',
    phone: '+880 1912-345689',
    email: 'nasreen.akter@email.com'
  },
  {
    id: 13,
    name: 'Salim Khan',
    biodataType: 'Male',
    profileImage: 'https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Barisal',
    age: 26,
    occupation: 'Engineer',
    education: 'B.Sc in Electrical Engineering',
    height: '5\'6"',
    religion: 'Islam',
    about: 'I am an electrical engineer working in the power sector. I am passionate about technology and innovation.',
    partnerExpectations: 'Looking for an understanding and educated partner who can support my career and share my interests.',
    fatherOccupation: 'Engineer',
    motherOccupation: 'House wife',
    familyType: 'Nuclear',
    siblings: '1 Sister',
    phone: '+880 1712-345690',
    email: 'salim.khan@email.com'
  },
  {
    id: 14,
    name: 'Rehana Begum',
    biodataType: 'Female',
    profileImage: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Maymansign',
    age: 25,
    occupation: 'Job',
    education: 'BBA',
    height: '5\'2"',
    religion: 'Islam',
    about: 'I work in a corporate environment and enjoy the challenges of professional life. I believe in maintaining work-life balance.',
    partnerExpectations: 'Seeking a supportive and understanding partner who respects my career choices and values mutual respect.',
    fatherOccupation: 'Business',
    motherOccupation: 'Job',
    familyType: 'Nuclear',
    siblings: '1 Brother, 1 Sister',
    phone: '+880 1812-345691',
    email: 'rehana.begum@email.com'
  },
  {
    id: 15,
    name: 'Rafiq Ahmed',
    biodataType: 'Male',
    profileImage: 'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Dhaka',
    age: 34,
    occupation: 'Doctor',
    education: 'MBBS, MS',
    height: '5\'10"',
    religion: 'Islam',
    about: 'I am a specialist doctor with years of experience. I am dedicated to my profession and believe in serving humanity.',
    partnerExpectations: 'Looking for an educated and understanding life partner who can support my medical practice and share family responsibilities.',
    fatherOccupation: 'Retired',
    motherOccupation: 'House wife',
    familyType: 'Joint',
    siblings: '1 Sister',
    phone: '+880 1912-345692',
    email: 'rafiq.ahmed@email.com'
  },
  {
    id: 16,
    name: 'Shahida Khatun',
    biodataType: 'Female',
    profileImage: 'https://images.pexels.com/photos/1181721/pexels-photo-1181721.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Chattagram',
    age: 24,
    occupation: 'Student',
    education: 'Honours in English',
    height: '5\'1"',
    religion: 'Islam',
    about: 'I am studying English literature and have a passion for writing and reading. I dream of becoming a successful writer.',
    partnerExpectations: 'Seeking an educated and creative partner who can appreciate literature and support my writing aspirations.',
    fatherOccupation: 'Teacher',
    motherOccupation: 'House wife',
    familyType: 'Nuclear',
    siblings: '2 Sisters',
    phone: '+880 1712-345693',
    email: 'shahida.khatun@email.com'
  },
  {
    id: 17,
    name: 'Mizanur Rahman',
    biodataType: 'Male',
    profileImage: 'https://images.pexels.com/photos/1040884/pexels-photo-1040884.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Sylhet',
    age: 27,
    occupation: 'Job',
    education: 'Masters in Finance',
    height: '5\'7"',
    religion: 'Islam',
    about: 'I work in the banking sector and have a strong understanding of financial markets. I believe in financial planning and security.',
    partnerExpectations: 'Looking for an educated and practical partner who understands the importance of financial stability and planning.',
    fatherOccupation: 'Job',
    motherOccupation: 'Teacher',
    familyType: 'Nuclear',
    siblings: '1 Brother',
    phone: '+880 1812-345694',
    email: 'mizanur.rahman@email.com'
  },
  {
    id: 18,
    name: 'Sultana Begum',
    biodataType: 'Female',
    profileImage: 'https://images.pexels.com/photos/1181725/pexels-photo-1181725.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Rangpur',
    age: 26,
    occupation: 'House wife',
    education: 'Honours in History',
    height: '5\'3"',
    religion: 'Islam',
    about: 'I believe in creating a loving and supportive home environment. I enjoy cooking traditional foods and maintaining family traditions.',
    partnerExpectations: 'Seeking a respectful and caring husband who values family traditions and supports my role in maintaining our home.',
    fatherOccupation: 'Business',
    motherOccupation: 'House wife',
    familyType: 'Joint',
    siblings: '1 Brother, 2 Sisters',
    phone: '+880 1912-345695',
    email: 'sultana.begum@email.com'
  },
  {
    id: 19,
    name: 'Jahangir Alam',
    biodataType: 'Male',
    profileImage: 'https://images.pexels.com/photos/1040885/pexels-photo-1040885.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Khulna',
    age: 35,
    occupation: 'Business',
    education: 'MBA',
    height: '5\'9"',
    religion: 'Islam',
    about: 'I own and operate multiple businesses and believe in entrepreneurship. I value hard work, dedication, and family support.',
    partnerExpectations: 'Looking for a supportive and understanding life partner who can be my companion in both business and personal life.',
    fatherOccupation: 'Business',
    motherOccupation: 'House wife',
    familyType: 'Joint',
    siblings: '2 Brothers, 1 Sister',
    phone: '+880 1712-345696',
    email: 'jahangir.alam@email.com'
  },
  {
    id: 20,
    name: 'Rashida Akter',
    biodataType: 'Female',
    profileImage: 'https://images.pexels.com/photos/1181729/pexels-photo-1181729.jpeg?auto=compress&cs=tinysrgb&w=400',
    division: 'Barisal',
    age: 29,
    occupation: 'Teacher',
    education: 'Masters in Science',
    height: '5\'4"',
    religion: 'Islam',
    about: 'I am a science teacher who loves inspiring young minds. I believe in the importance of education and scientific thinking.',
    partnerExpectations: 'Seeking an educated and progressive partner who values education and can support my teaching career.',
    fatherOccupation: 'Teacher',
    motherOccupation: 'Teacher',
    familyType: 'Nuclear',
    siblings: '1 Sister',
    phone: '+880 1812-345697',
    email: 'rashida.akter@email.com'
  }
];

// section class
export const secCl = "my-16 md:my-20 lg:my-28 p-3 lg:p-0";

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
    name: "Sayem Ahmed",
    location: "Dhaka",
    message: "Excellent customer service! They helped me find my perfect match within 3 months.",
    rating: 5,
    image: sayem
  },
  {
    name: "Rahim",
    location: "Chattagram",
    message: "The support team is very responsive and helpful. Highly recommend SoulMate!",
    rating: 5,
    image: rahim
  },
  {
    name: "Niha Khan",
    location: "Sylhet",
    message: "Professional service with genuine care for their members. Thank you SoulMate!",
    rating: 5,
    image: niha
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

// divisions
export const divisions = ["Dhaka","Barisal","Chittagong","Khulna","Mymensingh","Rajshahi","Rangpur","Sylhet"];

export const countries = [
  "Bangladesh",
  "Afghanistan",
  "India",
  "Pakistan",
  "Nepal",
  "Bhutan",
  "Sri Lanka",
  "Maldives",
  "China",
  "Japan",
  "South Korea",
  "Malaysia",
  "Singapore",
  "Thailand",
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Saudi Arabia",
  "UAE",
  "Qatar",
  "Oman",
  "Kuwait",
  "South Africa",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Brazil",
  "Mexico"
];

 // User Sidebar Items
 export const userSidebarItems = [
  { path: "/dashboard/overview", label: "Overview", icon: BarChart3 },
  { path: "/dashboard/add-biodata", label: "Add Biodata", icon: UserPlus   },
  { path: "/dashboard/edit-biodata", label: "Edit Biodata", icon: Edit },
  { path: "/dashboard/view-biodata", label: "View Biodata", icon: Eye },
  { path: "/dashboard/contact-requests", label: "Contact Request", icon: MessageCircle },
  { path: "/dashboard/favorites", label: "Favourites", icon: Heart },
  { path: "/dashboard/got-married", label: "Got Married", icon: Crown}
];

// Admin Sidebar Items
export const adminSidebarItems = [
  { path: "/dashboard/admin-overview", label: "Overview", icon: BarChart3 },
  { path: "/dashboard/manage-users", label: "Manage Users", icon: Users },
  { path: "/dashboard/approved-premium", label: "Approved Pro", icon: Crown },
  { path: "/dashboard/approved-contact", label: "Contact Request", icon: CheckCircle },
  { path: "/dashboard/success-stories", label: "Success Stories", icon: Star },
  { path: "/dashboard/settings", label: "Settings", icon: Settings },
];

// contact request table
export const tHead = [
  {
    icon: User,
    title: "Full Name",
  },
  {
    icon: Mail,
    title: "Email",
  },
  {
    icon: Phone,
    title: "Number",
  },
  {
    icon: Calendar,
    title: "Request Date",
  },
  {
    icon: CheckCircle,
    title: "Status",
  },
  {
    icon: XCircle,
    title: "Action",
  },
];

