import Navbar from "./navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 p-4 bg-white">
        <Navbar />
      </div>

      <div className="mt-16">
        Click{" "}
        <Link href="/document/123">
          <span className="[text-blue-500 underline">&nbsp; here&nbsp; </span>
        </Link>{" "}
        to go to document id
      </div>
    </div>
  );
};

export default Home;
