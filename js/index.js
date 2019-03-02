const a = parseFloat(prompt('Enter a value: '));
const b = parseFloat(prompt('Enter b value: '));
const c = parseFloat(prompt('Enter c value: '));

const solution = solveQuadraticEquation(a, b, c);
alert(solution);

function solveQuadraticEquation(a, b, c) {
    const discriminant = getDiscriminant(a, b, c);
    if (discriminant > 0) {
        const firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
        const secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `First rational root is ${firstRoot}\n
        Second rational root is ${secondRoot}`;
    }
    else if (discriminant === 0) {
        const root = -b / (2 * a);
        return `Rational root is ${root}`;
    }
    else {
        const RootRealPart = -b / (2 * a);
        const RootImaginePart = Math.sqrt(-discriminant) / (2 * a);
        return `First complex root is ${RootRealPart} + ${RootImaginePart} * i\n
        Second complex root is ${RootRealPart} - ${RootImaginePart} * i`;
    }
}

function getDiscriminant(a, b, c) {
    return b ** 2 - 4 * a * c;
}
