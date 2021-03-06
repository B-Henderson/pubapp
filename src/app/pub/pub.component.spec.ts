import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubComponent } from './pub.component';

describe('PubComponent', () => {
  let component: PubComponent;
  let fixture: ComponentFixture<PubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
