import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';
import { CodeBarreGateway } from '../../core/ports/codebarre.gateway';
import { InMemoryCodeBarreGateway } from '../../core/adapters/in-memory-codebarre.gateway';
import { CodeBarre } from '../../core/models/codebarre.model';
import { By } from '@angular/platform-browser';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let codeBarreGateway: InMemoryCodeBarreGateway;

  beforeEach(async () => {
    codeBarreGateway = new InMemoryCodeBarreGateway();

    await TestBed.configureTestingModule({
      imports: [CardListComponent],
      providers: [
        { provide: CodeBarreGateway, useValue: InMemoryCodeBarreGateway },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have any barcode', () => {
    setup([]);

    const providers = fixture.debugElement.query(By.css('.content')).nativeElement;
    expect(providers.innerHTML).not.toBeNull();
    // console.log(board.innerHTML)
    expect(providers.innerHTML.length).toBeGreaterThan(0);
    expect(providers.innerHTML).toContain(
      'Pas de fournisseur pour ce code barre ! ☝🏼'
    );

    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('Liste des fournisseurs');
  });

  function setup(codeBarres: CodeBarre[]) {
    const cbs = codeBarreGateway.withCodeBarres(codeBarres);
    fixture = TestBed.createComponent(CardListComponent);
    fixture.detectChanges();
    expect(cbs.codeBarres.length).toEqual(0);
  }

  // function getElement(matcher: string) {
  //   return fixture.nativeElement.querySelector(matcher);
  // }
});
