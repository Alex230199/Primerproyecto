import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Formulariohalloween } from './formulariohalloween';

describe('Formulariohalloween', () => {
  let component: Formulariohalloween;
  let fixture: ComponentFixture<Formulariohalloween>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulariohalloween],
    }).compileComponents();

    fixture = TestBed.createComponent(Formulariohalloween);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
