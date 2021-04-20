import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { LoginUser } from 'src/app/core/models/LoginUser';
import { AuthenticationService } from '../../core/data-services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  @ViewChild('password') public textbox: TextBoxComponent;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  
  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
  }

  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = 'password';
  }

  public login(): void {
    this.form.markAllAsTouched();
    let user: LoginUser = {} as any;
    user.UserName = this.form.controls.username.value;
    user.Password = this.form.controls.password.value;
    this.authenticationService.login(user);
  }
}
