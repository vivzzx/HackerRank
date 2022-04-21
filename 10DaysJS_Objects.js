/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let counter = 0;
    objects.map((item) => {
        let valuesArr = Object.values(item);
        let test = valuesArr.reduce((a, b) => a / b);
        test == 1 ? counter++ : false;
    })
    //console.log(counter)
    return counter
}


const numbersObj = [
    {x:1, y:1},
    {x:2, y:3},
    {x:3, y:3},
    {x:3, y:4},
    {x:4, y:5}
]

getCount(numbersObj)