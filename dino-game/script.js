const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            // Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            // Subido
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCartus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randowTime = Math.random() * 6000;

    console.log(randowTime);


    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let letfInterval = setInterval(() => {

        if (cactusPosition <= -60) {
            clearInterval(letfInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60 ) {
            // Game over
            clearInterval(letfInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1><div class="container"><div class="dev-img"><img src="./assets/img/dalcy-praca4.png" alt="dalcy"></div></div><h3 class="footer">Desenvolvido por Dalcimar Luiz na DIO!</h3>';
            
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCartus, randowTime);
}

createCartus();
document.addEventListener('keyup', handleKeyUp);