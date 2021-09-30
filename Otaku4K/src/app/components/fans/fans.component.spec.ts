import {ComponentFixture, TestBed} from '@angular/core/testing';

import { FansComponent } from './fans.component';
import {AppService} from '../../app.service';
import {appServiceMock} from '../../test/app.service.mock';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestModule} from '../../test/test.module';
import {fansMock} from '../../test/data.mock';

describe('FansComponent', () => {
  let component: FansComponent;
  let fixture: ComponentFixture<FansComponent>;
  let service: AppService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FansComponent],
      imports: [TestModule],
      providers: [{
        provide: AppService, useValue: appServiceMock
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    service = TestBed.inject(AppService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FansComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should receive fans', () => {
    fixture.detectChanges();
    expect(component.fans.length).toEqual(fansMock.length);
  });

  it('should add a fan', () => {
    const update = spyOn(component, 'receiveFans').and.callThrough();
    const add = spyOn(service, 'addFan').and.callThrough();
    component.form.controls.nom.setValue('oui');
    component.form.controls.prenom.setValue('oui');
    component.form.controls.ville.setValue('oui');
    component.form.controls.pays.setValue('oui');

    fixture.detectChanges();
    component.addFan();

    expect(update).toHaveBeenCalled();
    expect(add).toHaveBeenCalled();

  });

});
