import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMomentUniqueComponent } from './edit-moment-unique.component';

describe('EditMomentUniqueComponent', () => {
  let component: EditMomentUniqueComponent;
  let fixture: ComponentFixture<EditMomentUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMomentUniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMomentUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
