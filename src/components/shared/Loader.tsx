import Image from "next/image";

const Loader = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-background">
      <div className="absolute z-0 h-16 w-16 animate-ping rounded-full bg-gray-300 dark:bg-gray-800"></div>
      <div className="absolute z-10 inline-block h-20 w-20 rounded-full bg-gray-200 dark:bg-gray-800">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Hero"
          className="absolute left-4 top-4 z-10 mx-auto h-12 w-12 object-cover"
        />
      </div>
    </div>
  );
};

export default Loader;
