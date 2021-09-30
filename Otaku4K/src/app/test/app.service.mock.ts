import {of} from 'rxjs';
import {activitiesMock, fansMock, singersMock} from './data.mock';
import { HttpResponse} from '@angular/common/http';

export const appServiceMock = {
  getActivities: () => of(activitiesMock),
  getFans: () => of(fansMock),
  getSingers: () => of(singersMock),
  addFan: () => of('')
};
