import { Component, OnInit } from '@angular/core';
import { PoliciesService } from 'src/app/service/policies.service';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {

  policyData: any
  constructor(
    private policyService: PoliciesService
  ) { }

  ngOnInit(): void {

    this.policyService.viewPolicy().subscribe( res =>{
      console.log(res);

      this.policyData = res;
      console.log(this.policyData)
    })
  }

}
