
interface Response {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}



export async function _request(cep: string): Promise<any> {
    // let result = new Response();

    try {
        const result = await fetch('https://viacep.com.br/ws/'+ '04455310' + '/json');
        console.log(result)                
    } catch (error) {
        console.log(error.message);
    }
}
