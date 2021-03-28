import { Component, OnInit , Input} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  characters = [];
  infoPages;
  numobj;
  page: number = 1;
  @Input() query;
  async ngOnInit() {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${this.page}`);
    this.characters.push(...res.data.results);
    this.infoPages = res.data.info.pages;
    this.numobj = []
    for(var i = 1; i <= Number(this.infoPages); i++) {
      this.numobj[i-1] = i;
    }
  }

  handleQuery() {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${this.query}&status=alive`)
    .then(res => {
      this.characters.length = 0;
      this.characters.push(...res.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }

  async handlePageClick(i) {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`);
    this.characters.length = 0;
    this.characters.push(...res.data.results);
  }

}
