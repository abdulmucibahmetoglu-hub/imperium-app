import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface TableColumn {
  header: string;
  dataKey: string;
}

interface PdfExportOptions {
  title: string;
  subtitle?: string;
  columns: TableColumn[];
  data: Record<string, string | number>[];
  filename?: string;
}

export function exportToPdf({ title, subtitle, columns, data, filename }: PdfExportOptions) {
  const doc = new jsPDF();

  // Header
  doc.setFontSize(20);
  doc.setTextColor(37, 99, 235);
  doc.text('YapiBulut', 14, 20);

  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('Insaat Yonetim Platformu', 14, 27);

  // Title
  doc.setFontSize(16);
  doc.setTextColor(30, 30, 30);
  doc.text(title, 14, 40);

  if (subtitle) {
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(subtitle, 14, 47);
  }

  // Date
  const now = new Date();
  const dateStr = `${now.toLocaleDateString('tr-TR')} ${now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}`;
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text(`Rapor Tarihi: ${dateStr}`, 14, subtitle ? 54 : 47);

  // Table
  const startY = subtitle ? 60 : 53;

  (doc as unknown as {
    autoTable: (options: {
      startY: number;
      head: string[][];
      body: (string | number)[][];
      theme: string;
      headStyles: { fillColor: number[]; fontSize: number; fontStyle: string };
      bodyStyles: { fontSize: number };
      alternateRowStyles: { fillColor: number[] };
      margin: { left: number; right: number };
    }) => void;
  }).autoTable({
    startY,
    head: [columns.map((c) => c.header)],
    body: data.map((row) => columns.map((c) => row[c.dataKey] ?? '')),
    theme: 'grid',
    headStyles: {
      fillColor: [37, 99, 235],
      fontSize: 9,
      fontStyle: 'bold',
    },
    bodyStyles: {
      fontSize: 8,
    },
    alternateRowStyles: {
      fillColor: [245, 247, 250],
    },
    margin: { left: 14, right: 14 },
  });

  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Sayfa ${i} / ${pageCount} - YapiBulut`,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
  }

  const fname = filename || `${title.replace(/\s+/g, '_')}_${now.toISOString().slice(0, 10)}.pdf`;
  doc.save(fname);
}
