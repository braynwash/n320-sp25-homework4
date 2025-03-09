import PDFGenerator from "./PDFGenerator.js";

const eventPdf = new PDFGenerator();
eventPdf.addHeader("Your ticket");
eventPdf.addText("test");
eventPdf.addText("teLmao!!");
eventPdf.updatePreview();
