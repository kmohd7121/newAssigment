import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharinaggridComponent } from './charinaggrid.component';

describe('CharinaggridComponent', () => {
  let component: CharinaggridComponent;
  let fixture: ComponentFixture<CharinaggridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharinaggridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharinaggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
