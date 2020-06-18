var i;
var S1 = 0;
var S2 = 0;
var S = 1;
for (i = 0; i <= 40; i++) {
  S1 += i;
}
for (i = 5; i <= 70; i += 5) {
  S2 += i;
}
S = S1 * S2;
window.alert(S);
