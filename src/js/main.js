import { PasswordGenerator } from 'genpw';
import { u } from 'umbrellajs';

const pw = new PasswordGenerator();

u('#theBestPassword').text(pw.generate(7));
