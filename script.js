let reminders = [];
let currentIndex = 0;

let reminderAmount = document.querySelector('.reminder-container')

const forward = document.querySelector('.forward')
const backwards = document.querySelector('.backwards')
const button = document.querySelector('.submit-button')
const textField = document.querySelector('#reminder-text')
const output = document.querySelector('.inner-box')


backwards.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        reminderAmount.textContent = currentIndex;
        output.innerHTML = '';
        reminders.forEach(r => {
            if (r.currentIndex === currentIndex) {
                let newReminder = document.createElement("p");
                newReminder.textContent = r.text;
                output.appendChild(newReminder);
            }
        });
    }
});

forward.addEventListener('click', () => {
    currentIndex++;
    reminderAmount.textContent = currentIndex;
    output.innerHTML = '';
    reminders.forEach(r => {
        if (r.currentIndex === currentIndex) {
            let newReminder = document.createElement("p");
            newReminder.textContent = r.text;
            output.appendChild(newReminder);
        }
    });
});



button.addEventListener('click', () => {
    let reminderText = textField.value;
    reminders.push({currentIndex: currentIndex, text: reminderText });
    let newReminder = document.createElement("p");
    newReminder.textContent = reminderText;
    output.appendChild(newReminder);
    textField.value = '';
});
