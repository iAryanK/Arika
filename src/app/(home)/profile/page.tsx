import { Highlight } from "@/components/shared/Highlight";
import NoResult from "@/components/shared/NoResult";

const Page = () => {
  return (
    <NoResult
      title="You're not logged in."
      description={
        <p>
          {" "}
          Login to view and share <br />
          <Highlight>Your Arika legacy profile 🚀</Highlight> <br /> We maintain
          your profile across various platforms at a single place, so that you
          can showcase your consistency better. 💡
        </p>
      }
      link="/login"
      linkTitle="Log In"
    />
  );
};

export default Page;
