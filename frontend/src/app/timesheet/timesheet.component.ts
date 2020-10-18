import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  timeForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService
    ) { }

  ngOnInit(): void {
    this.timeForm = this.formBuilder.group({
      time: [null, [Validators.required]],
      effortdate: [null, Validators.required],
      efforts: [null, Validators.required]
    });
  }

  fillTime(){
    if(!this.timeForm.valid){
      console.log("error")
      return
    }
    this.userService.postTime(this.timeForm.value).subscribe(res => {
      this.timeForm.reset();
      setTimeout(() => {
        prompt("TImesheet updated successfully");
      }, 1000);
    })

  }

}
