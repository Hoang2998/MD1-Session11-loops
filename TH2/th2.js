let sout;
sout = "";
for (let i = 1; i <= 10; i++) {
  sout = sout + "\n";
  for (let j = 1; j <= 10; j++) {
    sout = sout + " |" + i * j + "| ";
  }
  sout = sout + "\n";
}
console.log(sout);