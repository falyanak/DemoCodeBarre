import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureComponent } from './temperature.component';

describe('TemperatureComponent', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have the 'Hello, angular-starter' title`, () => {
    const fixture = TestBed.createComponent(TemperatureComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hello, angular-starter');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TemperatureComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, angular-starter'
    );
  });

  it('[10, 40, 60] degrees should be converted to  [50, 104, 140 ] farhenheit', () => {
    const fixture = TestBed.createComponent(TemperatureComponent);
    const app = fixture.componentInstance;
    expect(app.convertirListeCelsiusEnFarhenheit([10, 40, 60])).toMatchObject([
      50, 104, 140,
    ]);
  });
});
