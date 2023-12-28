//   1 -MASALA
// function teskariSatr(arr) {
//     return arr.split('').reverse().join('');
// }
// const satr = "hello";
// console.log(teskariSatr(satr));
//  ----- 2 - MASALA
// function unliSon(arr) {
//     const unlilar = arr.match(/[aeiou]/gi);
//     return unlilar ? unlilar.length : 0;
// }
// const testSatr = "salomeiom";
// console.log(unliSon(testSatr));
// ----- 3 -MASALA
// function palindromTekshir(satr) {
//     const res = satr.split('').reverse().join(''); 
//     return satr === res; 
//   }
//   const testSatr1 = "radar";
//   const testSatr2 = "salom";
//   console.log(palindromTekshir(testSatr1)); 
//   console.log(palindromTekshir(testSatr2)); 
// --- 4 - MASALA
// function engUzunSoz(arr) {
//     const sozlar = arr.split(' '); 
//     let engUzun = sozlar[0]; 
  
//     for (let i = 1; i < sozlar.length; i++) {
//       if (sozlar[i].length > engUzun.length) {
//         engUzun = sozlar[i]; 
//       }
//     }
//     return engUzun;
//   }
//   const test = "Ma'rufjon bugun kun yahshi isidi ";
//   console.log(engUzunSoz(test)); 
// --- 5 - MASALA
// function boshHarfKatta(arr) {
//     const res = arr.split(' '); 
    
//     for (let i = 0; i < res.length; i++) {
//       res[i] = res[i][0].toUpperCase() + res[i].substring(1); 
//     }
  
//     return res.join(' '); 
//   }
//    const test = "salom dunyo";
//   console.log(boshHarfKatta(test)); 
//  --- 6 - MASALA
function satrniTakrorlash(arr, key) {
    let newSatr = '';
    for (let i = 0; i < arr.length; i++) {
      newSatr += arr[i].repeat(key); 
    }
    return newSatr;
  }
  const asosiySatr = "salom";
  const key = 2;
  console.log(satrniTakrorlash(asosiySatr, key)); 