var parser = require('its-a-date');

exports.parse = function (dateString, dayBeforeMonth) {
    parser.settings({ 'day_before_month': dayBeforeMonth });

    var result = parser.parse(dateString);

    return {
        "year": result.getFullYear(),
        "month": result.getMonth(),
        "day": result.getDate(),
        "hour": result.getHours(),
        "minute": result.getMinutes(),
        "week_day": DayNumberToString(result.getDay()),
        "full_date": FullFormat(result, dayBeforeMonth),
        "used_format": FullFormatUsed(dayBeforeMonth)
    }
};

function DayNumberToString(dayNumber) {

    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }

    return "Undefined day";
}

function FullFormat(result, dayBeforeMonth) {
    var format;

    if (dayBeforeMonth) {
        format =
            result.getDate() + "/" +
            result.getMonth() + "/" +
            result.getFullYear() + " " +
            result.getHours() + ":" +
            result.getMinutes();
    } else {
        format =
            result.getMonth() + "/" +
            result.getDate() + "/" +
            result.getFullYear() + " " +
            result.getHours() + ":" +
            result.getMinutes();
    }

    return format;
}

function FullFormatUsed(dateBeforeMonth) {

    if (dateBeforeMonth) {
        return "dd/MM/YYYY hh:mm";
    } else {
        return "MM/dd/YYYY hh:mm";
    }
}