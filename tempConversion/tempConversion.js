const ftoc = function(temp) {
  let aux = temp - 32
  tempConverted = aux / 1.8 
  return parseFloat(tempConverted.toFixed(1))
}

const ctof = function(temp) {
    let aux = temp * 1.8
    tempConverted = aux + 32
    return parseFloat(tempConverted.toFixed(1))
}

module.exports = {
  ftoc,
  ctof
}
