import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { CreateService } from './create.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Contact } from './contact';
import { AppMaterialModule } from '../app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let createService: CreateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppMaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [ CreateComponent ],
      providers: [ CreateService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    createService = fixture.debugElement.injector.get(CreateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a newContact contact`, async(() => {
    expect(component.newContact instanceof Contact).toBeTruthy();
  }));

  it('should display "Create Contact" in h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Create Contact');
  }));

  it('should add a contact', async(() => {
    spyOn(createService, 'addContact');
    component.addContact();
    expect(createService.addContact).toHaveBeenCalled();
  }));

  it('should remove a contact', async(() => {
    spyOn(createService, 'deleteContact');
    component.deleteContact(1);
    expect(createService.deleteContact).toHaveBeenCalled();
  }));
});
