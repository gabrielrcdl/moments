import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-edit-moment-unique',
  templateUrl: './edit-moment-unique.component.html',
  styleUrls: ['./edit-moment-unique.component.css'],
})
export class EditMomentUniqueComponent implements OnInit {
  moment!: Moment; // ! garantindo que vou receber um momento (vem da interface)
  btnText: string = 'Editar';

  constructor(
    private momentService: MomentService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMomentUnique(id).subscribe((item) => {
      this.moment = item.data;
    });
  }

  async editHandler(momentData: Moment) {
    const id = this.moment.id;
    const formData = new FormData();

    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if (momentData.image) {
      formData.append('image', momentData.image);
    }

    await this.momentService.updateMoment(id!, formData).subscribe();

    this.messageService.add(`Moment ${id} foi atualizado com sucesso!`);

    this.router.navigate(['/']);
  }
}
