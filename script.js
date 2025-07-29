const display = document.getElementById('display');
const themeToggle = document.getElementById('toggle-theme');

// Append value to display
function appendToDisplay(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Calculate result with error handling
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Square root function
function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value)).toFixed(4);
  } catch {
    display.value = 'Error';
  }
}

// Square function
function square() {
  try {
    let val = eval(display.value);
    display.value = (val * val).toFixed(4);
  } catch {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.', '%'].includes(e.key)) {
    appendToDisplay(e.key);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    calculateResult();
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});

// Dark mode toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
