
module.exports.getDate = getDate; //with this line we are actually exposing a methods written in this file.

function getDate(){
  let today = new Date();
  let currentDate = today.getDate();

  let options = {
    weekday : 'long',
    year : 'numeric',
    month: 'long',
    day:'numeric'
  };

  let dayAndDate = today.toLocaleString("en-US", options);
  return dayAndDate;
}

module.exports.getDay = getDay;

function getDay(){
  let today = new Date();
  let currentDate = today.getDate();

  let options = {
    weekday : 'long',
  };

  let day = today.toLocaleString("en-US", options);
  return day;
}

console.log(module.exports); //this would print==> { getDate: [Function: getDate], getDay: [Function: getDate] }
