b = 5

null
undefined
NaN
// povik na funkcijata

let zbir = soberi(5, 10)

alert(zbir)
console.log(zbir)

let niza = [1, 2, 3, 4, 5]

niza[niza.length - 1] = "nova"

for (i = 0; i < niza.length; i++) {
  niza[i] = niza[i] + 1 // niza[i]++ // niza[i] += 1
}


const novaNiza = niza.map(
  // callback
  (el, index) => {
    if (index === 4) {
      return el + 2
    } 
    return el + 1
  }
)

const rez = [1, 2, "test", 3, 5, "vezba"].filter(
  (el) => {
    if (isNaN(el)) {
      return el
    }
  }
  // implicit return (el) => (isNaN(el))
)

const obj = {
  key1: value1,
  key2: value2,
  key3: value3
}

const Kocho = {
  pol: "maski",
  vozrast: "27",
  visina: "175",
  tezina: "75"
}

Kocho.pol === Kocho["pol"] // maski

let n1 = ["jabolko", "banana"]

let n2 = ["portokal", "mandarina"]

console.log( [...n1, ...n2] )










