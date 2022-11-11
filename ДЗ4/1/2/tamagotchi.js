let tamagotchi = {
  property: {
  name: 'Тузик',
  meal: 3,
  energy: 3,
  mood: 4,
  },
  getStatus: function(){
  if(this.property.meal <= 0 || this.property.energy <= 0 || this.property.mood <= 0){
  console.log( `${this.property.name} умер`);
  } else {
  console.log( `${this.property.name}`);
  
  if (this.property.meal < 3){
  console.log(`Я голоден (${this.property.meal})`);
  }else{
  console.log(`Я не голоден (${this.property.meal})`);
  };
  
  if (this.property.energy < 3){
  console.log(`Я хочу спать (${this.property.energy})`);
  }else{
  console.log(`Я не хочу спать (${this.property.energy})`);
  };
  
  if (this.property.mood < 3){
  console.log(`Мне скучно (${this.property.mood})`);
  }else{
  console.log(`Мне весело (${this.property.mood})`);
  };
  }
  },
  setName: function(newName){
  this.property.name = newName;
  },
  eat: function(){
  if(this.property.meal < 5){
  this.property.meal++;
  this.property.mood--;
  } else {
  this.property.mood--;
  }
  },
  sleep: function(){
  if(this.property.energy < 5){
  this.property.energy++;
  this.property.meal--;
  } else{
  this.property.meal--;
  }
  },
  play: function(){
  if(this.property.mood < 5){
  this.property.mood++;
  this.property.energy--;
  } else{
  this.property.energy--;
  }
  },
  }
  
  // tamagotchi.setName('Djaa');
  // tamagotchi.eat();
  // tamagotchi.play();
  // tamagotchi.eat();
  // tamagotchi.play();
  // tamagotchi.play();
  // tamagotchi.play();
  // tamagotchi.eat();
  // tamagotchi.eat();
  // tamagotchi.play();
  tamagotchi.getStatus();
  

// Создать файл tamgotchi.js
// Далее объект tamagotchi со следующими полями:
// name – имя зверька
// meal – уровень сытости
// energy – уровень энергии
// mood – уровень настроения
// Нам нужен метод getStatus(), который будет выводить в консоль состояние нашего зверька. Например:
// Имя: Тузик, Еда: 1, Энергия: 3, Настроение: 4.


// Нам также нужен метод setName(), который позволить устанавливать имя зверьку.
// tamagotchi.setName(‘Djaa’) // Имя поменяется на Djaa.


// Далее нужны три метода: кушать, спать, играть. Функционал следующий:
// метод "кушать" должен увеличивать свойство meal на единицу, а свойство mood уменьшать на единицу;
// метод "спать" должен увеличивать свойство energy на единицу и уменьшать свойство meal на единицу;
// метод "играть" должен увеличивать свойство mood на единицу и уменьшать свойство energy на единицу.
// Важно: во всех трёх методах увеличение должно происходить только в том случае, если значение свойства меньше пяти. Если же значение свойства равно пяти, то свойство изменять не нужно.

// Теперь изменим метод getStatus() так, чтобы он мог выражать свои желания более конкретно и четко. То есть, чтобы:
// в значении "еда", выводилось в консоль "Я голоден", если значение свойства meal меньше 3, а иначе "Я не голоден";
// в значении "энергия", выводилось в консоль "Я хочу спать", если значение свойства energy меньше 3, а иначе "Я не хочу спать";
// в значении "настроение", выводилось в консоль "Мне скучно", если значение mood меньше 3, а иначе "Мне весело".
// 	И чтобы рядом с каждым значением в скобках указано значение свойства. То есть:
// 	Имя: Djaa, Еда: Я голоден (1), Энергия: Я не хочу спать (3), Настроение: Мне весело (4)
// И последнее. Все смертны. Поэтому зверьку нужно добавить возможность умереть:
// Надо доработать метод getStatus() так, чтобы при нулевом или отрицательном значении какого-то из свойств (еда, энергия, настроение) - в консоль выводилось сообщение: [имя] умер.