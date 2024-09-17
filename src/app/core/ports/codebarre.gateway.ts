import { Observable } from 'rxjs';
import { CodeBarre } from '../models/codebarre.model';

export abstract class CodeBarreGateway {
 // abstract retrieveAll(): Observable<CodeBarre[]>;

  abstract searchById(id :string): Observable<CodeBarre[]>;

  // abstract add(codebarre: CodeBarre): Observable<CodeBarre>;

  // abstract remove(id: string): Observable<void>;
}
