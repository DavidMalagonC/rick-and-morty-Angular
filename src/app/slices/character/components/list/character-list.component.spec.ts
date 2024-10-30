import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { CharacterService } from '../../services/character.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Character } from '../../models/character.model';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let characterServiceSpy: jasmine.SpyObj<CharacterService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CharacterService', ['getCharacters']);
    await TestBed.configureTestingModule({
      declarations: [CharacterListComponent],
      providers: [{ provide: CharacterService, useValue: spy }],
    }).compileComponents();

    characterServiceSpy = TestBed.inject(CharacterService) as jasmine.SpyObj<CharacterService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
  });

  it('should display a list of characters', () => {
    const mockCharacters: Character[] = [
      {
          id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', gender: 'Male', type: '', image: '', created: '',
          origin: {
              name: '',
              url: ''
          },
          location: {
              name: '',
              url: ''
          },
          episode: [],
          url: ''
      },
    ];
    characterServiceSpy.getCharacters.and.returnValue(of({ characters: mockCharacters, pagination: { count: 1, pages: 1, next: null } }));

    component.ngOnInit();
    fixture.detectChanges();

    const characterElements = fixture.debugElement.queryAll(By.css('.character-list__item'));
    expect(characterElements.length).toBe(1);
  });

  it('should call applyFilters and reset pagination', () => {
    spyOn(component, 'loadCharacters');
    component.applyFilters();
    expect(component.currentPage).toBe(1);
    expect(component.loadCharacters).toHaveBeenCalled();
  });

});
