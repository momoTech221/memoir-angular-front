import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImpressionDataService {
  extraitData: any;
  constructor() { }

  setData(data:any){
    this.extraitData = data;
  }

  getData(){
    return this.extraitData;
  }
}
