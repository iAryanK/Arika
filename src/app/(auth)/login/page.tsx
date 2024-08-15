import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";
import { LoginForm } from "@/components/forms/LoginForm";
import Link from "next/link";
import {
  GithubAuthButton,
  GoogleAuthButton,
} from "@/components/shared/OAuthButtons";

const Page = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");

  return (
    <div className="w-full backdrop-blur-sm">
      <div className="mx-auto max-w-md rounded-none p-4 md:p-8">
        <h2 className="text-xl font-bold text-white max-md:text-center">
          Welcome back to Arika
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 max-md:text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>

        <LoginForm />

        <div className="mt-5 space-y-4">
          <GithubAuthButton />
          <GoogleAuthButton />
        </div>
      </div>
    </div>
  );
};

export default Page;
