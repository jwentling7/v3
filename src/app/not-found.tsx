import Divider from "@/components/Divider";
import Link from "@/components/Link";

const NotFound = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex gap-8">
        <h1 className="text-xl my-auto w-auto">404</h1>
        <Divider vertical />
        <div>
          <h2>This page could not be found.</h2>
          <Link href="/">Return to the main page.</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
