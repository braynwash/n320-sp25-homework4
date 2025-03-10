import PDFGenerator from "../PDFGenerator.js";

class CertificateGenerator extends PDFGenerator {
  constructor(title = "Certificate", userName, score) {
    super(title);
    this.userName = userName;
    this.score = score;
    // console.log("Certificate constructor:", this.userName, this.score);
  }

  certificateHeader() {
    this.addHeader("N428 - Advanced Dessert Decorating");
    this.setFontSize(24);
    this.setFontWeight("bold");
    this.addText("Certificate of Completion", 70, 40);
  }

  certificateDetails() {
    this.setFontSize(16);
    this.setFontWeight("normal");
    this.addText("to", 110, 55);

    this.setFontSize(20);
    this.setFontWeight("bold");
    this.addText(this.userName, 90, 70);

    this.setFontSize(14);
    this.setFontWeight("normal");
    this.addText(`Date: ${new Date().toLocaleDateString()}`, 90, 90);
    this.addText(`Score: ${this.score}%`, 90, 105);
  }

  generateCertificate() {
    this.certificateHeader();
    this.certificateDetails();
  }

  // generate a blob url for the pdf using jspdf.es.js
  getPdfUrl() {
    const pdfOutput = this.doc.output("blob");
    return URL.createObjectURL(pdfOutput);
  }

  save(filename = "document.pdf") {
    this.doc.save(filename);
  }

  // update the preview when method is called
  updatePreview() {
    const pdfUrl = this.getPdfUrl();
    document.querySelector("#pdf-preview").src = pdfUrl;
  }
}

export default CertificateGenerator;
