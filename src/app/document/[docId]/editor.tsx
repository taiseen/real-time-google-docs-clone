"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";

import Table from "@tiptap/extension-table";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import TableRow from "@tiptap/extension-table-row";

import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class:
          "focus:outline-none bg-white border border-pageBorder print:border-0 flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({ nested: true }),
      Table.configure({ resizable: true }),
      TableHeader,
      TableRow,
      TableCell,
      Image,
      ImageResize,
    ],
    content: "<p>Hello World! 💖</p>",
    // content: `
    //     <table>
    //       <tbody>
    //         <tr>
    //           <th>Name</th>
    //           <th colspan="3">Description</th>
    //         </tr>
    //         <tr>
    //           <td>Cyndi Lauper</td>
    //           <td>Singer</td>
    //           <td>Songwriter</td>
    //           <td>Actress</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   `,
  });

  return (
    <div className="size-full overflow-x-auto px-4 bg-editor print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
