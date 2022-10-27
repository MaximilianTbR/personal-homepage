import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EigthSectionComponent } from './eigth-section.component';

describe('EigthSectionComponent', () => {
  let component: EigthSectionComponent;
  let fixture: ComponentFixture<EigthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EigthSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EigthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
