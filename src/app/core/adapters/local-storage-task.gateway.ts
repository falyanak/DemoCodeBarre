import { CodeBarreGateway } from '../ports/codebarre.gateway';
import { Observable, of } from 'rxjs';
import { CodeBarre } from '../models/codebarre.model';

export class LocalStorageCodeBarreGateway extends CodeBarreGateway {
  add(codebarre: CodeBarre): Observable<CodeBarre> {
    const codebarres = this.getCodeBarres();
    const newCodeBarre = {
      id: codebarre.id,
      name: codebarre.name,
      description: codebarre.description,
      provider: codebarre.provider,
    };
    this.writeTasks([...codebarres, newCodeBarre]);
    return of(newCodeBarre);
  }

  searchById(id: string): Observable<CodeBarre[]> {
    return of(this.getCodeBarres().filter((c) => c.id == id));
  }

  private getCodeBarres(): CodeBarre[] {
    const codebarres = localStorage.getItem('codebarres');
    return codebarres ? JSON.parse(codebarres) : [];
  }

  private writeTasks(codebarres: CodeBarre[]): void {
    localStorage.setItem('codebarres', JSON.stringify(codebarres));
  }
}
