import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Avatars from "@/app/document/[docId]/avatar";
import Inbox from "@/app/document/[docId]/(inbox)";

const ClerkAuthUI = () => {
  return (
    <div className="flex gap-3 items-center pl-6">
      <Avatars />

      <Inbox />

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
