"use client";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialog,
} from "@/components/ui/alert-dialog";

interface RemoveDialogProps {
  documentId: Id<"documents">;
  children: React.ReactNode;
}

const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
  const remove = useMutation(api.documents.removeById);

  const [isRemoving, setIsRemoving] = useState(false);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRemoving(true);

    remove({ id: documentId })
      .then(() => toast.success("Document removed successfully."))
      .catch(() => toast.error("Failed to remove document"))
      .finally(() => setIsRemoving(false));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure ?</AlertDialogTitle>

          <AlertDialogDescription className="text-slate-800">
            This action cannot be undone. This will permanently delete your
            document.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            className="bg-red-400 hover:bg-red-500 duration-300"
            onClick={handleDelete}
            disabled={isRemoving}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveDialog;
