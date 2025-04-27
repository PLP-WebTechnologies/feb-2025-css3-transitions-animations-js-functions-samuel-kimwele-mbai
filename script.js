// Retrieve stored background color preference from localStorage and apply it
document.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});

// Handle button click to trigger background color change and store preference in localStorage
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    localStorage.setItem('bgColor', newColor); // Save preference in localStorage
});

// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Animate the "Click Me to Animate!" button on click
const animateBtn = document.getElementById('animateBtn');
animateBtn.addEventListener('click', () => {
    animateBtn.classList.remove('animate'); // Reset animation
    void animateBtn.offsetWidth; // Trigger reflow to reset the animation
    animateBtn.classList.add('animate'); // Restart animation
});
