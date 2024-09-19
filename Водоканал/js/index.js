document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.getElementById('accordion');
    accordion.addEventListener('click', (event) => {
        const target = event.target.closest('.FAQ-q-box');
        if (target) {
            const answer = target.nextElementSibling;
            const arrow = target.querySelector('.FAQ-arrow');
            if (answer) {
                answer.classList.toggle('open');
                if (answer.classList.contains('open')) {
                    answer.style.display = 'block';
                    arrow.style.transform = 'rotate(270deg)';
                } else {
                    answer.style.display = 'none';
                    arrow.style.transform = 'rotate(0deg)';
                }
            }
        }
    });
});

// const accordionContainer = document.querySelector(".FAQ-a"); // accordion
// 
// accordionContainer.addEventListener('click', event => { // Step 2
//     if (event.target.className === 'FAQ-q') { // Step 3
//         console.log('Click!');
//         faqAnswer.classList.toggle("open");
//     }
// });

// const faqButton = document.querySelector(".FAQ-q");
// const faqAnswer = document.querySelector(".FAQ-a");
//
// faqButton.addEventListener("click", () => {
//     faqAnswer.classList.toggle("open");
// });