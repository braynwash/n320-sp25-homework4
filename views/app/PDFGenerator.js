<<<<<<< HEAD
import { jsPDF } from "./jspdf.es.js";
=======
import jsPDF from "./jspdf.es.js";
>>>>>>> 04c142df5e34640c9ba3ecf17d50d0583e32b563

class PDFGenerator {
  constructor(title = "Document") {
    this.doc = new jsPDF();
    this.title = title;
<<<<<<< HEAD
    this.fontSize = 18;
    this.font = "Helvetica";
    this.doc.setFont(this.font, "normal");
    this.doc.setFontSize(this.fontSize);

    document.querySelector("#downloadPdf").addEventListener("click", () => {
      this.save(this.title);
    });
=======
>>>>>>> 04c142df5e34640c9ba3ecf17d50d0583e32b563
  }

  setTitle(title) {
    this.title = title;
  }

<<<<<<< HEAD
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
=======
  addText(text, x = 10, y = 10) {
    this.doc.text(text, x, y);
  }

  generateWithHtml(input = "no input") {
    this.doc.html(document.body, {
      callback: function (doc) {
        doc.save();
      },
    });
>>>>>>> 04c142df5e34640c9ba3ecf17d50d0583e32b563
  }

  save(filename = "document.pdf") {
    this.doc.save(filename);
  }
<<<<<<< HEAD

  updatePreview() {
    document.querySelector("#pdf-preview").src = this.getPdfUrl();
  }
}

=======
}

let test = new PDFGenerator();
test.generateWithHtml(`
  <h1>Testing</h1>
  <ol>
  <li>test</li>
  <li>test</li>
  <li>test</li>
  </ol>`);

>>>>>>> 04c142df5e34640c9ba3ecf17d50d0583e32b563
export default PDFGenerator;
