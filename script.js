let reminders = []; // Array to store reminders
let currentIndex = 0;

let reminderAmount = document.querySelector('.reminder-container')

const forward = document.querySelector('.forward')
const backwards = document.querySelector('.backwards')
const button = document.querySelector('.submit-button')
const textField = document.querySelector('#reminder-text')
const output = document.querySelector('.inner-box')




function updateReminderDisplay() {
    if (reminders.value === 0) {
        reminderAmount.textContent = [currentIndex];
    } else {
        reminderAmount.textContent = [currentIndex];
    }
}

backwards.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        reminders.value--;
        updateReminderDisplay();
    }
});

forward.addEventListener('click', () => {
        currentIndex++;
        reminders.value++;
        updateReminderDisplay();
});



button.addEventListener('click', () => {
    const userInput = textField.value.trim(); 

    if (userInput) {
        output.textContent = userInput;
        textField.value = '';
        reminders.push(userInput);
        currentIndex = reminders.length - 1;
        currentIndex++;
    }
    updateReminderDisplay();
 });
