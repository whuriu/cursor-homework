const apple = 15.678;
const peach = 123.965;
const tomato = 90.2345;
const sum = apple + peach + tomato;
const sumLow = Math.floor(apple) + Math.floor(peach) + Math.floor(tomato);
const discount = Math.round(Math.random (1, 99)*100);

console.log('Максиальне значення:'+ Math.max(apple, peach, tomato));
console.log('Мінімальне значення: ' + Math.min(apple, peach, tomato));
console.log("Сума товарів: " + sum);
console.log('Сума товарів округелена в меншу сторону: ' + sumLow);
console.log('Сума товарів округлена до сотень: ' + Math.round(sum/100)*100);
console.log('Булеве значення суми всіх товарів: '+ (Math.floor(sum) %2 ===0));
console.log('Сума решти при оплаті 500 : ' + (500 - sum));
console.log('Середнє значення цін: ' + (sum/3).toFixed(2));
console.log (`Знижка: `+ discount  +`%`);
console.log ('До сплати: ' + (sum - (sum * discount)/100).toFixed(2));
console.log('Чистий прибуток: '+ ((sum/2) - (sum * discount)/100).toFixed(2));

document.writeln(
    `   <p>Максиальне значення: ${Math.max(apple, peach, tomato)} </p>
        <p>Мінімальне значення: ${Math.min(apple, peach, tomato)} </p>
        <p>Сума товарів: ${sum} </p>
        <p>Сума товарів округелена в меншу сторону: ${sumLow} </p>
        <p>Сума товарів округлена до сотень: ${Math.round(sum/100)*100} </p>
        <p>Булеве значення суми всіх товарів:  ${(Math.floor(sum) %2 ===0)} <p>
        <p>Сума решти при оплаті 500 : ${(500 - sum)} </p>
        <p>Середнє значення цін: ${(sum/3).toFixed(2)} </p>
        <p>Знижка: ${discount} % </p>
        <p>До сплати: ${(sum - (sum * discount)/100).toFixed(2)}  </p>
        <p>Чистий прибуток: ${((sum/2) - (sum * discount)/100).toFixed(2)}  </p>
    `
)

