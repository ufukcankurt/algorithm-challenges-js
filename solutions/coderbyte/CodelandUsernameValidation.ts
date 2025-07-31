function CodelandUsernameValidation(str) {
  const arr = str.split('');
  const firstIsNotDigit = isNaN(Number(arr[0]));

  if (arr.length >= 4 && arr.length <= 25 && firstIsNotDigit && arr[0] !== '_' && arr[arr.length - 1] !== '_') {
    return true;
  } else {
    return false;
  }
}

// keep this function call here
// @ts-ignore
console.log(CodelandUsernameValidation(readline()));

// Solution with Regular Expressions
function CodelandUsernameValidation2(str) {
  // ^            -> Başlangıç
  // [A-Za-z]     -> Bir harf (büyük ya da küçük)
  // [A-Za-z0-9_] -> İzinli karakterler: harf, rakam, underscore
  // {2,23}       -> Bu kısmın uzunluğu 2 ila 23 karakter arasında olmalı
  // [A-Za-z0-9]  -> Sonda harf veya rakam (underscore olmaz)
  // $            -> Bitiş
  const re = /^[A-Za-z][A-Za-z0-9_]{2,23}[A-Za-z0-9]$/;
  // Toplam uzunluk: 1 (baş harf) + 2..23 (ortalar) + 1 (son karakter) = 4..25

  return re.test(str) ? 'true' : 'false';
}
