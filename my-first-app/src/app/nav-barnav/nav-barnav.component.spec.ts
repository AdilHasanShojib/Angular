import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarnavComponent } from './nav-barnav.component';

describe('NavBarnavComponent', () => {
  let component: NavBarnavComponent;
  let fixture: ComponentFixture<NavBarnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarnavComponent]
    });
    fixture = TestBed.createComponent(NavBarnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
