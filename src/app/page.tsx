import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button>
        <Link href={'/document/1'}>Click Me </Link>
      </Button>
    </div>
  );
};

export default Home;
