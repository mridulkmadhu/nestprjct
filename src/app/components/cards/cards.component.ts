import { MoreDetailsComponent } from './../../pages/more-details/more-details.component';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  constructor(private api:ApiService){}
  recipes:any=[]


  ngOnInit(){
    this.api.getData().subscribe((data:any) => {this.recipes=data;})

  }
  }
