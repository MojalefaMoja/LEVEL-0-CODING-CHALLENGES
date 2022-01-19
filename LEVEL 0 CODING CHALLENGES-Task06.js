function maxNum() {
    let large = arguments[0];
    for (let index = 0; index < arguments.length; index++) {

        if (arguments[index] > large) {

            large = arguments[index];



        }

    }


    return large



}

console.log(maxNum(1, 22, 3, 2));