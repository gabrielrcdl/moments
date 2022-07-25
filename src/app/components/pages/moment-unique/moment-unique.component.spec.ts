import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentUniqueComponent } from './moment-unique.component';

describe('MomentUniqueComponent', () => {
  let component: MomentUniqueComponent;
  let fixture: ComponentFixture<MomentUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentUniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
