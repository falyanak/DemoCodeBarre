import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CodeBarre } from '../../core/models/codebarre.model';

@Component({
  selector: 'app-card-list-item',
  standalone: true,
  imports: [],
  templateUrl: './card-list-item.component.html',
  styleUrl: './card-list-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListItemComponent {
  @Input({ required: true }) provider!: CodeBarre;
}
