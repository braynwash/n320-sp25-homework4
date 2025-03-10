import Invoice from "../invoice/invoiceGenerator.js";

// set array
let items = [];

// items to be added
let laptop = {
  name: "Framez Laptop",
  price: 1244.99,
  quantity: 0,
};
let keyboard = {
  name: "RGB Keyboard",
  price: 156.99,
  quantity: 0,
};
let curvedDisplay = {
  name: "144Hz Curved Monitor",
  price: 349.99,
  quantity: 0,
};
let betterLaptop = {
  name: "BetterFrames Laptop",
  price: 1969.99,
  quantity: 0,
};

document.getElementById("laptop").onclick = function () {
  laptop.quantity++;
};
document.getElementById("rgbKeyboard").onclick = function () {
  keyboard.quantity++;
};
document.getElementById("curvedDisplay").onclick = function () {
  curvedDisplay.quantity++;
};
document.getElementById("betterLaptop").onclick = function () {
  betterLaptop.quantity++;
};

// Click handler
document.getElementById("genInvoice").onclick = function () {
  // clear the array
  items = [];

  // Add items to the array
  if (laptop.quantity > 0) items.push(laptop);
  if (keyboard.quantity > 0) items.push(keyboard);
  if (curvedDisplay.quantity > 0) items.push(curvedDisplay);
  if (betterLaptop.quantity > 0) items.push(betterLaptop);

  // Generate the invoice
  let invoice = new Invoice("Invoice", items);
  invoice.addHeader("BetterFrames Gaming Tech");
  invoice.invoiceDetails();
  // invoice.listPurchases();
  invoice.purchaseTable();
  invoice.displayFinalPrice();
  invoice.signatureLine();
  invoice.updatePreview();

  // Show the download button and PDF previewer
  document.getElementById("downloadPdf").style.display = "block";
  document.getElementById("pdfPreviewer").style.display = "block";
};
