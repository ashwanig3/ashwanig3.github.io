var items = document.querySelectorAll(".item");
var header = document.querySelector("header");

function genColor() {
  var formate = "#******";
  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  for (var i = 0; i < letters.length; i++) {
    formate = formate.replace(
      "*",
      letters[Math.floor(Math.random() * letters.length)]
    );
  }
  return formate;
}

header.style.backgroundColor = genColor();
header.style.color = genColor();

items.forEach(item => {
  var color = genColor();
  item.innerHTML = color;
  item.style.backgroundColor = color;
  item.style.fontWeight = "600";
});
