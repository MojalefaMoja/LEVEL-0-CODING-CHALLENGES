function findVowels(text) {

    vowels = [];
    letter = ""


    for (let index = 0; index < text.length; index++) {

        switch (text[index]) {
            case 'A', 'a':
                vowels.push(text[index])
                break;
            case 'E', 'e':
                vowels.push(text[index])
                break;
            case 'I', 'i':
                vowels.push(text[index])
                break;
            case 'O', 'o':
                vowels.push(text[index])
                break;
            case 'U', 'u':
                vowels.push(text[index])
                break;

        }





    }

    for (let index = 0; index < vowels.length; index++) {

        letter += vowels[index] + " "



    }

    console.log("Vowels: " + letter);
    return letter




}

findVowels("Umuzi");
