import { TestBed } from '@angular/core/testing';

import { Student1Service } from './student1.service';

describe('Student1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Student1Service = TestBed.get(Student1Service);
    expect(service).toBeTruthy();
  });
});
