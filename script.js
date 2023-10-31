const quantity = prompt("Zadej počet triček - celé číslo:");

let priceTshirt;
  if (quantity < 50) {
      priceTshirt = 300;
  } else if (quantity < 200) {
      priceTshirt = 250;
  } else if (quantity < 500) {
      priceTshirt = 200;
  } else if (quantity < 1000) {
      priceTshirt = 150;
  } else {
      priceTshirt = 120;
  }

  const totalPrice = quantity * priceTshirt;

  document.body.innerHTML += `
<p>Celková cena vaší objednávky našich autorských triček s linorytovým tiskem je: ${totalPrice} Kč.</p>
`
