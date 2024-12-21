import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const ClerkAuthUI = () => {
  return (
    <div className="flex gap-3 items-center pl-6">
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
