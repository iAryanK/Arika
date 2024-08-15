import { Brain, BriefcaseBusiness, Home, Smile, SquarePlus, Users } from "lucide-react";


export const SidebarLinks = [
    {
        imgURL: <Home />,
        route: "/",
        label: "Home",
    },
    {
        imgURL: <Users />,
        route: "/communities",
        label: "Communities",
    },
    {
        imgURL: <SquarePlus />,
        route: "/create",
        label: "Create",
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