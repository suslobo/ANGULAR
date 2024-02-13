import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkeaComponent } from './ikea.component';

describe('IkeaComponent', () => {
  let component: IkeaComponent;
  let fixture: ComponentFixture<IkeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IkeaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IkeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
