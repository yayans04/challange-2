function changeword(selectedText, changedText, text) {
  return text.replace(selectedText, changedText);
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeword("mencintai", "membenci", kalimat1));
console.log(changeword("bromo", "semeru", kalimat2));
