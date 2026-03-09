const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add('active');
        }
    });
});

document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    document.querySelector('.video-bg').style.transform =
        `translate(${x}px, ${y}px)`;
});
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

const audio = document.getElementById('spaceAudio');
const soundBtn = document.querySelector('.sound-toggle');

let playing = false;

soundBtn.onclick = () => {
    if (!playing) {
        audio.play();
        soundBtn.textContent = '🔇';
    } else {
        audio.pause();
        soundBtn.textContent = '🔊';
    }
    playing = !playing;
};
