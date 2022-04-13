/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

function isPositive(a) {
    if (a >= 1) {
        return "YES"
    } else {
        throw (a == 0 ? new Error('Zero Error') : new Error ('Negative Error'))
    } 
}


//**  Tests **// 
//yes
//console.log(isPositive(3))
//console.log(isPositive(1))
//console.log(isPositive(2))


//zero error
//isPositive(0)

//neg error
//isPositive(-1)