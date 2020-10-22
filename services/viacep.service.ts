
interface ViaCEPResponse {
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



export async function request(cep: string): Promise<any> {
    try {
        const result = await (await fetch('https://viacep.com.br/ws/'+cep+'/json')).json();
        let res = _formatter(result);
        return res;
    } catch (error) {
        console.log(error.message);
    }
}

function _formatter(response: any): ViaCEPResponse {
    return {
        cep: response.cep,
        logradouro: response.logradouro,
        bairro: response.bairro,
        localidade: response.localidade,
        uf: response.uf,
        ibge: response.ibge,
        gia: response.gia,
        ddd: response.ddd,
        siafi: response.siafi
    };
}
