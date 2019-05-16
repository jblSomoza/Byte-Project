import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductosComponent } from './sub-productos.component';

describe('SubProductosComponent', () => {
  let component: SubProductosComponent;
  let fixture: ComponentFixture<SubProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
