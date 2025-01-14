"use client";

import useEditorStore from "@/store/use-editor-store";
import HighlightColorButton from "./highlightColorButton";
import HeadingLevelButton from "./headingLevelButton";
import ImageUploadButton from "./imageUploadButton";
import FontFamilyButton from "./fontFamilyButton";
import LineHeightButton from "./lineHeightButton";
import TextColorButton from "./textColorButton";
import FontSizeButton from "./fontSizeButton";
import ToolbarButton from "./toolbarButton";
import AlignButton from "./alignButton";
import ListButton from "./listButton";
import LinkButton from "./linkButton";
import { Separator } from "@/components/ui/separator";
import {
  MessageSquarePlusIcon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  ListTodoIcon,
  PrinterIcon,
  ItalicIcon,
  LucideIcon,
  Undo2Icon,
  Redo2Icon,
  BoldIcon,
} from "lucide-react";

const Toolbar = () => {
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => editor?.chain().focus().addPendingComment().run(),
        isActive: editor?.isActive("liveblocksCommentMark"),
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
        isActive: editor?.isActive("taskList"),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />

      <FontFamilyButton />

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />

      <HeadingLevelButton />

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />

      <FontSizeButton />

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />

      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}

      <TextColorButton />

      <HighlightColorButton />

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />

      <LinkButton />

      <ImageUploadButton />

      <AlignButton />

      <LineHeightButton />

      <ListButton />

      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Toolbar;
