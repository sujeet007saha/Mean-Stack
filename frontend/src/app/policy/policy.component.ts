import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PoliciesService } from '../service/policies.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  preview: string;
  form: FormGroup;
  percentDone: any = 0;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private policyService: PoliciesService) {

  }


  ngOnInit(): void {
    // Reactive Form
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
  }

  uploadFile(event) {
    // const file = (event.target as HTMLInputElement).files[0];
    // this.form.patchValue({
    //   avatar: file
    // });
    // this.form.get('avatar').updateValueAndValidity()

    const file = event.target.files[0];
    if(event.target.files.length > 0){

      this.form.patchValue({
        avatar: file
      });
      this.form.get('avatar').updateValueAndValidity();
    }

    console.log(this.form.value)
    console.log(`${this.form.value.name} ${this.form.value.avatar}`)
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    //reader.readAsDataURL(file)
  }

  submitForm() {
    // this.form.value.name,
      //this.form.value.avatar
      const formData = new FormData();
      formData.append('name', this.form.value.name);
      formData.append('avatar', this.form.value.avatar);

      console.log(formData);
    this.policyService.addPolicy(formData).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.percentDone = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.percentDone}%`);
          break;
        case HttpEventType.Response:
          console.log('Policy successfully created!', event.body);
          this.percentDone = false;
      }
    });
  }


  }
