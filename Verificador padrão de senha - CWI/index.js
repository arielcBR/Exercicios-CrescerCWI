/*
Implemente uma função, definida como validaComplexidade(valor), que deve receber uma string e implementar algumas validações para garantir a complexidade de uma senha.
    - Deve ter entre 8 e 32 caracteres;
    - Deve ter, no mínimo, uma letra maiúscula;
    - Não deve ter caractere de pontuação, acentuação ou espaço.
    - Deve retornar 1 quando atender os pré-requisitos e 0 quando não atender.

    exemplo:
    validaComplexidade("Crescer10") => 1;
    validaComplexidade("a1234567") => 0;    
*/

const senha = "Cresce!r10";
console.log(validaComplexidade(senha));

function validaComplexidade(valor) {
    if (valor.length < 8 || valor.length > 32) return "0";
    else if (!(/[A-Z]+/.test(valor))) return "0";
    else if ((/[\W]/.test(valor) || /[\s]/.test(valor))) return "0";
    return "1";
}