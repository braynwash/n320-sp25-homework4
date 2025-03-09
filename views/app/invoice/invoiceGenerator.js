import PDFGenerator from "../PDFGenerator.js";

class Invoice extends PDFGenerator {
  constructor(title = "Document", items) {
    super(title);
    this.items = items;
    console.log("Invoice constructor: ", this.items);
  }

  invoiceDetails() {
    // "invoice" and current date
    this.setFontSize(16);
    this.addText("Invoice " + new Date().toDateString(), 10, null, 8);
    this.resetFontSize();
  }

  listPurchases() {
    this.currentY += 10;
    this.doc.rect(10, this.currentY, 200, this.items.length * 10);
    this.addText(
      "Item Name | Item Price | Quantity Ordered | Total Price of Item"
    );
    for (let i = 0; i < this.items.length; i++) {
      this.addText(
        `${this.items[i].name} | $${this.items[i].price} | ${
          this.items[i].quantity
        } | $${this.items[i].price * this.items[i].quantity}`,
        10,
        null,
        6
      );
      this.doc.line(10, this.currentY, 210, this.currentY);
      //   this.addText(`${this.items[i].name} - $${this.items[i].price}`);
    }
  }
}

export default Invoice;
