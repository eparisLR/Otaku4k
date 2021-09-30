import {Activity} from '../models/activity.model';
import {Fan} from '../models/fan.model';

export const activitiesMock: Activity[] = [{
  id: 1,
  texte: `C'est l'anniversaire d'Adèle!`,
  image: 'img/Anniversaire.jpg',
  date: '2019-12-29 17:38:41'
}];

export const fansMock: Fan[] = [
  {
    id: 1,
    nom: 'Durand',
    prenom: 'Jerôme',
    ville: 'Marseille',
    pays: 'France'
  },
  {
    id: 2,
    nom: 'Dupont',
    prenom: 'Yannick',
    ville: 'Nice',
    pays: 'France'
  },
  {
    id: 3,
    nom: 'Hawkins',
    prenom: 'John',
    ville: 'New-York',
    pays: 'Etats-Unis'
  }
];
