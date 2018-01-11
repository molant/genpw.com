import { PasswordGenerator } from 'genpw';
import { u } from 'umbrellajs';
import { ready, googleAnalytics } from './miscfunctions';

googleAnalytics('UA-84274722-1');

ready(() => {
  u('#theBestPassword').text(new PasswordGenerator().generate(7));
});
