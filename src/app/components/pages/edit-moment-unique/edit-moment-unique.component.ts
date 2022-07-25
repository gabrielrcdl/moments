import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';


@Component({
  selector: 'app-edit-moment-unique',
  templateUrl: './edit-moment-unique.component.html',
  styleUrls: ['./edit-moment-unique.component.css']
})
export class EditMomentUniqueComponent implements OnInit {
  moment!: Moment // ! garantindo que vou receber um momento (vem da interface)
  btnText: string ='Editar'

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentService.getMomentUnique(id).subscribe((item)=>{
      this.moment = item.data
    })
  }

}
