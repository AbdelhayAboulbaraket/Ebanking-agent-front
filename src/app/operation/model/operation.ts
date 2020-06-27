import { Currency } from 'src/app/shared/models/currency';

export class Operation {
  id: number;
  compte: Account;
  date: Date;
  sommeEspece: number;
  sommeCompte: number;
  devise: Currency;
}
