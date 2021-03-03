import { Component, OnInit } from '@angular/core';
import {ModifyDivServiceService} from "../../services/modify-div-service.service";
@Component({
  selector: 'app-modify-div-component',
  templateUrl: './modify-div-component.component.html',
  styleUrls: ['./modify-div-component.component.css']
})
export class ModifyDivComponentComponent implements OnInit {

  constructor(private ModifyDivService: ModifyDivServiceService) { }

  ngOnInit(): void {
  }

  //SET METHODS
  changeBackGroundColor(color:string):void{
    this.ModifyDivService.changeBackGroundColor(color)
  }
  changeTextLabel(text:string):void{
    this.ModifyDivService.changeTextLabel(text)
  }
  changeDivOpacity(opacity:number):void{
    this.ModifyDivService.changeDivOpacity(opacity)
  }
  

}
