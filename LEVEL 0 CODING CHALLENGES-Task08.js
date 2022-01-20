function timeConversion(time) {
    if (time === 60 || time < 60) {

        hour = 0
        mins = time
        stampHr = ""
        stampMin = ""

    } else {
        hour = Math.round(time / 60)
        mins = time - (60 * hour)
        stampHr = ""
        stampMin = ""
    }




    if (hour > 1) {

        stampHr = " Hours"

    } else {
        stampHr = " Hour"
    }

    if (mins > 1) {

        stampMin = " Minutes"

    } else if (mins <= 1) {
        stampMin = " Minute"

    }


    return String(hour) + stampHr + ", " + mins + stampMin;

}

console.log(timeConversion(11));
