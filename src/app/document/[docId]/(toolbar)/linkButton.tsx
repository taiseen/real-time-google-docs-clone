import useEditorStore from "@/store/use-editor-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link2Icon } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

const LinkButton = () => {
  const { editor } = useEditorStore();

  const link = editor?.getAttributes("link").href;
  const [value, setValue] = useState(link || "");

  const onChange = (href: string) => {
    editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
    setValue("");
  };

  return (
    <DropdownMenu
      onOpenChange={(isOpen) => {
        if (isOpen) setValue(link || "");
      }}
    >
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <Link2Icon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-2.5 flex items-center gap-x-2">
        <Input
          value={value}
          placeholder="https://example.com"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => onChange(value)}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinkButton;
