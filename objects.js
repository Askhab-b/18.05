const soldier = {
name: 'tb',   
health: 10,
weapon: {
nameWeapon: 'ak-74',
ammo: 30,
},
supplies: 3,
fire: function () {
if (this.weapon.ammo !== 0) {
this.weapon.ammo--
console.log('бах-бах')
} else if (this.weapon.ammo === 0) {
console.log('обойма пуста. Перезаредитесь.')
}
},
reload: function () {
if (this.weapon.ammo === 0) {
this.weapon.ammo += 30
} else if (this.weapon.ammo === 30) {
this.supplies--
console.log('перезарядка...')   
} else if (this.supplies === 0) {
console.log('не осталось припасов')
}
},
hurt: function () {
if(this.health === 0 ){
console.log('Ты умер')}
else if (this.health--) {
console.log('Ты ранен')
}
},
}