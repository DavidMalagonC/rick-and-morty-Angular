import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterEditModalComponent } from './character-edit-modal.component';
import { FormsModule } from '@angular/forms';
import { Character } from '../../models/character.model';
import { By } from '@angular/platform-browser';

describe('CharacterEditModalComponent', () => {
    let component: CharacterEditModalComponent;
    let fixture: ComponentFixture<CharacterEditModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterEditModalComponent],
            imports: [FormsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterEditModalComponent);
        component = fixture.componentInstance;
        component.character = {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            type: '',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            created: '2017-11-04T18:48:46.250Z',
            origin: {
                name: 'Earth (C-137)',
                url: 'https://rickandmortyapi.com/api/location/1'
            },
            location: {
                name: 'Citadel of Ricks',
                url: 'https://rickandmortyapi.com/api/location/3'
            },
            episode: ['https://rickandmortyapi.com/api/episode/1'],
            url: 'https://rickandmortyapi.com/api/character/1'
        };
        fixture.detectChanges();
    });

    it('should emit save event with updated character on save', () => {
        spyOn(component.save, 'emit');
        component.character.name = 'Updated Name';

        const saveButton = fixture.debugElement.query(By.css('.btn-primary'));
        saveButton.triggerEventHandler('click', null);

        expect(component.save.emit).toHaveBeenCalledWith(component.character);
    });

    it('should emit close event on close button click', () => {
        spyOn(component.close, 'emit');

        const closeButton = fixture.debugElement.query(By.css('.btn-secondary'));
        closeButton.triggerEventHandler('click', null);

        expect(component.close.emit).toHaveBeenCalled();
    });
});
