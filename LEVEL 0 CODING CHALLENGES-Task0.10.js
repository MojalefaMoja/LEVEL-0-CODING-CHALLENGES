    function textCompare(text1, text2) {
        element = new Set()
        let myIterator = element.values()
        for (let i = 0; i < text2.length; i++) {


            for (let index = 0; index < text1.length; index++) {

                if (text2[i] === text1[index]) {
                    element.add(text1[index])
                }

            }

        }

        let text = ""
        for (const entry of myIterator) {

            text += entry
            text += ","

        }

        return console.log("Common Letters:", text);

    }

    textCompare("housesss", "computeees")
