
function saveThePrisoner(n, m, s) {
    let rest = (s + m - 1) % n;

    if (rest === 0) rest = n;
    
    return rest;
}
