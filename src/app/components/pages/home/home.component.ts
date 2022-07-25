import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent implements OnInit {
  allMoments: Moment[] = []; // Pegar os momentos que vem do banco
  moments: Moment[] = []; // Filtrar/buscar um momento
  baseApiUrl = environment.baseApiUrl;
  search: string = '';


  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString();
      });
      this.allMoments = data;
      this.moments = data;
    });
  }
  

 // Filtrar um momento na busca
  searchMoment(event: Event): void{
      const target = event.target as HTMLInputElement
      const value = target.value

      this.moments = this.allMoments.filter((moment) =>{
         return moment.title.toLowerCase().includes(value)
      })
  }
}
