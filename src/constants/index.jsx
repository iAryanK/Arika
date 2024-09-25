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
        imgURL: <CodeXml />,
        route: "/code",
        label: "Code",
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