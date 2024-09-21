import NoResult from "../shared/NoResult";
import { Highlight } from "../shared/Highlight";
import { getSession } from "@/lib/getSession";
import { UserDetails } from "../profile/UserDetails";
import { getUserData } from "@/lib/actions/user.action";
import { LogIn } from "lucide-react";

const ProfileTab = async () => {
  const session = await getSession();
  let userdata;
  if (session) {
    const sessionuser = session?.user;
    const res = await getUserData({ email: sessionuser?.email as string });
    userdata = JSON.parse(res);
  }

  return (
    <div className="relative mx-auto h-[454px] max-w-sm rounded-[2.5rem] border-[14px] border-gray-300 bg-gray-300 dark:border-gray-800 dark:bg-gray-800 md:h-[682px] md:max-w-[512px]">
      <div className="absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-400 dark:bg-gray-800"></div>
      <div className="absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-400 dark:bg-gray-800"></div>
      <div className="absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-400 dark:bg-gray-800"></div>
      <div className="absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-400 dark:bg-gray-800"></div>
      <div className="custom-scrollbar h-[426px] overflow-hidden overflow-y-scroll rounded-[2rem] bg-white dark:bg-gray-800 md:h-[654px]">
        {session ? (
          <UserDetails
            data={userdata}
            className="border-t-0 bg-background dark:bg-zinc-900"
            community
          />
        ) : (
          <NoResult
            title="You're not logged in."
            description={
              <p>
                {" "}
                Login to view and share <br />
                <Highlight>Your Arika legacy profile 🚀</Highlight>
              </p>
            }
            link="/login"
            linkTitle="Log In"
            linkIcon={<LogIn size={18} />}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileTab;
