const weapon = {
    modifications: ['total power', 'giant bullet'],
    type: ['boom'],

    [Symbol.iterator]() {
        // modes - массив всех массивов объекта weapons
        let modes = Object.values(this);
        let modeIndex = 0;
        let propIndex = 0;

        return {
            next() {
                // props - все элементы массива modes
                let props = modes[modeIndex];
                
                // Проверяем что находимся в границах массива элементов
                if (propIndex >= props.length) {
                    // Если превышаем границу - то переход к следующему массиву и обнуление индекса элементов массива
                    modeIndex++; 
                    propIndex = 0;

                    // Проверяем, что находимся в границах массива modes 
                    if (modeIndex >= modes.length) {
                        // Итерации завершены
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                    // Заменяем массив props в связи с изменением индекса массива modes
                    props = modes[modeIndex];

                } 
                // Очередная итерация - возврат элемента
                return {
                    value: props[propIndex++],
                    done: false
                }
            }
        }
    } 
}


const allProperties = [...weapon]; // ['total power', 'giant bullet', 'boom']
console.log(allProperties);