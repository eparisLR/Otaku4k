import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationComponent } from './presentation.component';
import {TestModule} from '../../test/test.module';
import {AppService} from '../../app.service';
import {appServiceMock} from '../../test/app.service.mock';
import { singersMock} from '../../test/data.mock';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;
  let service: AppService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationComponent ],
      imports: [TestModule],
      providers: [{provide: AppService, useValue: appServiceMock}]
    })
    .compileComponents();
    service = TestBed.inject(AppService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should receive singers', () => {
    fixture.detectChanges();
    expect(component.singers.length).toEqual(singersMock.length);
  });
});
