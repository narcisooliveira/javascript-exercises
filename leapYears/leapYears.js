const leapYears = function(years) {
    yearTest = years
    if (yearTest % 4 === 0) {
        if (yearTest % 100 === 0) {
            if (yearTest % 400 === 0) {
                return true
            }
            return false
        }
        return true
    }return false
}

module.exports = leapYears
