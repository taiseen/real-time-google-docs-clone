import RenameDialog from "@/components/renameDialog";
import RemoveDialog from "@/components/removeDialog";
import { Id } from "../../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import {
  ExternalLinkIcon,
  MoreVertical,
  FilePenIcon,
  TrashIcon,
} from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

interface DocumentMenuProps {
  documentId: Id<"documents">;
  title: string;
  onNewTab: (id: Id<"documents">) => void;
}

const DocumentMenu = ({ documentId, title, onNewTab }: DocumentMenuProps) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreVertical className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <RenameDialog documentId={documentId} initialTitle={title}>
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              onClick={(e) => e.stopPropagation()}
            >
              <FilePenIcon className="size-4 mr-2" />
              Rename
            </DropdownMenuItem>
          </RenameDialog>

          <RemoveDialog documentId={documentId}>
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              onClick={(e) => e.stopPropagation()}
            >
              <TrashIcon className="size-4 mr-2" />
              Remove
            </DropdownMenuItem>
          </RemoveDialog>

          <DropdownMenuItem onClick={() => onNewTab(documentId)}>
            <ExternalLinkIcon className="mr-2 size-4" />
            Open in new tab
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DocumentMenu;
