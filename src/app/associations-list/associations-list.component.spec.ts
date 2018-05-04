import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsListComponent } from './associations-list.component';

describe('AssociationsListComponent', () => {
  let component: AssociationsListComponent;
  let fixture: ComponentFixture<AssociationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
