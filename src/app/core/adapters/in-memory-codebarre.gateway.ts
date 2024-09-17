import { Observable, of, tap } from 'rxjs';
import { CodeBarreGateway } from '../ports/codebarre.gateway';
import { CodeBarre } from '../models/codebarre.model';
import { StubCodeBarreBuilder } from '../models/builders/codebarre.builder';

export class InMemoryCodeBarreGateway extends CodeBarreGateway {
  codeBarres: CodeBarre[] = [];

  constructor() {
    super();
    this.codeBarres.push(
      new StubCodeBarreBuilder()
        .withId('1')
        .withName('Produit 1')
        .withDescription('Description produit 1')
        .withProvider('Provider 1')
        .build(),
      new StubCodeBarreBuilder()
        .withId('2')
        .withName('Produit 2')
        .withDescription('Description produit 2')
        .withProvider('Provider 2')
        .build(),
      new StubCodeBarreBuilder()
        .withId('3')
        .withName('Produit 3')
        .withDescription('Description produit 3')
        .withProvider('Provider 3')
        .build(),
        new StubCodeBarreBuilder()
        .withId('3')
        .withName('Produit 3')
        .withDescription('Description produit 3')
        .withProvider('Provider 4')
        .build()
    );

    console.log(this.codeBarres);
  }

  withCodeBarres(codebarres: CodeBarre[]): InMemoryCodeBarreGateway {
    console.log('dans withCodeBarres');
    this.codeBarres = codebarres;
    return this;
  }

  override searchById(id: string): Observable<CodeBarre[]> {
    const filtered = this.codeBarres.filter((cb) => cb.id == id);
    console.log(`taille du tableau ${filtered.length}`);
    const o = of(filtered);
    //console.log(o.pipe(tap(t=>console.log(t.length))));
    return o;
  }
}
