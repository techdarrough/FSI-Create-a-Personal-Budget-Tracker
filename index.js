let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// write code that itterates over each var to set all expenses


let i = 0
while (i < weeklyExpenseQuestions.lenght) {
    i++;
    let answer = window.prompt(weeklyExpenseQuestions[i])
    weeklyExpenses = weeklyExpenses + parseInt(answer)
    
    
}
while (i < monthlyExpenseQuestions.lenght) {
    i++;
    let answer = window.prompt(monthlyExpenseQuestions[i])
    monthlyExpenses = monthlyExpenses + parseInt(answer)
    
    
}
while (i < weeklyExpenseQuestions.lenght) {
    i++;
    let answer = window.prompt(annualExpenseQuestions[i])
    annualExpenses = annualExpenses + parseInt(answer)
    
    
}




// for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
// let answer = window.prompt(weeklyExpenseQuestions[i]);
// weeklyExpenses = weeklyExpenses + parseInt(answer)

// }

// for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
//     let answer = window.prompt(monthlyExpenseQuestions[i]);
//     monthlyExpenses = monthlyExpenses + parseInt(answer)
// }

// for (let i = 0; i < annualExpenseQuestions.length; i++) {
//     let answer = window.prompt(annualExpenseQuestions[i]);
//     annualExpenses = annualExpenses + parseInt(answer)
// }

