 
    export interface InvoiceDetail {
        id: string;
        pCode: string;
        pname: string;
        qte: string;
        prix: string;
        invoiceHeaderID:string;
    }

    export interface InvoiceHeader { 
        id:string;
        code: string;
        date: Date;
        invoiceDetails: InvoiceDetail[];
    }
 
