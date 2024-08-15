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
    <div className="mx-auto w-full max-w-md rounded-none p-4 md:p-8">
      <h2 className="text-center text-xl font-bold">Welcome to Arika</h2>
      <p className="mt-2 max-w-sm text-center text-sm text-neutral-600 dark:text-neutral-300">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </p>

      <RegisterForm />

      <div className="mt-5 space-y-4">
        <GithubAuthButton />
        <GoogleAuthButton />
      </div>
    </div>
  );
};
export default Page;
