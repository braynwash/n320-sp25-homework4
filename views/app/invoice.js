document.getElementById("genInvoice").onclick = function () {
  let items = [];
  console.log("Generating invoice...");

  // Get the values from the checkboxes
  if (document.getElementById("laptop").checked) {
    console.log("Laptop selected");
    items.push({
      name: "Laptop",
      price: document.getElementById("laptop").getAttribute("data-price"),
    });
    console.log(items);
  }
  if (document.getElementById("rgbKeyboard").checked) {
    console.log("keyboard selected");
    items.push({
      name: "RGB Keyboard",
      price: document.getElementById("rgbKeyboard").getAttribute("data-price"),
    });
    console.log(items);
  }
  if (document.getElementById("curvedDisplay").checked) {
    console.log("display selected");
    items.push({
      name: "144Hz Curved Monitor",
      price: document
        .getElementById("curvedDisplay")
        .getAttribute("data-price"),
    });
    console.log(items);
  }
  if (document.getElementById("betterLaptop").checked) {
    console.log("betterLaptop selected");
    items.push({
      name: "BetterFrames Laptop",
      price: document.getElementById("betterLaptop").getAttribute("data-price"),
    });
    console.log(items);
  }
};
