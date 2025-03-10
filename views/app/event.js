import PDFGenerator from "./PDFGenerator.js";

class CustomPDF extends PDFGenerator {
  constructor(title = "Custom Document") {
    super(title);
  }

  addImage(imageData, type, x = 10, y = 10, width = 50, height = 50) {
    this.doc.addImage(imageData, type, x, y, width, height);
  }

  createTicket(imageSrc, imageType, eventTitle, eventTime, eventLocation) {
    this.doc.setLineWidth(1);
    this.doc.rect(11, 26, this.doc.internal.pageSize.getWidth() - 23, 44);

    var img = new Image();
    img.src = imageSrc;

    this.setFontColor(249, 77, 61);
    this.setFontWeight("bold");
    this.addImage(img, imageType, 15, 30, 38, 36);

    this.setFontSize(20);
    this.addText(eventTitle, 56, 36);
    this.resetFontColor();
    this.resetFontSize();
    this.setFontWeight("normal");
    this.addText(eventTime, 56, null, 7);
    this.addText(eventLocation, 56, null, 5);
    this.addText(
      `Name: ${document.getElementById("nameInput").value}`,
      56,
      null,
      8
    );
    this.addText(`TicketID: ${generateRandomString(7)}`, 56, null, 5);
  }
}

function generateRandomString(length) {
  const characters = "ABCDEFGHKMNPQRSUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

document.getElementById("CSH").addEventListener("click", () => {
  const eventPdf = new CustomPDF("CSH-Ticket");
  eventPdf.addHeader("Your ticket");
  eventPdf.createTicket(
    "./images/csh.png",
    "png",
    "Car Seat Headrest",
    "Sat - Jul 26, 2025 - 6:30 PM",
    "The Salt Shed Outdoors (Fairgrounds), Chicago, IL"
  );
  eventPdf.updatePreview();
});

document.getElementById("MoonWalker").addEventListener("click", () => {
  const eventPdf = new CustomPDF("MoonWalker-Ticket");
  eventPdf.addHeader("Your ticket");
  eventPdf.createTicket(
    "./images/moonwalker.jpg",
    "jpg",
    "Moon Walker",
    "Wed - May 14, 2025 - 8:00 PM",
    "Turntable, Indianapolis, IN"
  );
  eventPdf.updatePreview();
});
