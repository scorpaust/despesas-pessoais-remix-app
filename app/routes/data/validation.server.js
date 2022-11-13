function isValidTitle(value) {
    return value && value.trim().length > 0 && value.trim().length <= 30;
}
  
function isValidAmount(value) {
    const amount = parseFloat(value);
    return !isNaN(amount) && amount > 0;
}

function isValidDate(value) {
    return value && new Date(value).getTime() < new Date().getTime();
}
  
export function validateExpenseInput(input) {
    let validationErrors = {};

    if (!isValidTitle(input.title)) {
        validationErrors.title = 'Nome inválido atribuído à despesa. Deve ter, pelo menos, 30 caracteres.'
    }

    if (!isValidAmount(input.amount)) {
        validationErrors.amount = 'Montante inválido. Tem de ser um número superior a 0.'
    }

    if (!isValidDate(input.date)) {
        validationErrors.date = 'Data inválida. Tem de ser uma data anterior à de hoje.'
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors;
    }
}