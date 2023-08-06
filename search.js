// search,indexOf,starWith,endWith..........


const lyrics = "amar sonar bangle ami tomay valobasi";
const word = lyrics.includes("sonar");
const words = lyrics.indexOf("sonar");
console.log(word)
console.log(words)
const negOne = lyrics.indexOf("bangladesh");
console.log(negOne)
const start = lyrics.startsWith("amar");
console.log(start);
const fileName = "okaydady.pdf";
const folderName = "okaydady.pdf";
console.log(fileName.endsWith("pdf"));