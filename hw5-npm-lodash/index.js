var _ = require('lodash');

const data1 = [
    {
    "age": 3,
    "name": "Curtis Greene",
    "email": "curtis.greene@zaj.ca",
    },
    {
    "age": 23,
    "name": "Nikki Lowe",
    "email": "nikki.lowe@darwinium.tv",
    },
    {
    "age": 39,
    "name": "Barr Copeland",
    "email": "barr.copeland@nipaz.me",
    },
    ];
    const data2 = [
    {
    "age": 29,
    "name": "Calhoun Woodward",
    "email": "calhoun.woodward@medmex.info",
    },
    {
    "age": 21,
    "name": "Leta Lee",
    "email": "leta.lee@qnekt.com",
    },
    {
    "age": 40,
    "name": "James Dinh",
    "email": "j.dink@erw.com",
    }
    ];



    // Нужно найти и сохранить в переменную индекс пользователя в массиве data1, 
    // у которого возраст равен 23 года. (ожидаемый результат: 1), все остальное 
    // нужно искать в документации к пакету lodash
    console.log('task 1');
    console.log(  _.findIndex(data1, function(o) { return o.age === 23; }) );


    // Объединить два массива data1 и data2 в один и записать этот результат в 
    // новую переменную ( ожидаемый результат - это новый массив длиной 6 элементов)
    console.log('task 2');
    const data3 = _.concat(data1, data2);
    console.log(data3);

   
    //  Взять любой объект из любого массива и на его основе создать новый объект,
    //  но выкинув из него поле “age”. Опять же нужно использовать функцию из библиотеки lodash.
    //  Пример исходного объекта и результата см. во вложениях.
    console.log('task 3');
    const obj = _.omit(data1[1], "age");
    console.log(obj);


// --------------TASK 4
    console.log('task 4');
    let copyObj = Object.assign({}, {name: data1[1].name, email: data1[1].email});
    console.log(copyObj);

    