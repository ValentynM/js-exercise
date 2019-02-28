const a = parseFloat(prompt('Enter a value: '));
const b = parseFloat(prompt('Enter b value: '));
const c = parseFloat(prompt('Enter c value: '));

const solution = solveQuadraticEquation(a, b, c);
alert(solution);

function solveQuadraticEquation(a, b, c)
{
    let discriminant = getDiscriminant(a, b, c);
    if (discriminant > 0)
    {
        let firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
        let secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `First rational root is ${firstRoot}\n
        Second rational root is ${secondRoot}`;
    }
    else if (discriminant === 0)
    {
        let root = -b / (2 * a);
        return `Rational root is ${root}`;
    }
    else
    {
        let RootRealPart = -b / (2 * a);
        let FirstRootImaginePart = Math.sqrt(-discriminant) / (2 * a);
        let SecondRootImaginePart = -Math.sqrt(-discriminant) / (2 * a);
        return `First complex root is ${RootRealPart} + (${FirstRootImaginePart})*i\n
        Second complex root is ${RootRealPart} + (${SecondRootImaginePart})*i`;
    }
}

function getDiscriminant(a, b, c)
{
    return Math.pow(b, 2) - 4 * a * c;
}
