import { signIn } from "@/auth";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

const GoogleAuthButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        type="submit"
      >
        <FcGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-sm text-neutral-700 dark:text-neutral-300">
          Google
        </span>
        <BottomGradient />
      </button>
    </form>
  );
};

const GithubAuthButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button
        className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        type="submit"
      >
        <IoLogoGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-sm text-neutral-700 dark:text-neutral-300">
          GitHub
        </span>
        <BottomGradient />
      </button>
    </form>
  );
};

export { GoogleAuthButton, GithubAuthButton };

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
