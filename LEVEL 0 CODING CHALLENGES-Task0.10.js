    function textCompare(text1, text2) {
        element = new Set()
        let myIterator = element.values()
        for (let i = 0; i < text2.length; i++) {


            for (let index = 0; index < text1.length; index++) {

                if (text2.includes(text1[index])) {
                    element.add(text1[index])
                }

            }

        }

        let text = ""
        for (const entry of myIterator) {

            text += entry

        }

        lines = ""

        for (let x = 0; x < text.length; x++) {
            if (x == text.length - 1) {
                lines += text[x]
            } else {
                lines += text[x] + ","
            }

        }



        console.log("Common Letters:", lines);

    }

    textCompare("housesss", "computeees")
