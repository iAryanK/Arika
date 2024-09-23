import Link from "next/link";

export const Banner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute -top-[0.5px] right-3 flex select-none items-center gap-1 rounded-b-md border border-[rgba(255,255,255,0.05)] bg-[rgba(203,183,183,0.54)] p-1 text-black shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] dark:bg-[rgba(40,40,40,0.70)] dark:text-white">
      {children}
    </div>
  );
};

export const ParamValue = ({
  href,
  parameter,
  value,
  icon,
  className,
}: {
  href?: string;
  parameter: string;
  value: string;
  icon?: any;
  className?: string;
}) => {
  const Item = () => (
    <div className="flex w-fit items-center">
      <p
        className={`flex items-center justify-between gap-1 rounded-l-md p-[5px] pl-2 pr-2 text-xs font-light text-white ${className}`}
      >
        {icon}
        {parameter}
      </p>
      <p className="rounded-r-md border-y border-r p-[2px] px-2 text-sm">
        {value}
      </p>
    </div>
  );

  if (href)
    return (
      <div className="w-fit">
        <Link href={href} target="_blank">
          <Item />
        </Link>
      </div>
    );
  return <Item />;
};
