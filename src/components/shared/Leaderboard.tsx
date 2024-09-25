import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ClipboardList } from "lucide-react";

const Leaderboard = () => {
  return (
    <div>
      <Table>
        <TableCaption>Practise Daily to shine at top 🌟</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Name</TableHead>

            <TableHead className="text-right">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">01</TableCell>
            <TableCell>Arika</TableCell>
            <TableCell className="text-right">100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">01</TableCell>
            <TableCell>Arika</TableCell>
            <TableCell className="text-right">100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">01</TableCell>
            <TableCell>Arika</TableCell>
            <TableCell className="text-right">100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">01</TableCell>
            <TableCell>Arika</TableCell>
            <TableCell className="text-right">100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">01</TableCell>
            <TableCell>Arika</TableCell>
            <TableCell className="text-right">100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">01</TableCell>
            <TableCell>Arika</TableCell>
            <TableCell className="text-right">100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">01</TableCell>
            <TableCell>Arika</TableCell>
            <TableCell className="text-right">100</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const LeaderboardDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="absolute bottom-12 right-4 rounded-full bg-amber-400 p-4 sm:hidden">
          <ClipboardList size={28} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="relative flex h-full w-full flex-col items-center">
          <div className="absolute -top-5 z-10 h-10 w-1/2 rounded-lg border-2 border-zinc-100 bg-background p-2 px-5 text-center text-sm uppercase tracking-widest dark:border-zinc-900">
            Leaderboard
          </div>
          <div className="custom-scrollbar h-full w-full overflow-y-scroll rounded-lg bg-zinc-100 px-5 pb-5 pt-10 dark:bg-zinc-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] max-sm:px-10">
            <Leaderboard />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { Leaderboard, LeaderboardDialog };
