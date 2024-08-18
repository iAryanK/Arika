import { Brain, BriefcaseBusiness, CodeXml, Home, Smile, Users } from "lucide-react";


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