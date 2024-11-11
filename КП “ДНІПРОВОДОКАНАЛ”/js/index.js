document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.services-box');
    const aboutBlocks = document.querySelectorAll('.about');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceText = button.querySelector('.services-text').textContent.trim();

            aboutBlocks.forEach(block => {
                block.style.display = 'none';
                if (block.querySelector('.about-text').textContent.trim() === serviceText) {
                    block.style.display = 'block'; 
                }
            });
            buttons.forEach(btn => {
                btn.querySelector('.services-text').style.color = '#10202E';
            });
            button.querySelector('.services-text').style.color = '#4C7CC3';
        });
    });
});

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
                    arrow.style.transform = 'rotate(-90deg)';
                } else {
                    answer.style.display = 'none';
                    arrow.style.transform = 'rotate(0deg)';
                }
            }
        }
    });
});
