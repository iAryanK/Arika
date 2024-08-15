import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

const LoadingButton = ({
  loading,
  disabled,
  className,
  ...props
}: LoadingButtonProps) => {
  return (
    <Button
      {...props}
      disabled={loading || disabled}
      className={cn("flex items-center gap-2", className)}
    >
      {loading && <Loader className="size-5 animate-spin" />}
      {props.children}
    </Button>
  );
};

export { LoadingButton };