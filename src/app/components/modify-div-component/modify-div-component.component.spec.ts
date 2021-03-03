import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDivComponentComponent } from './modify-div-component.component';

describe('ModifyDivComponentComponent', () => {
  let component: ModifyDivComponentComponent;
  let fixture: ComponentFixture<ModifyDivComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDivComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDivComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
