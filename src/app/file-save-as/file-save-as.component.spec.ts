import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSaveAsComponent } from './file-save-as.component';

describe('FileSaveAsComponent', () => {
  let component: FileSaveAsComponent;
  let fixture: ComponentFixture<FileSaveAsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSaveAsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSaveAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
