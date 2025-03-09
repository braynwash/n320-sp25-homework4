import PDFGenerator from "../PDFGenerator.js";

class Invoice extends PDFGenerator {
  constructor(title = "Document", items) {
    super(title);
    this.items = items;
    console.log("Invoice constructor: ", this.items);
  }

  companyHeader(header = "Our Company", subHeader = "Invoice") {
    // Draw header text.
    this.doc.setFontSize(24);
    this.doc.setFont(this.font, "bold");
    this.addText(header, 10, null, 10);

    // Draw subheader
    this.doc.setFontSize(18);
    this.doc.setFont(this.font, "semi-bold");
    this.addText(subHeader, 10, null, 10);

    // Draw the <hr>
    let lineY = this.currentY - 7.5;
    this.doc.setDrawColor(255, 0, 0);
    this.doc.setFillColor(255, 0, 0);
    this.doc.rect(
      10,
      lineY,
      this.doc.internal.pageSize.getWidth() - 20,
      1,
      "DF"
    );

    // Add space after Header
    this.addText("", 10, null, 1);

    // Reset font style
    this.doc.setFontSize(this.fontSize);
    this.doc.setFont(this.font, "normal");
  }

  listPurchases() {
    for (let i = 0; i < this.items.length; i++) {
      this.addText(`${this.items[i].name} - $${this.items[i].price}`);
    }
  }
}

export default Invoice;
