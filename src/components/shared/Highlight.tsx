import { cn } from "@/lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <strong
      className={cn(
        "rounded-sm bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-violet-500",
        className,
      )}
    >
      {children}
    </strong>
  );
};
