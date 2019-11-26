import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bio-create',
  templateUrl: './bio-create.component.html',
  styleUrls: ['./bio-create.component.css']
})
export class BioCreateComponent implements OnInit {
  devForm = this.fb.group({
    'firstName': new FormControl('',[Validators.required]),
    'lastName' : new FormControl('',[Validators.required]),
    'favoriteLanguage': new FormControl('',[Validators.required]),
    'yearStarted': new FormControl('',[Validators.required])
  })

  get firstName(){return this.devForm.get('firstName').value}
  get lastName(){return this.devForm.get('lastName').value}
  get favoriteLanguage(){return this.devForm.get('favoriteLanguage').value}
  get yearStarted(){return this.devForm.get('yearStarted').value}

  saveDeveloper():void {
    if (this.devForm.valid){
      let dev = this.prepareSave();
      this.developerService.addDeveloper(dev);
      this.router.navigate(['/bio']);
    }
  }
  prepareSave() {
    return new Developer(0,
                          this.firstName,
                          this.lastName,
                          this.favoriteLanguage,
                          this.yearStarted );
  }

  constructor(private fb:FormBuilder, private developerService:DeveloperService,private router:Router) { }

  ngOnInit() {
  }

}
