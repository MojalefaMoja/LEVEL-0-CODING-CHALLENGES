function findVowels(text) {

    const vowels = new Set();



    for (let index = 0; index < text.length; index++) {

        switch (text[index].toLowerCase()) {
            case 'A', 'a':
                vowels.add(text[index].toLowerCase())
                break;
            case 'E', 'e':
                vowels.add(text[index].toLowerCase())
                break;
            case 'I', 'i':
                vowels.add(text[index].toLowerCase())
                break;
            case 'O', 'o':
                vowels.add(text[index].toLowerCase())
                break;
            case 'U', 'u':
                vowels.add(text[index].toLowerCase())
                break;

        }





    }

    const myIterator = vowels.values();
    let letter = '';

    for (const entry of myIterator) {

        letter += entry + ' ,';

    }

    console.log('Vowels :' + letter);
    return letter




}

findVowels('Umuzi');
