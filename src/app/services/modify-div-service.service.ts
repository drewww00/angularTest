import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModifyDivServiceService {
  private colorSubject = new Subject<any>();
  private opacitySubject = new Subject<any>();
  private textSubject = new Subject<any>();
  
  constructor() { }
  
  //SET METHODS
  changeBackGroundColor(color:string):void{
    this.colorSubject.next({color : color})
  }
  changeTextLabel(text:string):void{
    this.textSubject.next({text : text})
    }
  changeDivOpacity(opacity:number):void{
    this.opacitySubject.next({opacity : opacity})
  }

  //GET METHODS
  getBackGroundColor(): Observable<any> {
    return this.colorSubject.asObservable();
  } 
  getTextLabel(): Observable<any> {
    return this.textSubject.asObservable();
  } 
  getDivOpacity(): Observable<any> {
    return this.opacitySubject.asObservable();
  } 

}
