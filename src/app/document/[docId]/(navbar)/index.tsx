import RootLink from "@/components/rootLink";
import DocumentInput from "./documentInput";
import MenuBar from "./menuBar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <RootLink />

        <div className="flex flex-col">
          <DocumentInput />
          <MenuBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
