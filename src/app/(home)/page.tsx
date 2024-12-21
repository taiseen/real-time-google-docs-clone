"use client";

import { api } from "../../../convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import { paginateNum } from "@/constants/data";
import useSearchParam from "@/hooks/useSearchParam";
import TemplatesGallery from "./templatesGallery";
import DocumentsTable from "./documentsTable";
import Navbar from "./navbar";

const Home = () => {
  const [search] = useSearchParam();

  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: paginateNum }
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 p-4 bg-white">
        <Navbar />
      </div>

      <div className="mt-16">
        <TemplatesGallery />

        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
};

export default Home;
