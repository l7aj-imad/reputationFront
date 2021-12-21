import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EvaluateService} from "../../service/evaluate.service";

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {
  evaluateForm: FormGroup;
  professionnelId: number;

  constructor(private service: EvaluateService) {
    this.professionnelId = 0;
    this.evaluateForm = new FormGroup({
        price: new FormControl(null),
        time: new FormControl(null),
        quality: new FormControl(null),
        personality: new FormControl(null),
        comment: new FormControl(null),
      });
  }

  ngOnInit(): void {
    this.service.getProfessionnel().subscribe((res: number) => {
      this.professionnelId = res;

    });
  }

  onEvaluate() {
    let item = this.evaluateForm.value;
    let body = {
      id_user: this.service.getIdUser(),
      professionnelId: this.professionnelId,
      price: item.price,
      time: item.time,
      quality: item.quality,
      personality: item.personality,
      comment: item.comment,
    };
    this.service.evaluate(body).subscribe(() => {

    });
  }

  onPrice(s:number){
    return s;
  }

  onTime(s:number){
    return s;
  }

  onQuality(s:number){
    return s;
  }

  onPersonality(s:number){
    return s;
  }

}
