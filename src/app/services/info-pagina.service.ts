import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoPaginaInterface} from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
   info: InfoPaginaInterface = {};
   load = false;

  constructor(private http: HttpClient) {
    this.loadInfo();
  }

  private loadInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPaginaInterface) =>{
        this.load = true;
        this.info = resp;
      });
  }

}
