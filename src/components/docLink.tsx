import Link from "next/link";

const DocLink = () => {
  return (
    <div>
      Click
      <Link href="/document/123">
        &nbsp;
        <span className="[text-blue-500 underline">here</span>
        &nbsp;
      </Link>
      to go to document id
    </div>
  );
};

export default DocLink;
