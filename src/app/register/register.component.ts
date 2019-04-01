import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import {AllService} from '../all.service'
//import {Md5} from 'ts-md5/dist/md5';
import { environment } from '../../environments/environment'

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  regName = {
    fullname: "",
    email: "",
    mobile: "8181851703",
    password: "",
    //cpassword:''
  };
  //md5 = new Md5();
  constructor(private _ser:AllService) {}

  ngOnInit() {}

  register(data) {
    let pwd = this.hash(data['password'],environment.salt);
    let tempData = {
      'fullname':data.fullname,
      'email':data.email,
      'mobile':data.mobile,
      'password': pwd}
    this._ser.register(tempData).subscribe((res)=>{
      console.log(res);
      data.reset();
    })

  }
  show() {
    //console.log($(this));
     if ($('#icon').hasClass("fa-eye")) {
       $("#pwd").attr("type", "text");
       $('#icon').removeClass("fa-eye");
       $('#icon').addClass("fa-eye-slash")
     } else {
       $("#pwd").attr("type", "password");
       $('#icon').removeClass("fa-eye-slash")
       $('#icon').addClass("fa-eye");
     }
  }
  // show2() {
  //   //console.log($(this));
  //    if ($('#icon_1').hasClass("fa-eye")) {
  //      $("#pwd_1").attr("type", "text");
  //      $('#icon_1').removeClass("fa-eye");
  //      $('#icon_1').addClass("fa-eye-slash")
  //    } else {
  //      $("#pwd_1").attr("type", "password");
  //      $('#icon_1').removeClass("fa-eye-slash")
  //      $('#icon_1').addClass("fa-eye");
  //    }
  // }


  hash(value:string,key:string){
    let str = "";
    let j=0;
    for(let i= 0 ; i<value.length;i++){
      if(i>key.length){
        j=0
      }
      str +=value[i]+key[j++]
    }
    return str;  // anil1234 gopal04thakur
    //agnoipla1l
  }
}
