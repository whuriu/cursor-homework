const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes(salary){
    return (this.tax * salary).toFixed(2)
}
console.log(getMyTaxes.call(litva, 990));

function getMiddleTaxes(){
    return (this.middleSalary * this.tax).toFixed(2)
}
console.log(getMiddleTaxes.call(litva));

function getTotalTaxes(){
    return (this.middleSalary * this.tax * this.vacancies).toFixed(2)
}
console.log(getTotalTaxes.call(litva));

function getRandomNumber(N,M){
    let H = M + 1;
    return Math.floor(Math.random() * (H - N) + N);
}

function getMySalary(country){
   let loggerInfo =  () =>{
    const salary = getRandomNumber(1500,2000);
   const taxes = getMyTaxes.call(country, salary);
    const res = {
        salary: salary,
        tax: Number(taxes),
        profit: Number((salary - taxes).toFixed(2))
    }
    console.log(res)
    }

    loggerInfo();

    let timerId = setInterval(loggerInfo, 10000);
    setTimeout(() => clearInterval(timerId), 100000);
}

getMySalary(latvia)