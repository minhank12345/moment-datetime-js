const moment = require('moment');

function utcDateTimeFormat (){
    return moment.utc().format();
}

function utcDateTime(){
    return moment.utc();
}

function addTime(time, amount, unit){
    return time.add(amount, unit);
}

function subtractTime(time, amount, unit){
    return time.subtract(amount, unit);
}

function addTimeFormat(time, amount, unit) {
    return time.add(amount, unit).format();
}

function subtractTimeFormat(time, amount, unit) {
    return time.subtract(amount, unit).format();
}

module.export = {
    utcDateTimeFormat,
    utcDateTime,
    addTime,
    subtractTime,
    addTimeFormat,
    subtractTimeFormat
}