function textCompare(text1, text2) {
    element = [];
    for (let i = 0; i < text2.length; i++) {


        for (let index = 0; index < text1.length; index++) {

            if (text2[i] === text1[index]) {
                element.push(text1[index])
            }

        }

    }

    return console.log(element);

}

textCompare("house", "computers")