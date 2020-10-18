import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Learning } from '../model/learning';
import { LearningService } from '../service/learning.service';

@Component({
  selector: 'app-mylearning',
  templateUrl: './mylearning.component.html',
  styleUrls: ['./mylearning.component.css']
})
export class MylearningComponent implements OnInit, OnDestroy {

  learningDataSub$: Subscription;
  learningData: Learning;

  constructor(private learningService: LearningService) { }

  ngOnInit(): void {
    this.learningDataSub$ = this.learningService.getLearning().subscribe( res => {
      this.learningData = res;
    });
  }

  ngOnDestroy(): void{
    this.learningDataSub$.unsubscribe();
  }

}
