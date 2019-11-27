import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDetailsComponent } from './bio-details.component';
import { AppModule } from '../app.module';

describe('BioDetailsComponent', () => {
  let component: BioDetailsComponent;
  let fixture: ComponentFixture<BioDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        AppModule
      ],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
