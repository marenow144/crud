import { Component, OnInit } from '@angular/core';
import {PlanService} from "../shared/plan/plan.service";
import {GiphyService} from "../shared/giphy/giphy.service";

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  plans: Array<any>;
  constructor(private planService: PlanService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.planService.getAll().subscribe(data => {
      this.plans = data;
      for(const plan of this.plans) {
        this.giphyService.get(plan.name).subscribe(url =>plan.giphyUrl = url);
      }

    });
  }

}
