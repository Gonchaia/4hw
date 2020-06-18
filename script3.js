let arr = [],
  min = 10,
  max = 99;
for (let i = 0; i < 7; i++) {
  arr[i] = [];
  for (let j = 0; j < 9; j++) {
    arr[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
  }
}
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 9; j++) {
    document.write(arr[i][j] + " ");
  }
  document.write("<br>");
}
document.write("<br>");
for (let i = 0; i < 7; i++) {
  arr[i] = arr[i].sort();
}
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 9; j++) {
    document.write(arr[i][j] + " ");
  }
  document.write("<br>");
}
