const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "No se puede dividir por cero";
    }
}

function calculadora() {
    rl.question("Introduce el primer número: ", (numero1) => {
        rl.question("Introduce el segundo número: ", (numero2) => {
            rl.question(
                "Selecciona una operación:\n1- Suma\n2- Resta\n3- Multiplicación\n4- División\n",
                (operacion) => {
                    let resultado;

                    const num1 = parseFloat(numero1);
                    const num2 = parseFloat(numero2);

                    switch (operacion) {
                        case "1":
                            resultado = sumar(num1, num2);
                            break;
                        case "2":
                            resultado = restar(num1, num2);
                            break;
                        case "3":
                            resultado = multiplicar(num1, num2);
                            break;
                        case "4":
                            resultado = dividir(num1, num2);
                            break;
                        default:
                            resultado = "Operación no válida";
                            break;
                    }

                    console.log(`El resultado es: ${resultado}`);

                    rl.close();
                }
            );
        });
    });
}

calculadora();