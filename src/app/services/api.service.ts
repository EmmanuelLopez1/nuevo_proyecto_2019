import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    urlApi: string = 'https://pokeapi.co/api/v2/pokemon/ditto/';


    constructor( public http: HttpClient) { 

        http.get(this.urlApi).subscribe( (resp: any) => {
            console.log('resp: ', resp);

        })
    }

}
