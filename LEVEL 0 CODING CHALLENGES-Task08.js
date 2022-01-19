function timeConversion(time) {

    hour = Math.round(time / 60)
    mins = time - (60 * hour)
    stampHr = ""
    stampMin = ""


    if (hour > 1) {

        stampHr = " Hours"

    } else {
        stampHr = " Hour"
    }

    if (mins > 1) {

        stampMin = " Minutes"

    } else {
        stampMin = " Minute"
    }


    return String(hour) + stampHr + ", " + mins + stampMin;

}

console.log(timeConversion(133));