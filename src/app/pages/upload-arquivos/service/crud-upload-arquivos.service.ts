import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class CrudUploadArquivosService {


constructor( private http: HttpClient) {
}

postData(acessToken:any,File:any){
//cria objeto formData
let formData =new FormData();
formData.set("file",File)
//envia esse dado para a api
const url = "https://dadc-201-83-31-214.ngrok-free.app/medias";

const headers = new HttpHeaders({
'Authorization':`Bearer ${acessToken} `});
return this.http.post(url,formData,{headers})

}
getFiles(acessToken:any){

const url = "https://dadc-201-83-31-214.ngrok-free.app/medias";
const headers = new HttpHeaders({
'Authorization':`Bearer ${acessToken} `});
return this.http.get(url,{headers})
}
loginToken(){
const urlToken = "https://dadc-201-83-31-214.ngrok-free.app/login";

return this.http.post(urlToken,'')
}
excluir(acessToken:any,_id:any){
const url = `https://dadc-201-83-31-214.ngrok-free.app/medias/${_id}`;
const headers = new HttpHeaders({
'Authorization':`Bearer ${acessToken} `});
return this.http.delete(url,{ headers })
}


}
