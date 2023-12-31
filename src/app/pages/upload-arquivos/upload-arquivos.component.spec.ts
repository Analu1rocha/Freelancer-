import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadArquivosComponent } from './upload-arquivos.component';

describe('UploadArquivosComponent', () => {
  let component: UploadArquivosComponent;
  let fixture: ComponentFixture<UploadArquivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadArquivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadArquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
