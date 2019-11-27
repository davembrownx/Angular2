import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCreateComponent } from './bio-create.component';
import { AppModule } from '../app.module';

describe('BioCreateComponent', () => {
  let component: BioCreateComponent;
  let fixture: ComponentFixture<BioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        AppModule
      ],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
