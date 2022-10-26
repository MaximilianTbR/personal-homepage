import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthSectionComponent } from './fourth-section.component';

describe('FourthSectionComponent', () => {
  let component: FourthSectionComponent;
  let fixture: ComponentFixture<FourthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
