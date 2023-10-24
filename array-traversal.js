// array traversals 

// for in loop

var scores = [9,8,7,6,5]

for(key in scores){
    console.log(scores[key],key)
}

// for of loop 

for(score of scores){
    console.log(score)
}

// for each loop

scores.forEach(score=>console.log(score))

