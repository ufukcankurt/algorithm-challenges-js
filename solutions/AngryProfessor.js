function angryProfessor(k, a) {

    let onTime = 0;

    a.map((student) => student <= 0 ? onTime++ : student)

    return (onTime >= k) ? "NO" : "YES"

}
