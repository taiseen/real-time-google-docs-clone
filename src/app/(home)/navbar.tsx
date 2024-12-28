import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import RootLink from "@/components/rootLink";
import SearchInput from "./searchInput";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
        <RootLink />

        <h3 className="text-xl">Docs</h3>
      </div>

      <SearchInput />

      <div className="flex gap-3 items-center pl-6">
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
