export class Messaggio{
    constructor(
        public idm:number,      // identificativo messaggio
        public idt:string,      // identificativo treno
        public idu:string,      // identificativo utente
        public testo:string,    // testo del messaggio
        public idd?:string)     // identificato del destinatario opzionale
        {

        }
}