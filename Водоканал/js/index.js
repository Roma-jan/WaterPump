const faqButton = document.querySelector(".FAQ-q");
const faqAnswer = document.querySelector(".FAQ-a");

faqButton.addEventListener("click", () => {
    faqAnswer.classList.toggle("open");
});




// faqButton.addEventListener("click", () => {
//     faqAnswer.classList.toggle("open");
// });

// const accordionContainer = document.querySelector(".FAQ-a"); // accordion

//   accordionContainer.addEventListener('click', event => { // Step 2
//       if (event.target.className === 'FAQ-q') { // Step 3
//         console.log('Click!');
    // faqAnswer.classList.toggle("open");

//       }
//     });
