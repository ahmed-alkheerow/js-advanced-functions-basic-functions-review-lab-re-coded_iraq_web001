// Your code here
function saturdayFun(activity="roller-skate"){
  return`This Saturday, I want to ${activity}!`;
};
saturdayFun();

function mondayWork(activity="go to the office"){
  return`This Monday, I will ${activity}.`;
};
mondayWork();

function wrapAdjective(whatever = "*" ) {
  return function innerFunction(adjective ="special") {
    return `You are ${whatever}${adjective}${whatever}`

  }
}
