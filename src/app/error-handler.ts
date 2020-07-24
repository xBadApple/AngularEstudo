import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {

    public static handleError(error: HttpErrorResponse | any){
        let errorMessage: string;
        if (error instanceof HttpErrorResponse) {
            const body = error.error || ''
            errorMessage = `$Erro {error.status} ao tentar acessar a pagina ${error.url}: ${error.statusText} ${body}`;
        } else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}