import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-code-barre-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './search-code-barre-form.component.html',
  styleUrl: './search-code-barre-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchCodeBarreFormComponent {
  @Output() search = new EventEmitter<string>();
}
