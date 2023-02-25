export class GroupExpenses {
  title;
  partialValue;
  amount;
  #numberOfParticipants;

  constructor(title, numberOfParticipants, amount) {
    this.title = title;
    this.#numberOfParticipants = numberOfParticipants;
    this.amount = amount;
    this.partialValue = (amount / numberOfParticipants).toFixed(2);
  }
}
