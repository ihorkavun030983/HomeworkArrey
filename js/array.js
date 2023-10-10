    let arrNumber = [];
    for(var i=0; i < 10; i++) {

        arrNumber[i] = prompt('Введіть будь-яке число від 1 до 10', +i);
        if(arrNumber[i] === null) {
            alert('Отмена');
            
        }
        
        if(arrNumber[i] === '') {
            alert('Ви не вказали число');
            arr[i] = prompt('Введіть будь-яке число від 1 до 10');
            let count = m.length - 1;

        }
        let count = arrNumber.length - 1;
    
        for (let i = 0; i < count; i++)
          for (let j = 0; j < count - i; j++)
            if (arrNumber[j] > arrNumber[j + 1]) {
              let max = arrNumber[j];
              arrNumber[j] = arrNumber[j + 1];
              arrNumber[j + 1] = max;
              
            }
        
        }
        console.log('Елементи масиву в порядку зростання', arrNumber);

        arrNumber.splice(2, 3);
        
        document.body.innerHTML = arrNumber
       
        

