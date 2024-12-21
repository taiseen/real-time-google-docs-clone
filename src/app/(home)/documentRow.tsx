import { Building2Icon, CircleUserIcon } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Doc } from "../../../convex/_generated/dataModel";
import { SiGoogledocs } from "react-icons/si";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import DocumentMenu from "./documentMenu";

interface DocumentRowProps {
  document: Doc<"documents">;
}

const DocumentRow = ({ document }: DocumentRowProps) => {
  const router = useRouter();

  const isOrgId = document.organizationId;

  // open document in a new tab...
  const onNewTabClick = (id: string) =>
    window.open(`/document/${id}`, "_blank");

  const onRowClick = (id: string) => router.push(`/document/${id}`);

  return (
    <TableRow
      className="cursor-pointer"
      onClick={() => onRowClick(document._id)}
    >
      <TableCell className="w-[50px]">
        <SiGoogledocs className="size-6 fill-blue-500" />
      </TableCell>

      <TableCell className="font-medium md:w-[45%]">{document.title}</TableCell>

      <TableCell className="text-muted-foreground hidden md:flex items-center gap-2">
        {isOrgId ? (
          <Building2Icon className="size-4" />
        ) : (
          <CircleUserIcon className="size-4" />
        )}

        {isOrgId ? "Organization" : "Personal"}
      </TableCell>

      <TableCell className="text-muted-foreground hidden md:table-cell">
        {format(new Date(document._creationTime), "MMM dd, yyyy")}
      </TableCell>

      <TableCell className="flex justify-end ml-auto">
        <DocumentMenu
          documentId={document._id}
          title={document.title}
          onNewTab={onNewTabClick}
        />
      </TableCell>
    </TableRow>
  );
};

export default DocumentRow;
