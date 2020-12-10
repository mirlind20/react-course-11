class Avtomobil {
  constructor(registracija, marka, brVrati, boja) {
    this.registracija = registracija
    this.marka = marka
    this.brVrati = brVrati
    this.boja = boja
  }

  
}

const Avto3 = new Avtomobil(
  "SK00011",
  "reno",
  "5",
  "bela"
)

const Avto4 = new Avtomobil(
  "KS222333",
  "bmw",
  "3",
  "crna"
)

console.log(Avto3) // {}

console.log(Avto4)

