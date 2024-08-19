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
      className={cn("rounded-sm bg-secondary px-1 py-0.5 font-bold", className)}
    >
      {children}
    </strong>
  );
};
