import ReceiptGenerator from "../receipt/receiptGenerator.js";

let items = [];

let omelette = {
  name: "Omelette",
  price: 8.99,
  quantity: 0,
};
let cremeBrulee = {
  name: "Creme Brulee",
  price: 4.99,
  quantity: 0,
};
let egg = {
  name: "Egg",
  price: 1.99,
  quantity: 0,
};
let alertBox = document.createElement("div");
alertBox.style.position = "fixed";
alertBox.style.top = "10px";
alertBox.style.right = "10px";
alertBox.style.backgroundColor = "lightgreen";
alertBox.style.padding = "10px";
alertBox.style.border = "1px solid green";

document.getElementById("omelette").onclick = function () {
  omelette.quantity++;
  alertBox.innerText = "Omelette added to cart";
  document.body.appendChild(alertBox);
  setTimeout(() => {
    document.body.removeChild(alertBox);
  }, 750);
};
document.getElementById("cremeBrulee").onclick = function () {
  cremeBrulee.quantity++;
  alertBox.innerText = "Creme Brulee added to cart";
  document.body.appendChild(alertBox);
  setTimeout(() => {
    document.body.removeChild(alertBox);
  }, 750);
};
document.getElementById("egg").onclick = function () {
  egg.quantity++;
  alertBox.innerText = "Egg added to cart";
  document.body.appendChild(alertBox);
  setTimeout(() => {
    document.body.removeChild(alertBox);
  }, 750);
};
document.getElementById("checkOut").onclick = function () {
  items = [omelette, cremeBrulee, egg].filter((item) => item.quantity > 0);
  if (items.length === 0) {
    alertBox.innerText = "No Items In Cart!";
    alertBox.style.backgroundColor = "lightcoral";
    document.body.appendChild(alertBox);
    setTimeout(() => {
      document.body.removeChild(alertBox);
      alertBox.style.backgroundColor = "lightgreen";
    }, 750);
    return;
  }

  let receiptContent = `<h1>Ev's Egg-cellent Eggs</h1>`;
  receiptContent += `<p>Date: ${new Date().toLocaleDateString()}</p><br><br>`;
  let total = 0;

  items.forEach((item) => {
    receiptContent += `<p>${item.name} x ${item.quantity} = $${(
      item.price * item.quantity
    ).toFixed(2)}</p>`;
    total += item.price * item.quantity;
  });

  receiptContent += `<h2>Total: $${total.toFixed(2)}</h2>`;

  const pdfPreviewer = document.getElementById("pdfPreviewer");
  const pdfPreview = document.getElementById("pdf-preview");
  const downloadPdfButton = document.getElementById("downloadPdf");

  const blob = new Blob([receiptContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const styledReceiptContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; }
          h1 { color: #333; }
          p { margin: 5px 0; }
          h2 { margin-top: 20px; }
        </style>
      </head>
      <body>
        ${receiptContent}
      </body>
    </html>
  `;

  const styledBlob = new Blob([styledReceiptContent], { type: "text/html" });
  const styledUrl = URL.createObjectURL(styledBlob);
  pdfPreview.src = styledUrl;
  pdfPreviewer.style.display = "block";
  downloadPdfButton.style.display = "block";

  downloadPdfButton.onclick = function () {
    const Receipt = new ReceiptGenerator("Receipt");
    Receipt.addHeader("Ev's Egg Emporium");
    Receipt.addText(`Date: ${new Date().toLocaleDateString()}`);
    items.forEach((item) => {
      Receipt.addText(
        `${item.name} x ${item.quantity} = $${(
          item.price * item.quantity
        ).toFixed(2)}`
      );
    });

    Receipt.addText(`Total: $${total}`);
    Receipt.save("receipt.pdf");
  };
};
