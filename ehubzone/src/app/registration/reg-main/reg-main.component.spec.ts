import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegMainComponent } from './reg-main.component';

describe('RegMainComponent', () => {
  let component: RegMainComponent;
  let fixture: ComponentFixture<RegMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
