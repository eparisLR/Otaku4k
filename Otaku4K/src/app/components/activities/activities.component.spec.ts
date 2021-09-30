import {ComponentFixture, TestBed} from '@angular/core/testing';

import { ActivitiesComponent } from './activities.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppService} from '../../app.service';
import {appServiceMock} from '../../test/app.service.mock';
import {activitiesMock} from '../../test/data.mock';
import {of} from 'rxjs';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ActivitiesComponent', () => {
  let component: ActivitiesComponent;
  let fixture: ComponentFixture<ActivitiesComponent>;
  let service: AppService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesComponent ],
      imports: [],
      providers: [{
        provide: AppService, useValue: appServiceMock
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    service = TestBed.inject(AppService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    component = fixture.componentInstance;
    // service.getActivities = jasmine.createSpy().and.returnValue(of(activitiesMock));
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should receive activities', () => {
    fixture.detectChanges();
    expect(component.activities?.length).toEqual(activitiesMock.length);
  });

  it('should not display activity', () => {
    spyOn(service, 'getActivities').and.returnValue(of(null));
    fixture.detectChanges();
    const p = fixture.debugElement.nativeElement.querySelector('[data-tu="noactivity"]');
    expect(p.textContent).toBeTruthy();
  });

});
