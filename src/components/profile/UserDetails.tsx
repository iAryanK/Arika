import { getSession } from "@/lib/getSession";
import Image from "next/image";
import { EditProfileModal } from "./EditProfileModal";
import { redirect } from "next/navigation";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";

export const UserDetails = async (data: any) => {
  const session = await getSession();
  const user = session?.user;

  let isStudent = true;

  if (data.data)
    return (
      <div className="mx-auto mt-2 flex h-fit w-full flex-col space-y-5 rounded-md border p-5 md:m-5 md:w-1/2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <Image
              src={data?.data?.image ? data.data.image : "/avatar.gif"}
              alt="profile"
              width={100}
              height={100}
              className="h-20 w-20 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{data?.data?.firstName}</h1>
                {isStudent ? (
                  <Badge className="">Student</Badge>
                ) : (
                  <Badge>Aluminus</Badge>
                )}
              </div>
              <p className="text-sm text-gray-500">@{data?.data?.username}</p>
            </div>
          </div>

          {user?.email === data?.data?.email && (
            <div className="max-md:hidden">
              <EditProfileModal user={JSON.stringify(data.data)} />
            </div>
          )}
        </div>

        {user?.email === data?.data?.email && (
          <div className="w-full md:hidden">
            <EditProfileModal user={JSON.stringify(data.data)} />
          </div>
        )}

        {data?.data?.bio && (
          <div>
            <h2 className="text-lg font-bold">Bio</h2>
            <p>{data.data.bio}</p>
          </div>
        )}

        {data?.data?.institute && (
          <p className="font-medium">{data.data.institute}</p>
        )}
        {data?.data?.location && <p>{data.data.location}</p>}

        {data?.data?.contact && (
          <div>
            <h2 className="text-lg font-bold">Contact</h2>
            <p>{data?.data?.contact}</p>
          </div>
        )}

        {data?.data?.degree && <p>{data?.data?.degree}</p>}

        {data?.data?.portfolio && (
          <Button asChild>
            <Link href={data.data.portfolio} target="_blank">
              Visit portfolio
            </Link>
          </Button>
        )}
      </div>
    );
  else redirect("/profile");
};
