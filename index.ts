import {request} from './services/viacep.service.ts';

function getCEP(): any {
    return request('04455310').then((response) => {
        return response;
    }).catch((error) => {
        throw new Error(error);
    })
}

let result = await getCEP();
console.log(result);
