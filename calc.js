// Select the calculator screen and all buttons
const screen = document.getElementById('screen');
const keys = document.querySelectorAll('.btn');

// Add event listeners to the buttons
keys.forEach(key => {
  key.addEventListener('click', () => {
    const value = key.textContent;

    if (key.classList.contains('btn-clear')) {
      // Clear the screen
      screen.value = '';
    } else if (key.classList.contains('btn-equal')) {
      // Calculate the result
      try {
        const expression = screen.value
          .replace('×', '*')
          .replace('÷', '/')
          .replace('−', '-');
        screen.value = eval(expression);
      } catch (error) {
        screen.value = 'Error';
      }
    } else {
      // Append the value to the screen
      screen.value += value;
    }
  });
});
