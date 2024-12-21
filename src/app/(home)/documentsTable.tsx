import DocumentRow from "./documentRow";
import { Doc } from "../../../convex/_generated/dataModel";
import { PaginationStatus } from "convex/react";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import {
  TableHeader,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from "@/components/ui/table";

interface DocumentsTableProps {
  documents: Doc<"documents">[] | undefined;
  loadMore: (numItems: number) => void;
  status: PaginationStatus;
}

const DocumentsTable = ({
  documents,
  loadMore,
  status,
}: DocumentsTableProps) => {
  return (
    <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-5">
      {documents === undefined ? (
        <div className="flex justify-center items-center h-24">
          <LoaderIcon className="animate-spin text-muted-foreground size-5" />
        </div>
      ) : (
        <Table className="w-full">
          <TableHeader>
            <TableRow className="hover:bg-transparent border-none">
              <TableHead>Name</TableHead>
              <TableHead>&nbsp;</TableHead>
              <TableHead className="hidden md:table-cell">Shared</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
            </TableRow>
          </TableHeader>

          {documents.length === 0 ? (
            <TableBody>
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={4}
                  className="h-24 text-center text-muted-foreground text-xl"
                >
                  No document found... 🧐
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {documents.map((doc) => (
                <DocumentRow key={doc._id} document={doc} />
              ))}
            </TableBody>
          )}
        </Table>
      )}

      <div className="flex justify-center items-center">
        <Button
          size="sm"
          variant="outline"
          onClick={() => loadMore(10)}
          disabled={status !== "CanLoadMore"}
        >
          {status === "CanLoadMore" ? "Load more" : "End of results"}
        </Button>
      </div>
    </div>
  );
};

export default DocumentsTable;
