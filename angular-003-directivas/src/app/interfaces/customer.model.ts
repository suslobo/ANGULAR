export interface Customer {
    id: number;
    nif: string;
    firstName: string;
    email: string;
    birthday: Date;
    active: boolean;
    salary?: number; // la ? indica opcional, puede o no tener este atributo
}