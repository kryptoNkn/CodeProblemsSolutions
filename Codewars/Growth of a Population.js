function nbYear(p0, percent, aug, p) {
    // your code
    let countYears = 0
    while (p0 < p)
    {
        p0 = Math.floor(p0 + (p0 * percent / 100) + aug)
        countYears++
    }
    return countYears
}