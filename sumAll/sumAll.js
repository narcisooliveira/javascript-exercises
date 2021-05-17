const sumAll = function(num1, num2) {
    if (typeof(num1) != 'number' || typeof(num2) != 'number' )
        return "ERROR";    
    
    if (num1 < 0 || num2 < 0)
        return "ERROR";
    
    if (num1 > num2){
        var aux = num1;
        num1 = num2;
        num2 = aux;
        var sum = 0;
        for (let index = num1; index <= num2; index++) {
            sum = sum + index;
            
        }
        return sum
    } else {
        var sum = 0;
        for (let index = num1; index <= num2; index++) {
            sum = sum + index;
            
        }return sum 
    }
}

module.exports = sumAll
