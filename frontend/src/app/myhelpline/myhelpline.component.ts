import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HelplineService } from '../service/helpline.service';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-myhelpline',
  templateUrl: './myhelpline.component.html',
  styleUrls: ['./myhelpline.component.css']
})
export class MyhelplineComponent implements OnInit, OnDestroy {

  helpForm: FormGroup;

  user: any;
  ticketId: string;
  ticketId$: Subscription;

  helpCat = [
    {id: '1', name: 'vdi'},
    {id: '2', name: 'application'},
    {id: '3', name: 'Assets'},
    {id: '4', name: 'voip'},
    {id: '5', name: 'Raise Request'}
  ];
  constructor(
    private formBuilder: FormBuilder,
    private helpService: HelplineService,
    private userService: UsersService,
  ) { }

  ngOnInit(): void {

     this.userService.getUser().subscribe( res => {
      this.user = {
        email: res.email,
        empName: `${res.firstname} ${res.lastname}`,
        empNo: res.employeeno
      }
     });
    this.helpForm = this.formBuilder.group({
      issueCat: [null, [Validators.required]],
      issueDesc: [null, Validators.required]
    });
  }

  logIssue(){
    if(!this.helpForm.valid){
      return;
    }
      this.ticketId$ = this.helpService.logHelp(this.helpForm.value, this.user).subscribe( res => {
      this.ticketId = JSON.stringify(res);
      console.log(this.ticketId);
      window.prompt(this.ticketId);

    });
      this.helpForm.reset();
  }

  ngOnDestroy(): void {
    //this.ticketId$.unsubscribe();
  }
}

