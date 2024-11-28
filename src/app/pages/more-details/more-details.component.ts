import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, RouterEvent, RouterLink } from '@angular/router';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-more-details',
  standalone: true,
  imports: [],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  constructor(public api: ApiService,private route: ActivatedRoute) {}
  item: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.api.getDataById(id).subscribe((data:any)=> {
      this.item = data;
      console.log(this.item);
    });
  }
}
