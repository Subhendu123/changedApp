import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListInfoComponent } from './user-list-info.component';

describe('UserListInfoComponent', () => {
  let component: UserListInfoComponent;
  let fixture: ComponentFixture<UserListInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
