import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public post = {
    title: '',
    url: '',
    content: ''
    }
  
    constructor(private dataService: DataService, private router: Router) { }
  
    ngOnInit() {
    }
  
    submit() {
    this.dataService.createOrUpdate(this.post).subscribe(f => {
      this.router.navigate(['/blog'])
    })
    }
  

}
