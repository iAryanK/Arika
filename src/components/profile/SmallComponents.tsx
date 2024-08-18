import Image from "next/image";

export const Banner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute -top-[0.5px] right-3 flex select-none items-center gap-1 rounded-b-md border border-[rgba(255,255,255,0.05)] bg-[rgba(203,183,183,0.54)] p-1 text-black shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] dark:bg-[rgba(40,40,40,0.70)] dark:text-white">
      {children}
    </div>
  );
};

export const ParamValue = ({
  parameter,
  value,
  icon,
}: {
  parameter: string;
  value: string;
  icon?: any;
}) => {
  const darkColors = [
    "bg-slate-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-orange-200",
  ];
  const lightColors = [
    "bg-slate-800",
    "bg-blue-800",
    "bg-yellow-800",
    "bg-orange-800",
  ];

  return (
    <div className="flex items-center">
      <p
        className={`flex w-24 items-center gap-1 rounded-l-md bg-violet-800 p-[2px] pl-2 text-sm font-light text-white ${
          lightColors[Math.floor(Math.random() * lightColors.length)]
        } dark:${darkColors[Math.floor(Math.random() * darkColors.length)]}`}
      >
        {icon}
        {parameter}
      </p>
      <p className="rounded-r-md border-y border-r p-[2px] px-2 text-sm">
        {value}
      </p>
    </div>
  );
};
