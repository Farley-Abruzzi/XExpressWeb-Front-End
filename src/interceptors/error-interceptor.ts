// import { Injectable } from "@angular/core";
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { Observable, throwError} from "rxjs";
// import { catchError } from 'rxjs/operators';
 
 
// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor{
  
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
//         return next.handle(req)
//             .pipe(
//                 catchError(error => {
//                     let errorObj = error;
//                     if(!errorObj.status ){
//                         errorObj = JSON.parse(errorObj.error);   
//                     }
//                     if(errorObj.status){
//                         errorObj = errorObj.error;
//                     }
//                     console.log("Erro detectado pelo Inteceptor:");
//                     console.log(errorObj);
                    
//                     return throwError(errorObj);
//                 })) as any;
//         }
  
// } 
 
// export const ErrorInterceptorProvider = {
//     provide: HTTP_INTERCEPTORS,
//     useClass: ErrorInterceptor,
//     multi: true,
// };