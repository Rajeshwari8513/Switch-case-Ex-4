const fruit = "orange";
let fruitType;
switch (fruit) {
  case "strawberry":
  case "blueberry":
    fruitType = "berry"
    break;
  case "orange":
  case "lemon":
  case "lime":
     fruitType = "citrus"
    break;
  default:
     fruitType = "othertype"
}
console.log(`The fruit is a ${fruitType} fruit.`);