import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';
import { MessageService } from 'src/app/services/message.service';
import { Moment } from 'src/app/Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moment-unique',
  templateUrl: './moment-unique.component.html',
  styleUrls: ['./moment-unique.component.css']
})
export class MomentUniqueComponent implements OnInit {

  momentUnique?: Moment;
  baseApiUrl = environment.baseApiUrl

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
    ){}

  ngOnInit(): void {
     
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.momentService
    .getMomentUnique(id)
    .subscribe((item)=>(this.momentUnique = item.data))
  }

 async removeHandler(id: number){
    await this.momentService.removeMoment(id).subscribe()

    this.messageService.add("Momento exlcuído com sucesso!")

    this.router.navigate(['/'])
  }

}
