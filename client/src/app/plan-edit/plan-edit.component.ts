import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/index";
import {ActivatedRoute, Router} from "@angular/router";
import {PlanService} from "../shared/plan/plan.service";
import {GiphyService} from "../shared/giphy/giphy.service";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PlanListComponent} from "../plan-list/plan-list.component";

@Component({
  selector: 'app-plan-edit',
  templateUrl: './plan-edit.component.html',
  styleUrls: ['./plan-edit.component.css']
})
export class PlanEditComponent implements OnInit,OnDestroy {
  plan: any={};

  sub: Subscription;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private planService: PlanService,
              private giphyService: GiphyService,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if(id) {
        this.planService.get(id).subscribe((plan: any)=> {
          if(plan) {
            this.plan = plan;
            this.plan.href = plan._links.self.href;
            this.giphyService.get(plan.name).subscribe(url => plan.giphyUrl = url);
          }
          else {
            console.log(`plan with id '${id}'not found, returning to list`);
            this.gotoList();
          }
        })
      }
    })
  }
    ngOnDestroy() {
    this.sub.unsubscribe();
    }
  gotoList() {
    this.router.navigate(['plan-list']);
  }

  save(form: NgForm) {
    this.planService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  remove(href) {
    this.planService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));



  }

}
