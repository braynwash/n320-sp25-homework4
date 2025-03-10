import PDFGenerator from "../PDFGenerator.js";

class Receipt extends PDFGenerator {
  constructor(title = "Document", items) {
    super(title);
    this.items = items;
  }

  invoiceDetails() {
  }

  purchaseTable() {
    this.currentY += 20;

    // create table format
    this.doc.rect(10, this.currentY, 145, this.items.length * 9);
    this.doc.rect(70, this.currentY, 50, this.items.length * 9);
    this.doc.line(
      100,
      this.currentY,
      100,
      this.currentY + this.items.length * 9
    );

    // create header row
    this.setFontWeight("bold");
    this.doc.text("Item Name", 15, this.currentY - 2);
    this.doc.text("Item Price", 75, this.currentY - 2);
    this.doc.text("Quantity", 100, this.currentY - 2);
    this.doc.text("Total Price", 125, this.currentY - 2);
    this.setFontWeight("normal");

    // create data rows
    for (let i = 0; i < this.items.length; i++) {
      this.currentY += 8;
      this.addText(this.items[i].name, 15, this.currentY, 6);
      this.addText("$" + this.items[i].price, 75, this.currentY, 6);
      this.addText(`${this.items[i].quantity}`, 105, this.currentY, 6);
      this.addText(
        "$" + (this.items[i].price * this.items[i].quantity).toFixed(2),
        125,
        this.currentY,
        6
      );

      // draw row line unless it's the last row
      if (i !== this.items.length - 1) {
        this.doc.line(10, this.currentY + 2, 155, this.currentY + 2);
      }
    }
  }

  displayFinalPrice() {
    // get the total
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price * this.items[i].quantity;
    }

    // display the total
    this.currentY += 20;
    this.setFontWeight("bold");
    this.setFontSize(14);
    this.addText("Total: $" + total.toFixed(2), 10, null, 7);
    this.resetFontSize();
    this.setFontWeight("normal");
  }
}

export default Receipt;
