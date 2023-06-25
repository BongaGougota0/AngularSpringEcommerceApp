import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefooterComponent } from './pagefooter.component';

describe('PagefooterComponent', () => {
  let component: PagefooterComponent;
  let fixture: ComponentFixture<PagefooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagefooterComponent]
    });
    fixture = TestBed.createComponent(PagefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
