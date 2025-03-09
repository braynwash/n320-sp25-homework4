import jsPDF from "./jspdf.es.js";

class PDFGenerator {
  constructor(title = "Document") {
    this.doc = new jsPDF();
    this.title = title;
  }

  setTitle(title) {
    this.title = title;
  }

  addText(text, x = 10, y = 10) {
    this.doc.text(text, x, y);
  }

  generateWithHtml(input = "no input") {
    this.doc.html(document.body, {
      callback: function (doc) {
        doc.save();
      },
    });
  }

  save(filename = "document.pdf") {
    this.doc.save(filename);
  }
}

let test = new PDFGenerator();
test.generateWithHtml(`
  <h1>Testing</h1>
  <ol>
  <li>test</li>
  <li>test</li>
  <li>test</li>
  </ol>`);

export default PDFGenerator;
