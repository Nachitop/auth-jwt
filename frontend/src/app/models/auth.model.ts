export class Auth{

    constructor(auth:boolean,accessToken:string){
        this.auth=auth;
        this.accessToken=accessToken;
    }

    auth:boolean;
    accessToken:string;
}