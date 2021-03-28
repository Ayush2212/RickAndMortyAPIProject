import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import axios from 'axios';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  character;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(par =>{
      if(par.id) {
        axios.get(`https://rickandmortyapi.com/api/character/${par.id}`)
        .then(res => {
          this.character = (res.data);
          console.log(this.character);
        })
        .catch(err => {
          console.log(err);
        })
      }
    })
  }

}
