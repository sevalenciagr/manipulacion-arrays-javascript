const words = ["spray", "elites", "limit", "apple", "exuberant"];

// const newWords = words.filter( function(word){
//     if (word.length >=6){
//       return true
//     }else{
//       return false
//     }
// })
// o 
const newWords = words.filter(word => word.length >= 6)

console.log(newWords) // [ 'elites', 'exuberant' ]