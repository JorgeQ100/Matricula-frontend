import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarCirculacionComponent } from './verificar-circulacion.component';

describe('VerificarCirculacionComponent', () => {
  let component: VerificarCirculacionComponent;
  let fixture: ComponentFixture<VerificarCirculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarCirculacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarCirculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
