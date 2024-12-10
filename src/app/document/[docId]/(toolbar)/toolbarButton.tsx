import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  icon: Icon,
  isActive,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-300"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

export default ToolbarButton;
