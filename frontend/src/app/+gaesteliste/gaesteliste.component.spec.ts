import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaestelisteComponent } from './gaesteliste.component';

describe('GaestelisteComponent', () => {
  let component: GaestelisteComponent;
  let fixture: ComponentFixture<GaestelisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaestelisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaestelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
