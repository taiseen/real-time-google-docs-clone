import Editor from "./editor";

interface DocPageProps {
  params: Promise<{ docId: string }>;
}

const DocPage = async ({ params }: DocPageProps) => {
  const { docId } = await params;

  return (
    <div className="min-h-screen bg-doc">
      <Editor />
    </div>
  );
};

export default DocPage;
