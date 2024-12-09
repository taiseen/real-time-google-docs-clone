import Editor from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ docId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { docId } = await params;

  return (
    <div className="min-h-screen bg-doc">
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
