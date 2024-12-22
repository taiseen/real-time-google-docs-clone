import Toolbar from "./(toolbar)";
import Editor from "./(editor)";
import Navbar from "./(navbar)";
import Room from "./(liveblocks)/room";

interface DocumentIdPageProps {
  params: Promise<{ docId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { docId } = await params;
  // console.log(docId);

  return (
    <div className="min-h-screen bg-doc">
      <div
        className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD]
      l print:hidden"
      >
        <Navbar />
        <Toolbar />
      </div>

      <div className="pt-[114px] print:pt-0">
        <Room>
          <Editor />
        </Room>
      </div>
    </div>
  );
};

export default DocumentIdPage;
