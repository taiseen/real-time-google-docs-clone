import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import RootLink from "@/components/rootLink";
import DocumentInput from "./documentInput";
import MenuBar from "./menuBar";
import Avatars from "../avatars";
// import Inbox from "../(inbox)";

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

      <div className="flex gap-3 items-center pl-6">
        <Avatars />

        {/* <Inbox /> */}

        <OrganizationSwitcher
          afterCreateOrganizationUrl="/"
          afterSelectOrganizationUrl="/"
          afterLeaveOrganizationUrl="/"
          afterSelectPersonalUrl="/"
        />

        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
