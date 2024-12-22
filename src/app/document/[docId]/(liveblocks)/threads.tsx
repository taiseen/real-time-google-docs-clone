import { useThreads } from "@liveblocks/react/suspense";
import { Editor } from "@tiptap/react";
import {
  FloatingComposer,
  AnchoredThreads,
  FloatingThreads,
} from "@liveblocks/react-tiptap";

const Threads = ({ editor }: { editor: Editor | null }) => {
  const { threads } = useThreads({ query: { resolved: false } });

  return (
    <>
      <div className="anchored-threads">
        <AnchoredThreads editor={editor} threads={threads} />
      </div>
      <FloatingThreads
        editor={editor}
        threads={threads}
        className="floating-threads"
      />
      <FloatingComposer editor={editor} className="floating-composer" />
    </>
  );
};

export default Threads;
