import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.scss']
})
export class TakeSurveyComponent implements OnInit {
  author!: string;
  title!:string;
 
  form!: FormGroup;
 
  constructor(private route: ActivatedRoute, private user: UserService, private router: Router) { }

  ngOnInit() {
    this.author = this.route.snapshot.params['author'];
    this.title = this.route.snapshot.params['title'];
    this.user.getAllTest(this.author).subscribe(
      (resp: Question[]) => {
        for(let i = 0; i < resp.length; i++){
          if (resp[i].title === this.title) return;
        }
        this.router.navigate(['404']);
      }
    )


    this.form = new FormGroup({
      fio: new FormControl("", [Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      theme: new FormControl("", [Validators.required, Validators.minLength(6)]),
      message: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(){
    console.log(this.form.value.fio)
  }



}