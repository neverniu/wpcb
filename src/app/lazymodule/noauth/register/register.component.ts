import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/modelServices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form! :FormGroup;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({ 
      email:new FormControl('',Validators.required),
      password:new FormControl('')
    })
  }

  submit() {
    const {email,password} = this.form.getRawValue();
    console.log(this.form.getRawValue())  
    this.authService.SignUp(email, password).then(value=>console.log(value)).catch(err=>console.log(err));
  }

}
