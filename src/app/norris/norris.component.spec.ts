import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorrisComponent } from './norris.component';

describe('NorrisComponent', () => {
  let component: NorrisComponent;
  let fixture: ComponentFixture<NorrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NorrisComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
