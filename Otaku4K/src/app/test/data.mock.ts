import {Activity} from '../models/activity.model';
import {Fan} from '../models/fan.model';
import {Singer} from '../models/singer.model';

export const activitiesMock: Activity[] = [{
  id: 1,
  texte: `C'est l'anniversaire d'Adèle!`,
  image: 'img/Anniversaire.jpg',
  date: '2019-12-29 17:38:41'
}];

export const fansMock: Fan[] = [{
  id: 1,
  nom: 'Durand',
  prenom: 'Jerôme',
  ville: 'Marseille',
  pays: 'France'
}];

export const singersMock: Singer[] = [{
  id: 1,
  nom: 'Nagasaki',
  prenom: 'Tetsuo',
  alias: 'Goku',
  role: [
    'chant'
  ],
  presentation: 'Je suis un vrai fan de tartiflette, je pourrais en manger 100!',
  image: 'img/Goku.jpg'
}];

export const oneFanMocked: Fan = {
  id: 1,
  nom: 'Durand',
  prenom: 'Jerôme',
  ville: 'Marseille',
  pays: 'France'
};
