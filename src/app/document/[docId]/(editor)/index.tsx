"use client";

import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { LineHeightExtension } from "@/extension/lineHeight";
import { FontSizeExtension } from "@/extension/fontSize";
import { useEditor, EditorContent } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import { useStorage } from "@liveblocks/react";

import useEditorStore from "@/store/use-editor-store";
import StarterKit from "@tiptap/starter-kit";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import TableRow from "@tiptap/extension-table-row";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Threads from "../(liveblocks)/threads";
import Ruler from "./ruler";

const Editor = () => {
  const { setEditor } = useEditorStore();

  const liveblocks = useLiveblocksExtension();

  const leftMargin = useStorage((root) => root.leftMargin);
  const rightMargin = useStorage((root) => root.rightMargin);

  const editor = useEditor({
    immediatelyRender: false,

    onCreate: ({ editor }) => {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },

    editorProps: {
      attributes: {
        style: `padding-left: ${leftMargin ?? 56}px; padding-right: ${rightMargin ?? 56}px;`,
        class:
          "focus:outline-none bg-white border border-pageBorder print:border-0 flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },

    extensions: [
      liveblocks,
      StarterKit.configure({
        history: false, // disable history because liveblocks has its own history management...
      }),
      FontSizeExtension,
      LineHeightExtension,
      TaskList,
      TaskItem.configure({ nested: true }),
      Table.configure({ resizable: true }),
      TableHeader,
      TableRow,
      TableCell,
      Image,
      ImageResize,
      Underline,
      FontFamily,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    // content: "<p>Hello World! 💖</p>",
  });

  return (
    <div className="size-full overflow-x-auto px-4 bg-editor print:p-0 print:bg-white print:overflow-visible">
      <Ruler />

      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
        <Threads editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
