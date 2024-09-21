// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { getAllJobs } from "@/lib/actions/job.action";
// import { MapPin } from "lucide-react";

type Props = {};

const Page = async (props: Props) => {
  // const res = await getAllJobs();

  return (
    <div className="flex h-full w-full items-center justify-between">
      <p className="w-full text-center">Jobs | Coming soon...</p>
    </div>
  );

  // return (
  //   <div className="custom-scrollbar scroll-m-20 space-y-2 overflow-scroll px-5 pb-20 pt-5 max-md:pt-20 md:w-1/2">
  //     {res?.map((job: any, index: number) => (
  //       <Card
  //         key={index}
  //         className="border-none px-4 py-2 shadow-sm hover:shadow-input dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]"
  //       >
  //         <div className="flex items-center justify-between gap-2">
  //           <p className="font-space_grotesk">{job.companyName}</p>
  //           <Badge>{job.jobType}</Badge>
  //         </div>
  //         <p className="py-1 text-sm text-muted-foreground">{job.experience}</p>

  //         <div className="flex items-center gap-2 text-sm">
  //           <MapPin size={18} />
  //           <p className="text-sm font-light">{job.location}</p>
  //           <Separator orientation="vertical" className="h-5" />
  //           <p className="text-sm font-light">{job.category}</p>
  //         </div>
  //       </Card>
  //     ))}
  //   </div>
  // );
};

export default Page;
