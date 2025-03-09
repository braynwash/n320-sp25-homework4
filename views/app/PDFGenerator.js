import { jsPDF } from "./jspdf.es.js";

class PDFGenerator {
  constructor(title = "Document") {
    this.doc = new jsPDF();
    this.title = title;
    this.fontSize = 18;
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

  addHeader(text) {
    // Draw header text.
    this.doc.setFontSize(24);
    this.doc.setFont(this.font, "bold");
    this.addText(text, 10, null, 10);

    // Draw the <hr>
    let lineY = this.currentY - 7.5;
    this.doc.setDrawColor(255, 0, 0);
    this.doc.setFillColor(255, 0, 0);
    this.doc.rect(10, lineY, this.doc.internal.pageSize.getWidth() - 20, 1, "DF");

    // Add space after Header
    this.addText("", 10, null, 1);

    // Reset font style
    this.doc.setFontSize(this.fontSize);
    this.doc.setFont(this.font, "normal");
  }

  addText(text, x = 10, y = null, lineHeight = 7) {
    if (this.currentY == null) this.currentY = 17;
    this.doc.text(text, x, this.currentY);
    if (y === null) {
      this.currentY = (this.currentY || 10) + lineHeight;
    } else {
      this.currentY = y;
    }
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
