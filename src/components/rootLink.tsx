import Image from "next/image";
import Link from "next/link";

const RootLink = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={36}
        height={36}
        style={{ width: "auto", height: "auto" }}
      />
    </Link>
  );
};

export default RootLink;
