var data;

export default class Credential{

    constructor(access){
        console.log(access)
        this.data = access
    }

    getData(){

        return this.data

    }

}