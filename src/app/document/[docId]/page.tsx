import Toolbar from "./(toolbar)";
import Editor from "./(editor)";

interface DocumentIdPageProps {
  params: Promise<{ docId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { docId } = await params;
  console.log(docId);

  return (
    <div className="min-h-screen bg-doc">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
