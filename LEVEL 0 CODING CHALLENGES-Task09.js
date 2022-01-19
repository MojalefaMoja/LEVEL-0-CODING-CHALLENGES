function findVowels(text) {

    vowels = [];


    for (let index = 0; index <= text.length; index++) {

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
    return vowels


}

console.log(findVowels("Umuzi"));