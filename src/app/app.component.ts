import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_app';

  name: string = ''
  lastname: string  = ''
  username: string  = ''
  phonenumber: string = ''
  adress: string = ''
  complement: string = ''
  password: string = ''
  confirmPassword: string = ''

  constructor(
    private dialog: MatDialog

  ){}

  submit(): void{
    console.log(`name = ${this.name}`)
    console.log(`lastname = ${this.lastname}`)
    console.log(`username = ${this.username}`)
    console.log(`phoneNumber = ${this.phonenumber}`)
    console.log(`adress = ${this.adress}`)
    console.log(`complement = ${this.complement}`)
    console.log(`password = ${this.password}`)
    console.log(`confirPassword = ${this.confirmPassword}`)
  }


  showDialog(): void {
    let ref = this.dialog.open(DialogComponent)
    ref.componentInstance.name = this.name
    ref.componentInstance.lastname = this.lastname
    ref.componentInstance.username = this.username
    ref.componentInstance.phonenumber = this.phonenumber
    ref.componentInstance.adress = this.adress
    ref.componentInstance.password = this.password
    ref.componentInstance.confirmPassword = this.confirmPassword
   }
 
}