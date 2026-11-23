// Este componenete se ha realizado enteramente con IA.
//  No se trata de un ejercicio que se pusiera en clase,
//  pero quedó como prueba.
import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { Hermingo } from './hermingo'; 

describe('Hermingo', () => { 
  let component: Hermingo; 
  let fixture: ComponentFixture<Hermingo>; 

  beforeEach(async () => { 
    await TestBed.configureTestingModule({ 
      imports: [Hermingo], 
    }).compileComponents(); 

    fixture = TestBed.createComponent(Hermingo); 
    component = fixture.componentInstance; 
    await fixture.whenStable(); 
  }); 

  it('should create', () => { 
    expect(component).toBeTruthy(); 
  }); 

  it('should display Hermingo card details and image', () => { 
    const element: HTMLElement = fixture.nativeElement; 
    const image = element.querySelector('img'); 

    expect(element.textContent).toContain('Hermingo'); 
    expect(element.textContent).toContain('#318'); 
    expect(element.textContent).toContain('Mascota'); 
    expect(element.querySelector('[aria-label="Ataque: 1"]')).toBeTruthy(); 
    expect(element.querySelector('[aria-label="Defensa: 1"]')).toBeTruthy(); 
    expect(element.querySelector('button')?.textContent).toContain('EQUIPAR'); 
    expect(element.textContent).toContain('Perdido en sus ojos: Hermingo bloquea la capacidad del catalejo para espiar al jugador usuario.'); 
    expect(image?.getAttribute('src')).toBe('/images/Hermingo (1).jpg'); 
    expect(image?.getAttribute('alt')).toBe('Hermingo'); 

    const details = element.querySelector('#descripcion-hermingo') as HTMLParagraphElement; 
    const toggle = element.querySelector('.desplegable') as HTMLButtonElement; 
    expect(details.hidden).toBe(true); 
    expect(toggle.getAttribute('aria-expanded')).toBe('false'); 

    toggle.click(); 
    fixture.detectChanges(); 
    expect(details.hidden).toBe(false); 
    expect(toggle.getAttribute('aria-expanded')).toBe('true'); 

    toggle.click(); 
    fixture.detectChanges(); 
    expect(details.hidden).toBe(true); 
  }); 
}); 
