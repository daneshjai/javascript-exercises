const removeFromArray = function(array, ...itemsToRemove) {
    // filter returns a new array not the original one   
    array =  array.filter(item => !itemsToRemove.includes(item));
    return array
    

};

// Do not edit below this line
module.exports = removeFromArray;
