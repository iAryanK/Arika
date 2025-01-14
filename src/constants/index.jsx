import { Brain, BriefcaseBusiness, CodeXml, Home, Smile, Users } from "lucide-react";
import { FaDatabase, FaFileCode } from "react-icons/fa6";
import { PiCodeSimpleFill, PiComputerTowerFill, PiNetworkFill } from "react-icons/pi";

export const SidebarLinks = [
    {
        imgURL: <Home />,
        route: "/",
        label: "Home",
    },
    {
        imgURL: <Users />,
        route: "/community",
        label: "Community",
    },
    {
        imgURL: <Brain />,
        route: "/aptitude",
        label: "Aptitude",
    },
    {
        imgURL: <BriefcaseBusiness />,
        route: "/jobs",
        label: "Jobs",
    },
    {
        imgURL: <Smile />,
        route: "/profile",
        label: "Profile",
    },
];

export const heroItems = [
    {
        image: "/hero/1.png",
        link: "/",
    },
    {
        image: "/hero/2.png",
        link: "/profile",
    },
    {
        image: "/hero/3.png",
        link: "/aptitude",
    },
    {
        image: "/hero/6.png",
        link: "/community",
    },
    {
        image: "/hero/4.png",
        link: "/code",
    },
    {
        image: "/hero/5.png",
        link: "/jobs",
    },
]

export const AIAptitudeItems = [
    {
        image: <PiComputerTowerFill size={44} />,
        title: "OS",
        description: "Operating System",
        link: "/aptitude/os",
    },
    {
        image: <FaFileCode size={44} />,
        title: "OOPs",
        description: "Object Oriented Programming System",
        link: "/aptitude/oops",
    },
    {
        image: <PiNetworkFill size={44} />,
        title: "CN",
        description: "Computer Networks",
        link: "/aptitude/cn",
    },
    {
        image: <FaDatabase size={44} />,
        title: "DBMS",
        description: "Database Management System",
        link: "/aptitude/dbms",
    },
    {
        image: <PiCodeSimpleFill size={44} />,
        title: "Logical reasoning",
        description: "Logical reasoning",
        link: "/aptitude/logical_reasoning",
    }
]

export const TrendingAptitudeItems = [
    {
        icon: "🪄",
        bgColor: "bg-violet-700",
        subject: "AI",
        link: "/aptitude/ai",
    },
    {
        icon: "🚀",
        bgColor: "bg-orange-700",
        subject: "Reasonings",
        link: "/aptitude/logical_reasoning",
    },
    {
        icon: "🔥",
        bgColor: "bg-red-400",
        subject: "Computer Networks",
        link: "/aptitude/computer_networks",
    },
    {
        icon: "👨‍💻",
        bgColor: "bg-green-300",
        subject: "Miscellaneous",
        link: "/aptitude/miscellaneous",
    },
];

export const companies = [
    "LinkedIn", "Twitter", "Microsoft", "Atlassian", "Walmart", "Oracle", "Oracle-Netsuite",
    "SalesForce", "SAP Labs", "MindTickle", "VISA", "J.P.Morgan", "Intuit", "Qualcomm",
    "Nvidia", "AMD", "Silicon Labs", "Teradata", "Tokopedia", "Mediatek", "Microchip",
    "Bloomberg LP", "Mathworks", "DE Shaw", "Tekion Corp", "Yugabyte", "Grab", "Groupon",
    "Delplix", "Indeed", "PaloAlto Networks", "Zoom", "Clear", "Adobe", "Samsung", "Oppo",
    "Flipkart", "Myntra", "Meesho", "Ajio.com", "Nykaa", "AppDynamics", "Wells Fargo",
    "Xilinx", "MotorQ", "Rubric", "Codenation", "Sprinklr", "Nutanix", "Cohesity",
    "ShareChat", "Cure.fit", "Healthifyme", "SumoLogic", "Delhivery", "Qubole", "Trell",
    "Autodesk", "Target", "Informatica", "Mastercard", "American Express",
    "NK Securities Research", "Zeta", "Postman", "Cloudera", "Inmobi", "BNY Mellon",
    "Bank of America", "NetApp", "Rupeek", "Intel", "Juniper Network", "Vmware",
    "Duestche Bank", "Servicenow", "Ibibo Group", "Make my trip", "Fanclash", "Infoblox",
    "Plivo", "Texas Instruments", "Directi", "Media.net", "Citicorp", "Riverbed Technologies",
    "GE Healthcare", "Hp", "Dell", "Udaan", "Hotstar", "Phonepe", "Paytm", "Juspay",
    "Razorpay", "Cashfree", "Gojek", "KLA", "Simpl"
];

export const internships = [
    {
        company: "Internkaksha IT Solutions",
        position: "Frontend Developer Intern",
        link: "Link",
        location: "Remote",
        eligibility: "Freshers can apply",
        skills: "HTML, CSS, JavaScript, React.js"
    },
    {
        company: "TwiLearn",
        position: "Full Stack Developer Intern",
        link: "Link",
        location: "Remote",
        eligibility: "Freshers can apply",
        skills: "MERN Stack"
    },
    {
        company: "Internkaksha IT Solutions",
        position: "Web Development Intern",
        link: "Link",
        location: "Remote",
        eligibility: "Freshers can apply",
        skills: "HTML, CSS, JavaScript, React.js"
    },
    {
        company: "Unified Mentor",
        position: "Frontend Developer Intern",
        link: "Link",
        location: "Remote",
        eligibility: "Freshers can apply",
        skills: "HTML, CSS, JavaScript, React.js"
    },
    {
        company: "ADP",
        position: "Intern",
        link: "Link",
        location: "Chennai, IN",
        eligibility: "Freshers can apply",
        skills: "Strong understanding of fundamentals of CS"
    },
    {
        company: "Abhyaz",
        position: "Software Engineer Intern",
        link: "Link",
        location: "Chennai, IN",
        eligibility: "Freshers can apply",
        skills: "Strong understanding of fundamentals of CS"
    },
    {
        company: "Coddle Technologies Pvt. Ltd.",
        position: "Software Engineer Trainee",
        link: "Link",
        location: "Bengaluru, Karnataka, IN",
        eligibility: "Freshers can apply",
        skills: "Strong understanding of fundamentals of CS"
    },
    {
        company: "Isourse",
        position: "Backend Developer Intern",
        link: "Link",
        location: "Delhi, IN",
        eligibility: "Freshers can apply",
        skills: "HTML, CSS, JavaScript, Node.js, SQL"
    },
    {
        company: "Unified Mentor",
        position: "Web Development Intern",
        link: "Link",
        location: "Remote",
        eligibility: "Freshers can apply",
        skills: "MERN Stack"
    },
    {
        company: "Bolt.Earth",
        position: "Software Engineer Intern",
        link: "Link",
        location: "Bengaluru, Karnataka, IN",
        eligibility: "Freshers can apply",
        skills: "Strong understanding of fundamentals of CS and one of the coding languages"
    },
    {
        company: "InnovatexIQ Solutions",
        position: "SQL Developer",
        link: "Link",
        location: "Hyderabad, Telangana, India",
        eligibility: "Freshers can apply",
        skills: "Strong understanding of fundamentals of CS and Databases"
    },
    {
        company: "Unified Mentor",
        position: "Full Stack Web Developer",
        link: "Link",
        location: "Remote",
        eligibility: "Freshers can apply",
        skills: "MERN Stack"
    },
    {
        company: "Applied Materials",
        position: "Software Engineer Intern",
        link: "Link",
        location: "Bengaluru, Karnataka, IN",
        eligibility: "Freshers can apply",
        skills: "Strong understanding of fundamentals of CS and one of the coding languages"
    },
    {
        company: "Bluelupin Technologies",
        position: "Software Engineer Intern",
        link: "Link",
        location: "Noida, Uttar Pradesh, India",
        eligibility: "Freshers can apply",
        skills: "HTML, CSS, JavaScript"
    },
    {
        company: "Refonte Learning",
        position: "Full Stack Development training and Internship",
        link: "Link",
        location: "Remote",
        eligibility: "Freshers can apply",
        skills: "HTML, CSS, JavaScript, Node.js"
    },
    {
        company: "Tower Research Capital",
        position: "Intern",
        link: "Link",
        location: "Gurugram, Haryana, India",
        eligibility: "Freshers can apply",
        skills: "Strong understanding of fundamentals of CS and one of the coding languages"
    },
    {
        company: "Zuddl",
        position: "Engineer Intern - Fullstack",
        link: "Link",
        location: "Remote",
        eligibility: "Freshers can apply",
        skills: "Strong understanding of fundamentals"
    }
]
