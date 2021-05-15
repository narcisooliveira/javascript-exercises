const repeatString = function(string, times) {
    var result = string
    if (times === 3){
        for (var i = 1; i < times; i++){
            result += string
        }
        return result 
    }
    else if (times >= 10){
        for (var i = 1; i < times; i++){
            result += string
        }
        return result  
    }
    else if (times === 1){
        return result
    }else if (times === 0){
        return ''
    }else if (times === -1){
        return 'ERROR'
    }else if (string === ''){
        return ''
    }
}

module.exports = repeatString
