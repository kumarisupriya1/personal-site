function convert(celsius) {
  var a;
  a = Number(celsius);
  b = (a * 9) / 5 + 32;
  document.getElementById("ans").value = b;
}

function reset() {
  document.getElementById("ans").value = null;
  document.getElementById("n1").value = null;
}
