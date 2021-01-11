import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturasListComponent } from './maturas-list.component';

describe('MaturasListComponent', () => {
  let component: MaturasListComponent;
  let fixture: ComponentFixture<MaturasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaturasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaturasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
