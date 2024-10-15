import { RegisterForm } from "@/components/forms/RegisterForm";
import {
  GithubAuthButton,
  GoogleAuthButton,
} from "@/components/shared/OAuthButtons";
import { getSession } from "@/lib/getSession";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");

  return (
    <div className="max-h-[80vh] w-full overflow-y-scroll rounded-xl border shadow-lg dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
      <div className="mx-auto max-w-md rounded-none p-4 md:p-8">
        <h2 className="text-xl font-bold max-md:text-center">
          Welcome to Arika
        </h2>
        <p className="mt-2 text-sm text-neutral-300 max-md:text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>

        <div className="mt-5 space-y-4">
          <GithubAuthButton />
          <GoogleAuthButton />
        </div>

        <div className="my-5 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <RegisterForm />
      </div>
    </div>
  );
};

export default Page;
