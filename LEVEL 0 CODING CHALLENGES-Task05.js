function area(sideA, sideB, sideC) {

    s = (sideA + sideB + sideC) / 2
    areaOfTriangle = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC))

    result = String(areaOfTriangle) + " sq units"

    return result

}

console.log(area(3, 4, 5));