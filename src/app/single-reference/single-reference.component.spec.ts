import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleReferenceComponent } from './single-reference.component';

describe('SingleReferenceComponent', () => {
  let component: SingleReferenceComponent;
  let fixture: ComponentFixture<SingleReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
