/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    const newObj = { ...data };
    let gender = newObj.gender;
    if (gender == 'male') {
        if (!newObj.hasOwnProperty('income')) {
            newObj.income = 100000;
        }
    } else if (gender == 'female') {
        if (newObj.age) {
            delete newObj.age;
        }
    }
    return newObj;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    const newObj = { ...obj1, ...obj2, ...obj3 };
    return Object.keys(newObj).sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        const newObj = JSON.parse(JSON.stringify(obj));
        newObj.id = i;
        arr.push(newObj);
    }
    return arr;
}
