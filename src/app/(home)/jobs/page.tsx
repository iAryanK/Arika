// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { getAllJobs } from "@/lib/actions/job.action";
// import { MapPin } from "lucide-react";

import { internships } from "@/constants";

type Props = {};

const Page = async (props: Props) => {
  // const res = await getAllJobs();

  // return (
  //   <div className="flex h-full w-full items-center justify-between">
  //     <p className="w-full text-center">Jobs | Coming soon...</p>
  //   </div>
  // );

  return (
    <div className="custom-scrollbar scroll-m-20 space-y-2 overflow-scroll px-5 pb-20 pt-5 max-md:pt-20 md:w-1/2">
      {internships.map((item, index) => (
        <div
          className="my-2 rounded-lg bg-zinc-300 p-2 dark:bg-zinc-800"
          key={index}
        >
          <div className="flex items-center justify-between">
            <p>{item.company}</p>
            <p>{item.position}</p>
          </div>
          <p className="opacity-80">{item.location}</p>
          <p className="opacity-50">{item.eligibility}</p>
          <p>{item.skills}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
