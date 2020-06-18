function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getArray(n) {
  let array = [];
  for (let i = 0; i < n * n; i++) {
    array[i] = getRandomInt(10, 99);
  }
  return array;
}

function getResultArray(array) {
  result = array.slice([0], array.length);
  result.sort();
  return result;
}

var n;
n = window.prompt("Введите размерность: ");

let array = getArray(n);
let sortArray = getResultArray(array);

let res_arr = [];
let i = 0;
let x = n - 1;
let y = n - 1;
for (let i = 0; i < n; i++) {
  res_arr[i] = [];
  for (let j = 0; j < n; j++) {
    res_arr[i][j] = 0;
  }
}

while (x >= 0) {
  if (n % 2 != 0) {
    while ((y >= 0) && (y <= n - 1)) {
      if (x % 2 != 0) {
        res_arr[x][y] = sortArray[i];
        i++;
        y += 1;
      }
      if (x % 2 == 0) {
        res_arr[x][y] = sortArray[i];
        i++;
        y -= 1;
      }
    }
    x -= 1;
    if (x % 2 != 0) {
      y++;
    } else {
      y--;
    }
  } else {
    while ((y >= 0) && (y <= n - 1)) {
      if (x % 2 != 0) {
        res_arr[x][y] = sortArray[i];
        i++;
        y -= 1;
      }
      if (x % 2 == 0) {
        res_arr[x][y] = sortArray[i];
        i++;
        y += 1;
      }
    }
    x -= 1;
    if (x % 2 != 0) {
      y--;
    } else {
      y++;
    }
  }
}


for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(res_arr[i][j] + " ");
  }
  document.write("<br>");
}
