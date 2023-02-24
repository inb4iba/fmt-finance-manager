export class FinancialTransaction {
  description;
  value;

  constructor(description, value) {
    this.description = description;
    this.value = Number(value);
  }
}
