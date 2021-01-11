import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturasListItemComponent } from './maturas-list-item.component';

describe('MaturasListItemComponent', () => {
  let component: MaturasListItemComponent;
  let fixture: ComponentFixture<MaturasListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaturasListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaturasListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
