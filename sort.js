function sort(array, cb){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(cb(array[i], array[j]) < 0){
                let current = array[j]
                array[j] = array[i]
                array[i] = current
            }
        }
    }
    return array
}

console.log(sort([5556, 2,2,3,45,53,12,1,4141,45], (a, b) => b-a))