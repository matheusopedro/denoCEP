export function validateCepLength(cep: string){
    const cepSize = 8;
    let cepLength = cep.length;

    if (cepLength <= cepSize) 
        return true
    else
        return false
}
