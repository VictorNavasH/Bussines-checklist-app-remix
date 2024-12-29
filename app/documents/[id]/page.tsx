"use client";

import { PdfViewer } from "@/components/pdf/pdf-viewer";

export default function DocumentPage({ params }: { params: { id: string } }) {
  // En una implementación real, obtendríamos la URL del PDF desde una API
  const pdfUrl = `/documents/${params.id}`;

  return <PdfViewer url={pdfUrl} />;
}