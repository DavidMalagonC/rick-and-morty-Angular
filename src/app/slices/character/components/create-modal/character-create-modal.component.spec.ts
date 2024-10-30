import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreateModalComponent } from './character-create-modal.component';

describe('CharacterCreateModalComponentComponent', () => {
  let component: CharacterCreateModalComponent;
  let fixture: ComponentFixture<CharacterCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCreateModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
