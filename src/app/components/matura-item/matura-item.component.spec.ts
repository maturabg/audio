import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturaItemComponent } from './matura-item.component';

describe('MaturaItemComponent', () => {
  let component: MaturaItemComponent;
  let fixture: ComponentFixture<MaturaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaturaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaturaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
