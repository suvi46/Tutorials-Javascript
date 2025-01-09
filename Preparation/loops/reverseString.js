const str = "hello";
console.log(str.length);
let reversed = "";
for (i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log("reversed string: " + reversed);

for (j = 5; j >= 0; j--) {
  console.log("*".repeat(j));
}
