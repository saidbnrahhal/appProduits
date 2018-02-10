import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProduitComponentComponent } from './form-produit-component.component';

describe('FormProduitComponentComponent', () => {
  let component: FormProduitComponentComponent;
  let fixture: ComponentFixture<FormProduitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProduitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProduitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
