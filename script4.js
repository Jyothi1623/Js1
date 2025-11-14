var Who = "I am student "

function accessGlobal() {
    console.log("Inside func:", Who)
}
accessGlobal()


let where = "I am taking coaching at 10k Coders"
    console.log("Inside block:", where)


function localVariable() {
    let localVar = "I am student at 10k coders"
    console.log(localVar)
}
localVariable()




console.log("Using var in loop:")
for (var i = 0; i < 3; i++) {
    console.log(i)
}
console.log(" Using var in  loop, i =", i)

console.log("Using let in loop:")
for (let j = 0; j < 3; j++) {
    console.log(j)
}
console.log("Using let in loop, i =", i)

