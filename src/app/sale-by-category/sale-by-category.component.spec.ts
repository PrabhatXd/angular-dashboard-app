import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleByCategoryComponent } from './sale-by-category.component';

describe('SaleByCategoryComponent', () => {
  let component: SaleByCategoryComponent;
  let fixture: ComponentFixture<SaleByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleByCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
