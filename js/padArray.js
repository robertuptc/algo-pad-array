// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value=null) => {
    let newArray = array.slice()
    
    while (newArray.length < minSize + 1) {
        newArray.push(value)
        minSize -= 1 
    }
   
    return newArray
}


