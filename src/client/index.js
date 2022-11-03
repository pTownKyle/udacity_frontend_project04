// Import helper functions
import { urlChecker } from './js/urlChecker';
import { formHandler } from './js/formHandler';

// Import styles
import 'normalize.css';
import './styles/base.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/form.scss';
import './styles/footer.scss';

// Get UI Elements
const form = document.getElementById('form');
const results = document.getElementById('results');
const errorMsg = document.getElementById('error_msg');

const subjectivity = document.getElementById('subjectivity');
const confidence = document.getElementById('confidence');
const irony = document.getElementById('irony');

// Add event listener to form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get URL & it's value from form
    const urlElement = document.getElementById('url');
    const url = urlElement.value;

    // Check if URL is valid
    if (urlChecker(url)) {
        formHandler(url);
    } else {
        errorMsg.classList.remove('hide');
        setTimeout(() => {
            errorMsg.classList.add('hide');
        }, 3000);
    }

    urlElement.value = ''; // Clear URL input
});

// Remove initial hide class from results, error_msg
window.onload = () => {
    results.classList.remove('initial_hide');
    errorMsg.classList.remove('initial_hide');
};

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}
