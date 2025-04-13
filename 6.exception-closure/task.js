function parseCount(item) {
    if (isNaN(Number.parseFloat(item))) {
        throw new Error("Невалидное значение")

    } else {
        return Number.parseFloat(item)
    }
}


function validateCount(value) {
    try {
        return parseCount(value)
    } catch (Error) {
        return Error
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a,
            this.b = b,
            this.c = c


    }



    get perimeter() {
        let P = this.a + this.b + this.c
        return P
    }

    get area() {
        let S = Math.sqrt(P * (P - this.a) * (P - this.b) * (P - this.c))
        return S.toFixed(3)
    }


}

