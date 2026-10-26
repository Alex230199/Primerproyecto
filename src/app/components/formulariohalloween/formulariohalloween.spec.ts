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

  it('accepts HTTPS image URLs and local public image paths', () => {
    const imagen = component.formulario.controls.imagen;

    imagen.setValue('https://example.com/imagen.jpg');
    expect(imagen.valid).toBe(true);

    imagen.setValue('/images/banana.jpg');
    expect(imagen.valid).toBe(true);
  });

  it('rejects values that are not image URLs or local public paths', () => {
    const imagen = component.formulario.controls.imagen;

    imagen.setValue('C:\\Users\\alguien\\imagen.jpg');

    expect(imagen.hasError('imagenInvalida')).toBe(true);
  });

  it('removes only the selected object and keeps the other records', () => {
    const objetoEliminado = {
      imagen: '/images/banana.jpg',
      objeto: 'banana',
      descripcion: 'un platano',
      propietario: 'alex',
    };
    const objetoConservado = {
      imagen: '/images/batman.jpg',
      objeto: 'batman',
      descripcion: 'un superheroe',
      propietario: 'ana',
    };
    component.objetosHalloween = [objetoEliminado, objetoConservado];

    component.eliminarObjeto(objetoEliminado);

    expect(component.objetosHalloween).toEqual([objetoConservado]);
  });
});
