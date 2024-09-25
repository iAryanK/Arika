import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserDetails } from "../profile/UserDetails";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  data: any;
};

const UserDialog = ({ children, data }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="custom-scrollbar h-fit max-h-96 overflow-scroll border-none">
        <UserDetails
          data={data}
          className="bg-background dark:bg-zinc-900"
          community
        />
        <div className="flex w-full gap-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full">
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild className="w-full">
            <Button asChild>
              <Link href={`/profile/${data.username}`}>Profile</Link>
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserDialog;
