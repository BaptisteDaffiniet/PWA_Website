import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-norris',
  templateUrl: './norris.component.html',
  styleUrls: ['./norris.component.css']
})
export class NorrisComponent {
  joke: any;

  constructor(private data: DataService) {

  }

  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      this.joke = res;
    })
  }
}
