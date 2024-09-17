import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCodeBarreFormComponent } from './search-code-barre-form.component';

describe('SearchCodeBarreFormComponent', () => {
  let component: SearchCodeBarreFormComponent;
  let fixture: ComponentFixture<SearchCodeBarreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCodeBarreFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCodeBarreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
