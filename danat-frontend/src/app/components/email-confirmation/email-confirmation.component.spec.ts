import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailConfirmationComponent } from './email-confirmation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmailConfirmationComponent', () => {
  let component: EmailConfirmationComponent;
  let fixture: ComponentFixture<EmailConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailConfirmationComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display confirmation message', () => {
    component.message = 'Registration successful!';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Registration successful!');
  });

  it('should navigate to home on button click', () => {
    spyOn(component, 'goToHome');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.goToHome).toHaveBeenCalled();
  });
});