class Kniga {
  constructor (isbn, ime, avtor, godina) {
    this.isbn = isbn;
    this.ime = ime;
    this.avtor = avtor;
    this.godina = godina;
  }

  getAge () {
    const today = new Date()
    const yearNow = today.getFullYear()
    return yearNow - this.godina
  }

  setIsbn (newIsbn) {
    this.isbn = newIsbn
  }
}

const Kniga1 = new Kniga(
  '1',
  "Zlostor i kazna",
  "Dostoevski",
  "1787"
)

Kniga1.setIsbn("111111111")


console.log(Kniga1.getAge())