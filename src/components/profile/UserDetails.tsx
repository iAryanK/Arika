import { getSession } from "@/lib/getSession";
import Image from "next/image";
import { EditProfileModal } from "./EditProfileModal";
import { redirect } from "next/navigation";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import CopyUserButton from "../shared/CopyUser";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export const UserDetails = async (data: any) => {
  const session = await getSession();
  const user = session?.user;
  const mongoUser = data?.data;

  let isStudent = mongoUser?.yearOfCompletion > new Date().getFullYear();

  if (mongoUser)
    return (
      <div className="relative mx-auto mt-2 flex h-fit w-full flex-col space-y-2 rounded-md border p-5 md:m-5 md:w-1/2">
        <Banner />
        <div className="flex items-center justify-between">
          <Image
            src={mongoUser?.image ? data.data.image : "/avatar.gif"}
            alt="profile"
            width={100}
            height={100}
            className="h-20 w-20 rounded-full object-cover"
          />
          {user?.email === mongoUser?.email && (
            <div>
              <EditProfileModal
                user={JSON.stringify(data.data)}
                mongoUser={JSON.stringify(mongoUser._id)}
              />
            </div>
          )}
        </div>

        <div className="flex gap-4 pt-5">
          <CopyUserButton username={mongoUser?.username}>
            @{mongoUser?.username} <Copy size={20} className="pl-2" />
          </CopyUserButton>

          {mongoUser?.yearOfCompletion && (
            <Badge variant={"secondary"} className="text-sm">
              {isStudent ? "Student" : "Aluminus"}
            </Badge>
          )}
        </div>

        <h1 className="text-2xl font-bold">{mongoUser?.firstName}</h1>

        {mongoUser?.bio && <p>{mongoUser.bio}</p>}

        <div className="pt-3">
          {mongoUser?.institute && (
            <p className="mt-1 font-medium">{data.data.institute} </p>
          )}
          {mongoUser?.location && (
            <p className="text-muted-foreground">{data.data.location}</p>
          )}
        </div>

        {mongoUser?.degree && <p>{mongoUser?.degree}</p>}

        <div className="space-y-2 py-3">
          {mongoUser?.contact && (
            <ParamValue
              parameter="Contact"
              value={mongoUser.contact}
              icon={<FiMessageCircle />}
            />
          )}
          {mongoUser?.github && (
            <ParamValue
              parameter="Github"
              value={mongoUser.github}
              icon={<IoLogoGithub />}
            />
          )}
          {mongoUser?.linkedin && (
            <ParamValue
              parameter="LinkedIn"
              value={mongoUser.linkedin}
              icon={<IoLogoLinkedin />}
            />
          )}
          {mongoUser?.twitter && (
            <ParamValue
              parameter="Twitter"
              value={mongoUser.twitter}
              icon={<FaXTwitter />}
            />
          )}
        </div>

        <div className="flex w-full flex-col gap-2 lg:flex-row">
          {mongoUser?.resume && (
            <Button asChild className="w-full" variant={"secondary"}>
              <Link href={data.data.portfolio} target="_blank">
                View Resume
              </Link>
            </Button>
          )}
          {mongoUser?.portfolio && (
            <Button asChild className="w-full">
              <Link href={data.data.portfolio} target="_blank">
                Visit portfolio
              </Link>
            </Button>
          )}
        </div>
      </div>
    );
  else redirect("/profile");
};

const Banner = () => {
  return (
    <div className="absolute -top-[0.5px] right-3 flex select-none items-center gap-1 rounded-b-md bg-zinc-400/[0.5] p-1 backdrop-blur-sm dark:bg-zinc-600/[0.5]">
      <Image
        src="/logo.png"
        alt="banner"
        width={100}
        height={100}
        className="h-4 w-4"
      />
      <p className="text-xs font-light">Legacy Profile</p>
    </div>
  );
};

const ParamValue = ({
  parameter,
  value,
  icon,
}: {
  parameter: string;
  value: string;
  icon?: any;
}) => {
  const darkColors = [
    "bg-slate-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-orange-200",
  ];
  const lightColors = [
    "bg-slate-800",
    "bg-blue-800",
    "bg-yellow-800",
    "bg-orange-800",
  ];

  return (
    <div className="flex items-center">
      <p
        className={`flex w-24 items-center gap-1 rounded-l-md bg-violet-800 p-[2px] pl-2 text-sm font-light text-white ${
          lightColors[Math.floor(Math.random() * lightColors.length)]
        } dark:${darkColors[Math.floor(Math.random() * darkColors.length)]}`}
      >
        {icon}
        {parameter}
      </p>
      <p className="rounded-r-md border-y border-r p-[2px] px-2 text-sm">
        {value}
      </p>
    </div>
  );
};
