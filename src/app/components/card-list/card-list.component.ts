import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Subject, switchMap, tap } from 'rxjs';
import { CodeBarreGateway } from '../../core/ports/codebarre.gateway';
import { SearchCodeBarreFormComponent } from '../search-code-barre-form/search-code-barre-form.component';
import { CardListItemComponent } from '../card-list-item/card-list-item.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { CodeBarre } from '../../core/models/codebarre.model';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [SearchCodeBarreFormComponent, CardListItemComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  private codeGateway = inject(CodeBarreGateway);

  search$$ = new Subject<string>();

  // private search$ = this.search$$.asObservable().pipe(
  //   tap((item) => console.log(`Observable : valeur id = ${item}`)),
  //   switchMap((codeBarreId) => this.taskGateway.searchById(codeBarreId))
  // );

  providers = toSignal(
    this.search$$.pipe(
      tap((item) => console.log(`toSignal : valeur id = ${item}`)),
      switchMap((codeBarreId) => this.codeGateway.searchById(codeBarreId))
    )
  );
  fournisseur!: CodeBarre;

  // providers = toSignal(this.search$);
}
