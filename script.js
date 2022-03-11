console.log('hi')
let weapons = [
  {name: 'sword',         damage: 10,   speed: 3,   critChance: 10,   range: 1.5  },
  {name: 'axe',           damage: 8,    speed: 2,   critChance: 25,   range: 1.5  },
  {name: 'dagger',        damage: 3,    speed: 5,   critChance: 35,   range: 1    },
  {name: 'bow',           damage: 7,    speed: 1,   critChance: 15,   range: 25   },
  {name: 'sledgehammer',  damage: 30,   speed: 1,   critChance: 5,    range: 2    },
]

let w = weapons.filter(
  function (w) {
    return w.damage <= 15
  }

)
console.log(w)