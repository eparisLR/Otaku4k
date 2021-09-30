import {TestBed} from '@angular/core/testing';
import {AppService} from './app.service';
import {activitiesMock, fansMock, oneFanMocked, singersMock} from './test/data.mock';
import {TestModule} from './test/test.module';
import {HttpTestingController} from '@angular/common/http/testing';
import {MatSnackBar} from '@angular/material/snack-bar';
import {snackbarMock} from './test/snackbar.mock';
import {HttpResponse} from '@angular/common/http';

describe('AppService', () => {
  let service: AppService;
  let controller: HttpTestingController;
  let snackbar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule],
      providers: [{provide: MatSnackBar, useValue: snackbarMock}]
    })
      .compileComponents();
    service = TestBed.inject(AppService);
    controller = TestBed.inject(HttpTestingController);
    snackbar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct fan', () => {
    service.getFans().subscribe((data) => {
      expect(data.length).toEqual(fansMock.length);
    });
    const req = controller.expectOne(service.fanUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(fansMock);
    controller.verify();
  });

  it('should catch an error when getting fans', () => {
    spyOn(snackbar, 'open').and.callThrough();
    service.getFans().subscribe(
      () => {},
      () => expect(snackbar.open).toHaveBeenCalled()
    );
    const req = controller.expectOne(service.fanUrl);
    expect(req.request.method).toEqual('GET');
    req.error(new ErrorEvent(''));
    controller.verify();
  });

  it('should add a fan', () => {
    service.addFan(oneFanMocked).subscribe();
    const req = controller.expectOne(service.fanUrl);
    expect(req.request.method).toEqual('POST');
    const expectedResponse = new HttpResponse({ status: 204, statusText: 'Created' });
    req.event(expectedResponse);
    controller.verify();
  });

  it('should catch an error when adding a fan', () => {
    service.addFan(oneFanMocked).subscribe(
      () => {},
      () => expect(snackbar.open).toHaveBeenCalled()
    );
    const req = controller.expectOne(service.fanUrl);
    expect(req.request.method).toEqual('POST');
    const expectedResponse = new HttpResponse({ status: 204, statusText: 'Created' });
    req.error(new ErrorEvent('test'));
    controller.verify();
  });

  it('should return correct acitivity', () => {
    service.getActivities().subscribe((data) => {
      expect(data?.length).toEqual(activitiesMock.length);
    });
    const req = controller.expectOne(service.activitiesUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(activitiesMock);
    controller.verify();
  });

  it('should catch an error when getting activities', () => {
    spyOn(snackbar, 'open').and.callThrough();
    service.getActivities().subscribe(
      () => {},
      () => expect(snackbar.open).toHaveBeenCalled()
    );
    const req = controller.expectOne(service.activitiesUrl);
    expect(req.request.method).toEqual('GET');
    req.error(new ErrorEvent(''));
    controller.verify();
  });

  it('should return correct singers', () => {
    service.getSingers().subscribe((data) => {
      expect(data.length).toEqual(singersMock.length);
    });
    const req = controller.expectOne(service.singersUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(singersMock);
    controller.verify();
  });

  it('should catch an error when getting singers', () => {
    spyOn(snackbar, 'open').and.callThrough();
    service.getSingers().subscribe(
      () => {},
      () => expect(snackbar.open).toHaveBeenCalled()
      );
    const req = controller.expectOne(service.singersUrl);
    expect(req.request.method).toEqual('GET');
    req.error(new ErrorEvent(''));
    controller.verify();
  });
});
