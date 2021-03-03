import { Component, OnInit } from '@angular/core';
import {ModifyDivServiceService} from "../../services/modify-div-service.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-div-component',
  templateUrl: './div-component.component.html',
  styleUrls: ['./div-component.component.css']
})
export class DivComponentComponent implements OnInit {
  public backgroundColor: string;
  public labelText: string = "Lorem Ipsum";
  public divOpacity: number ;
  subscription: Subscription;
  constructor(private ModifyDivService:ModifyDivServiceService) {
    this.subscription = this.ModifyDivService.getBackGroundColor().subscribe(
      obj=>{
        this.backgroundColor = obj.color;
      }
    )
    console.log(this.subscription)
    this.subscription = this.ModifyDivService.getTextLabel().subscribe(
      obj=>{
        this.labelText = obj.text;
      }
    )
    this.subscription = this.ModifyDivService.getDivOpacity().subscribe(
      obj=>{
        this.divOpacity = obj.opacity;
      }
    )
  }
  
  ngOnInit(): void {
  }

}
