import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Avatars from "@/app/document/[docId]/avatar";

const ClerkAuthUI = () => {
  return (
    <div className="flex gap-3 items-center pl-6">
      <Avatars />

      <OrganizationSwitcher
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
        afterLeaveOrganizationUrl="/"
        afterSelectPersonalUrl="/"
      />

      <UserButton />
    </div>
  );
};

export default ClerkAuthUI;
