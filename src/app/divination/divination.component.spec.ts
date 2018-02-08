import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivinationComponent } from './divination.component';

describe('DivinationComponent', () => {
  let component: DivinationComponent;
  let fixture: ComponentFixture<DivinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
