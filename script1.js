var a;
var h;
var S;
a = window.prompt("Основание: ");
h = window.prompt("Высота: ");
if (a <= 0) {
  window.alert("Ошибка! Основание меньше нуля");
} else {
  if (h <= 0) {
    window.alert("Ошибка! Высота меньше нуля");
  } else {
    S = a * h;
    window.alert("Площадь: " + S);
  }
}
