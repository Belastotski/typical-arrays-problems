
exports.min = function(array) {
   return arguments.length && array.length ? Math.min(...array) : 0
}

exports.max = (...array) =>
     array.length && array[0].length ?  Math.max(...array[0]): 0


exports.avg = function avg (array) {
    return arguments.length && array.length? array.reduce((sum,val) => sum+val)/array.length : 0

}

