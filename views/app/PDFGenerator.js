import { jsPDF } from "./jspdf.es.js";

class PDFGenerator {
  constructor(title = "Document") {
    this.doc = new jsPDF();
    this.title = title;
    this.fontSize = 13;
    this.font = "Helvetica";
    this.doc.setFont(this.font, "normal");
    this.doc.setFontSize(this.fontSize);

    document.querySelector("#downloadPdf").addEventListener("click", () => {
      this.save(this.title);
    });
  }

  setTitle(title) {
    this.title = title;
  }

  setFontWeight(weight) {
    this.doc.setFont(this.font, weight);
  }
  setFontColor(r, g, b) {
    this.doc.setTextColor(r, g, b);
  }
  resetFontColor() {
    this.doc.setTextColor(0, 0, 0);
  }
  setFontSize(newFontSize) {
    this.doc.setFontSize(newFontSize);
  }
  resetFontSize() {
    this.doc.setFontSize(this.fontSize);
  }

  addHeader(text) {
    // Draw header text.
    this.setFontSize(20);
    this.setFontWeight("bold");
    this.addText(text, 10, null, 6);

    // Draw the <hr>
    let lineY = this.currentY + 2;
    this.doc.setDrawColor(249, 77, 61);
    this.doc.setFillColor(249, 77, 61);
    this.doc.rect(10, lineY, this.doc.internal.pageSize.getWidth() - 20, 1, "DF");

    // Add space after Header
    this.addText("", 10, null, 1);

    // Reset font style
    this.setFontWeight("normal");
    this.resetFontSize();
    this.doc.setDrawColor(0, 0, 0, 1);
    this.doc.setFillColor(0, 0, 0, 0);
  }

  addText(text, x = 10, y = null, lineHeight = 7) {
    if (this.currentY == null) this.currentY = 0;
    if (y === null) {
      this.currentY = (this.currentY || 10) + lineHeight;
    } else {
      this.currentY = y;
    }
    this.doc.text(text, x, this.currentY);
  }

  getPdfUrl() {
    return this.doc.output("bloburl");
  }

  save(filename = "document.pdf") {
    this.doc.save(filename);
  }

  updatePreview() {
    document.querySelector("#pdf-preview").src = this.getPdfUrl();
  }
}

export default PDFGenerator;
