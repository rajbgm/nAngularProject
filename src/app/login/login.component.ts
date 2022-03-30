import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Loginform: FormGroup;

  username: string;
  password: string;
  failedLog = true;

  constructor(private Loginformbuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  createLoginForm() {
    this.Loginform = this.Loginformbuilder.group({
      txtusername: ['', Validators.required],
      txtpassword: ['', Validators.required]
    });
  }

  get txtusername() { return this.Loginform.get('txtusername'); }
  get txtpassword() { return this.Loginform.get('txtpassword'); }

  ngOnInit() {
    this.createLoginForm();
  }

  checkLogin() {
    this.username = this.txtusername.value;
    if (this.username != null) {
      this.router.navigate(['/HealthCarePortal']);
    }
  }
}
