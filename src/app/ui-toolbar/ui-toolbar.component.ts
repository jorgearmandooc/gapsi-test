import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.css']
})
export class UiToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

	restart(){
		this.router.navigate(['']);
	}

}
