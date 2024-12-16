"use client";

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
                <MenubarItem>
                  <FileJsonIcon className="size-4 mr-2" /> JSON
                </MenubarItem>
                <MenubarItem>
                  <GlobeIcon className="size-4 mr-2" /> HTML
                </MenubarItem>
                <MenubarItem>
                  <BsFilePdf className="size-4 mr-2" /> PDF
                </MenubarItem>
                <MenubarItem>
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
            <MenubarItem>
              <Undo2Icon className="size-4 mr-2" /> Undo
              <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>

            <MenubarItem>
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
                <MenubarItem>1 x 1</MenubarItem>
                <MenubarItem>2 x 2</MenubarItem>
                <MenubarItem>3 x 3</MenubarItem>
                <MenubarItem>4 x 4</MenubarItem>
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
                <MenubarItem>
                  <BoldIcon className="size-4 mr-2" /> Bold
                  <MenubarShortcut>⌘B</MenubarShortcut>
                </MenubarItem>

                <MenubarItem>
                  <ItalicIcon className="size-4 mr-2" /> Italic
                  <MenubarShortcut>⌘I</MenubarShortcut>
                </MenubarItem>

                <MenubarItem>
                  <UnderlineIcon className="size-4 mr-2" /> Underline
                  <MenubarShortcut>⌘U</MenubarShortcut>
                </MenubarItem>

                <MenubarItem>
                  <StrikethroughIcon className="size-4 mr-2" />{" "}
                  Strikethrough&nbsp;&nbsp;
                  <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarItem>
              <RemoveFormattingIcon className="size-4 mr-2" /> Clear Formatting
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MenuBar;
