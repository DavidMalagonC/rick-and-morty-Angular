import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharacterService } from './character.service';
import { Character } from '../models/character.model';

describe('CharacterService', () => {
  let service: CharacterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterService],
    });
    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve characters from API', () => {
    const mockResponse = {
      characters: [{ id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', gender: 'Male', type: '', image: '', created: '' }],
      pagination: { count: 1, pages: 1, next: null },
    };

    service.getCharacters(1).subscribe(response => {
      expect(response.characters.length).toBe(1);
      expect(response.pagination.count).toBe(1);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}?page=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should create a new character', () => {
    const newCharacter: Character = {
        id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human', type: '', gender: 'Male', image: '', created: '',
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
    };

    service.createCharacter(newCharacter).subscribe(character => {
      expect(character.name).toBe('Morty Smith');
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('POST');
    req.flush(newCharacter);
  });

});
