import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTransactionCompComponent } from './last-transaction-comp.component';

describe('LastTransactionCompComponent', () => {
  let component: LastTransactionCompComponent;
  let fixture: ComponentFixture<LastTransactionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastTransactionCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastTransactionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
