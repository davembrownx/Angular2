import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing'
import { DeveloperService } from './developer.service';

describe('DeveloperService', () => {
  let httpTestingController:HttpTestingController = TestBed.get(HttpTestingController);
  const service: DeveloperService = TestBed.get(DeveloperService);

  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
