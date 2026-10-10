const sumAll = function(val1, val2) {
    let array = [];
    if (Number.isInteger(val1) && val1 >= 0 &&  Number.isInteger(val2) && val2 >= 0) {
        // determine which value is bigger
        start = (val1 < val2) ? val1 : val2;
        end = (val1 == start) ? val2 : val1;
        // make array from the start count to end
        for (let index = start; index <= end; index++) {
            array.push(index);            
        }
        // sum the elements
        return array.reduce((sum, current) => sum + current)
    }
    return "ERROR"


};

// Do not edit below this line
module.exports = sumAll;
