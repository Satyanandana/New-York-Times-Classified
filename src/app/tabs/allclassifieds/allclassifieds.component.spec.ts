import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllclassifiedsComponent } from './allclassifieds.component';

describe('AllclassifiedsComponent', () => {
  let component: AllclassifiedsComponent;
  let fixture: ComponentFixture<AllclassifiedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllclassifiedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllclassifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
