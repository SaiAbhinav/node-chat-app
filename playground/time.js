var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date().toLocaleTimeString();
// console.log(date);

var createdAt = 1543214707473;
var date = moment(createdAt);
console.log(date.format('h:mm a'));