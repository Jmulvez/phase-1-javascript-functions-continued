function(mondayWork) {
    console.log('This Monday, I will go to the office');
  }
function(saturdayFun) {
    console.log('roller-skate')
}
const storedFunction = outer('dedicated programmer')
function outer() {
    const innerFunction = function (special) {
        return '${greting}, ${youAre}, ${storedFunction}'
    }
}