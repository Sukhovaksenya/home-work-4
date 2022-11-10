// Это задание станет js-основой, а точнее, частью js-основы нашего проекта.
// Суть следующая: 
// Нам надо разработать приложение списка дел, которым можно управлять из консоли, вызывая разные методы.
// Функционал следующий:
// Вывод всех дел в консоль
// Добавление новых дел
// Удаление дел
// Отметка дела, как выполненного
	// 	Подготовьте почву для работы. В отдельной папке создайте файл index.html, затем создайте и подключите к нему script.js

const todoList = {
    items: [
      {
        text: 'Сделать ДЗ',
        completed: false,
      },
      {
        text: 'Узнать больше про модули',
        completed: false,
      },
      {
        text: 'Помочь одногруппнику понять тему',
        completed: false,
      },
      {
        text: 'Сходить за продуктами',
        completed: true,
      },
    ],
      printAll: function() {
    for (let i = 0; i < this.items.length; i++){
    console.log(this.items[i])
}
    },
    add: function(text) {
        this.items.unshift({text: text, completed: false});
          },
      
    remove: function(index) {
          this.items.splice(index, 1);
    },
  
    print: function(index) {},
  
    complete: function(index) {},
}
  // todoList.printAll();
// todoList.add('Вынести мусор');
// console.log(todoList);
// todoList.remove(0);
console.log(todoList);


//   Свойство items содержит в себе элементы списка дел.

// Каждый элемент представлен в виде JavaScript-объекта. Свойство completed отражает информацию о том завершено данное дело (true) или еще нет (false).
// Реализуйте метод printAll(), который будет выводить в консоль список всех дел. Для реализации понадобится for.

// Напишите метод add(), который будет принимать текст нового дела в виде параметра и добавлять его в начало массива items.

// Имейте в виду, что items – это специальная структура данных: массив с объектами одинаковой формы (то есть у каждого объекта в этом массиве одинаковые свойства). Добавляя новый элемент в этот массив вы не должны нарушать эту структуру.

// Значение свойства completed для добавляемых элементов должно быть равным false.


// Зачем держать завершенные дела в нашем списке вечно? Давайте напишем метод, который позволял бы удалять определенные элементы из списка по их индексу.
// Назовите метод remove(). Он будет принимать на вход один числовой параметр – индекс удаляемого элемента.

// Для удаления элемента из массива по его индексу вам понадобится метод массивов .splice().

// После закрытия данной подзадачи у пользователя нашего приложения будет возможность:
// смотреть список дел
// добавлять новые дела
// удалять дела по индексу



