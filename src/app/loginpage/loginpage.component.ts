import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import {  FormControlName } from '@angular/forms';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  title = 'datavissAssignment';
  constructor(private router: Router) {}
  showPassword = false; // To track password visibility
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("value",this.form)
      alert('Success');    
      this.router.navigate(['/dashboard']); // Replace 'dashboard' with the actual route to your Dashboard component
    }
  }

  ngOnInit(): void {
  }

}
