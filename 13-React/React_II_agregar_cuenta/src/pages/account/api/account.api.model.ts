export interface AccountApiModel {
  id?: string;
  iban?: string;
  name: string;
  type: string;
  balance?: number;
  lastTransaction?: string;
}
