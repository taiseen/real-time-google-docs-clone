"use client";

import useEditorStore from "@/store/use-editor-store";
import { BsFilePdf } from "react-icons/bs";
import {
  RemoveFormattingIcon,
  StrikethroughIcon,
  UnderlineIcon,
  FileJsonIcon,
  FilePlusIcon,
  FileTextIcon,
  FilePenIcon,
  PrinterIcon,
  ItalicIcon,
  TrashIcon,
  GlobeIcon,
  FileIcon,
  Undo2Icon,
  Redo2Icon,
  TextIcon,
  BoldIcon,
} from "lucide-react";
import {
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarSeparator,
  MenubarShortcut,
  MenubarContent,
  MenubarTrigger,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  Menubar,
} from "@/components/ui/menubar";

const MenuBar = () => {
  const { editor } = useEditorStore();

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };

  const onDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  const onSaveJSON = () => {
    if (!editor) return;

    const content = editor.getJSON();
    const blob = new Blob([JSON.stringify(content)], {
      type: "application/json",
    });

    onDownload(blob, `document.json`); // TODO: Use document name
  };

  const onSaveHTML = () => {
    if (!editor) return;

    const content = editor.getHTML();
    const blob = new Blob([content], { type: "text/html" });

    onDownload(blob, `document.html`); // TODO: Use document name
  };

  const onSaveText = () => {
    if (!editor) return;

    const content = editor.getText();
    const blob = new Blob([content], { type: "text/plain" });

    onDownload(blob, `document.txt`); // TODO: Use document name
  };

  return (
    <div className="flex">
      <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
        <MenubarMenu>
          <MenubarTrigger className="menubarTrigger">File</MenubarTrigger>

          <MenubarContent className="print:hidden">
            <MenubarSub>
              <MenubarSubTrigger>
                <FileIcon className="size-4 mr-2" />
                Save
              </MenubarSubTrigger>

              <MenubarSubContent>
                <MenubarItem onClick={onSaveJSON}>
                  <FileJsonIcon className="size-4 mr-2" /> JSON
                </MenubarItem>

                <MenubarItem onClick={onSaveHTML}>
                  <GlobeIcon className="size-4 mr-2" /> HTML
                </MenubarItem>

                <MenubarItem onClick={() => window.print()}>
                  <BsFilePdf className="size-4 mr-2" /> PDF
                </MenubarItem>

                <MenubarItem onClick={onSaveText}>
                  <FileTextIcon className="size-4 mr-2" /> Text
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarItem>
              <FilePlusIcon className="size-4 mr-2" /> New Document
            </MenubarItem>

            <MenubarSeparator />

            <MenubarItem>
              <FilePenIcon className="size-4 mr-2" /> Rename
            </MenubarItem>

            <MenubarItem>
              <TrashIcon className="size-4 mr-2" /> Remove
            </MenubarItem>

            <MenubarSeparator />

            <MenubarItem onClick={() => window.print()}>
              <PrinterIcon className="size-4 mr-2" /> Print
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="menubarTrigger">Edit</MenubarTrigger>

          <MenubarContent>
            <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
              <Undo2Icon className="size-4 mr-2" /> Undo
              <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>

            <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
              <Redo2Icon className="size-4 mr-2" /> Redo
              <MenubarShortcut>⌘Y</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="menubarTrigger">Insert</MenubarTrigger>

          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Table</MenubarSubTrigger>

              <MenubarSubContent>
                <MenubarItem onClick={() => insertTable({ rows: 1, cols: 1 })}>
                  1 x 1
                </MenubarItem>
                <MenubarItem onClick={() => insertTable({ rows: 2, cols: 2 })}>
                  2 x 2
                </MenubarItem>
                <MenubarItem onClick={() => insertTable({ rows: 3, cols: 3 })}>
                  3 x 3
                </MenubarItem>
                <MenubarItem onClick={() => insertTable({ rows: 4, cols: 4 })}>
                  4 x 4
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="menubarTrigger">Formate</MenubarTrigger>

          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                <TextIcon className="size-4 mr-2" /> Text
              </MenubarSubTrigger>

              <MenubarSubContent>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                >
                  <BoldIcon className="size-4 mr-2" /> Bold
                  <MenubarShortcut>⌘B</MenubarShortcut>
                </MenubarItem>

                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                >
                  <ItalicIcon className="size-4 mr-2" /> Italic
                  <MenubarShortcut>⌘I</MenubarShortcut>
                </MenubarItem>

                <MenubarItem
                  onClick={() =>
                    editor?.chain().focus().toggleUnderline().run()
                  }
                >
                  <UnderlineIcon className="size-4 mr-2" /> Underline
                  <MenubarShortcut>⌘U</MenubarShortcut>
                </MenubarItem>

                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleStrike().run()}
                >
                  <StrikethroughIcon className="size-4 mr-2" />{" "}
                  Strikethrough&nbsp;&nbsp;
                  <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarItem
              onClick={() => editor?.chain().focus().unsetAllMarks().run()}
            >
              <RemoveFormattingIcon className="size-4 mr-2" /> Clear Formatting
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MenuBar;
