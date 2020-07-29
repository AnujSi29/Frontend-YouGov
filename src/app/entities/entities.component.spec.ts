import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesComponent } from './entities.component';
import { MatCardModule } from '@angular/material/card';
import { EntitiesService } from './entities.service';

describe('EntitiesComponent', () => {
  let component: EntitiesComponent;
  let fixture: ComponentFixture<EntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [EntitiesComponent],
      providers: [
        {
          provide: EntitiesService,
          useValue: {
            get: () => {},
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
