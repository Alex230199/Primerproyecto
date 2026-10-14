import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa las utilidades para crear y probar componentes Angular.
import { Hermingo } from './hermingo'; // Importa el componente que se comprobará.

describe('Hermingo', () => { // Agrupa las pruebas relacionadas con el componente Hermingo.
  let component: Hermingo; // Declara una variable para guardar la instancia del componente.
  let fixture: ComponentFixture<Hermingo>; // Declara el entorno que crea y renderiza el componente en la prueba.

  beforeEach(async () => { // Prepara una instancia nueva antes de ejecutar cada prueba.
    await TestBed.configureTestingModule({ // Configura el módulo de pruebas de Angular.
      imports: [Hermingo], // Añade el componente standalone al módulo de pruebas.
    }).compileComponents(); // Compila el componente y su plantilla antes de crear la instancia.

    fixture = TestBed.createComponent(Hermingo); // Crea el entorno de prueba para Hermingo.
    component = fixture.componentInstance; // Guarda la instancia de Hermingo creada.
    await fixture.whenStable(); // Espera a que Angular termine las actualizaciones pendientes.
  }); // Termina la preparación común de las pruebas.

  it('should create', () => { // Comprueba que Angular pueda crear el componente.
    expect(component).toBeTruthy(); // Verifica que la instancia exista y no sea nula.
  }); // Termina la prueba de creación.

  it('should display Hermingo card details and image', () => { // Comprueba el contenido visible y la imagen de la tarjeta.
    const element: HTMLElement = fixture.nativeElement; // Obtiene el elemento HTML raíz renderizado por la prueba.
    const image = element.querySelector('img'); // Busca la imagen del animal dentro del componente.

    expect(element.textContent).toContain('Hermingo'); // Verifica que se muestre el nombre del personaje.
    expect(element.textContent).toContain('#318'); // Verifica que se muestre el número identificador.
    expect(element.textContent).toContain('Mascota'); // Verifica que se muestre la clase del personaje.
    expect(element.querySelector('[aria-label="Ataque: 1"]')).toBeTruthy(); // Verifica que el ataque tenga valor 1.
    expect(element.querySelector('[aria-label="Defensa: 1"]')).toBeTruthy(); // Verifica que la defensa tenga valor 1.
    expect(element.querySelector('button')?.textContent).toContain('EQUIPAR'); // Verifica que aparezca el botón sin comprobar ninguna acción.
    expect(element.textContent).toContain('Perdido en sus ojos: Hermingo bloquea la capacidad del catalejo para espiar al jugador usuario.'); // Verifica el texto descriptivo completo.
    expect(image?.getAttribute('src')).toBe('/images/Hermingo (1).jpg'); // Verifica que la imagen use la ruta correcta.
    expect(image?.getAttribute('alt')).toBe('Hermingo'); // Verifica que la imagen tenga un texto alternativo descriptivo.

    const details = element.querySelector('#descripcion-hermingo') as HTMLParagraphElement; // Obtiene la descripción para comprobar su estado visible.
    const toggle = element.querySelector('.desplegable') as HTMLButtonElement; // Obtiene la flecha que controla el desplegable.
    expect(details.hidden).toBe(true); // Comprueba que la descripción empiece oculta.
    expect(toggle.getAttribute('aria-expanded')).toBe('false'); // Comprueba que el control indique el estado cerrado.

    toggle.click(); // Pulsa la flecha para desplegar la descripción.
    fixture.detectChanges(); // Actualiza la plantilla tras cambiar el estado del componente.
    expect(details.hidden).toBe(false); // Comprueba que la descripción ahora esté visible.
    expect(toggle.getAttribute('aria-expanded')).toBe('true'); // Comprueba que el control indique el estado abierto.

    toggle.click(); // Pulsa de nuevo la flecha para ocultar la descripción.
    fixture.detectChanges(); // Actualiza la plantilla tras cerrar el desplegable.
    expect(details.hidden).toBe(true); // Comprueba que la descripción vuelva a quedar oculta.
  }); // Termina la prueba del contenido de la tarjeta.
}); // Termina el grupo de pruebas de Hermingo.
