const repeatString = function(str, num) {
    concatString = "";
    if (num < 0) {
        return 'ERROR';
    }
    for (let index = 0; index < num; index++) {
        concatString = concatString + str;        
    }
    return concatString;


};

// Do not edit below this line
module.exports = repeatString;
