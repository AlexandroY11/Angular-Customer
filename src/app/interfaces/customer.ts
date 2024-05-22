export interface Customer {
    id? : number;
    firstName : string;
    lastName : string;
    email : string;
    country : {
        id : number;
        name: string;
    };
}
