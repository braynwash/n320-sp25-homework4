import PDFGenerator from "./PDFGenerator.js";

class CustomPDF extends PDFGenerator {
  constructor(title = "Custom Document") {
    super(title);
  }

  addImage(imageData, type, x = 10, y = 10, width = 50, height = 50) {
    this.doc.addImage(imageData, type, x, y, width, height);
  }

  createTicket(imageSrc, imageType, eventTitle, eventTime, eventLocation) {
    this.doc.setLineWidth(2);
    this.doc.rect(11, 26, this.doc.internal.pageSize.getWidth() - 23, 90);

    var img = new Image();
    img.src = imageSrc;

    this.setFontColor(249, 77, 61);
    this.setFontWeight("bold");
    eventPdf.addImage(img, imageType, 15, 30, 38, 36);

    this.setFontSize(20);
    this.addText(eventTitle, 56, 39);
    this.resetFontColor();
    this.resetFontSize();
    this.setFontWeight("normal");
    this.addText(eventTime, 56, null, 7);
    this.addText(eventLocation, 56, null, 7);
  }
}

const eventPdf = new CustomPDF();
eventPdf.addHeader("Your ticket");
eventPdf.createTicket(
  "./images/csh.png",
  "png",
  "Car Seat Headrest",
  "Sat - Jul 26, 2025 - 6:30 PM",
  "The Salt Shed Outdoors (Fairgrounds), Chicago, IL"
);
eventPdf.updatePreview();
