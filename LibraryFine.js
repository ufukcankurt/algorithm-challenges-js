function libraryFine(d1, m1, y1, d2, m2, y2) {

    const diffYear = y1 - y2
    const diffMonth = m1 - m2
    const diffDay = d1 - d2

    if (diffYear > 0) {
        return 10000
    } else if (diffMonth > 0 && diffYear >= 0) {
        return 500 * diffMonth
    } else if (diffDay > 0 && diffMonth >= 0 && diffYear >= 0) {
        return 15 * diffDay
    } else {
        return 0
    }
}