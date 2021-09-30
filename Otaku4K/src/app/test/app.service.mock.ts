import {of} from 'rxjs';
import {activitiesMock, fansMock} from './data.mock';

export const appServiceMock = {
  getActivities: () => of(activitiesMock),
  getFans: () => of(fansMock)
};
