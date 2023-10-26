# Projeto - Cartão Nubank com formulário

Um cartão que lembre o cartão de crédito da Nubank, com um formulário para aplicar as entradas no cartão, poder ver as informações escritas no cartão que você fez.

## Ideias

- Fundo bonito
- Dizer quem foi o desenvolvedor 
- O visual do cartão
    - Frente
    - Atrás
- Formulário para escrever o que precisa mudar o que está escrito no cartão

CSS FLEX

Card flex coluna
    div linha (coluna)
        div dados (row)
    div linha (coluna)
        div dados (row)
    div linha (coluna)
        div dados (row)

### Ferramentas

* HTML
* CSS
* Javascript

### Material de apoio:

- Calculadora
  https://www.youtube.com/watch?v=42TShjXR0m0 ✔️

- Cartão
  https://www.youtube.com/watch?v=yZrJoeXveaQ ✔️
  https://www.youtube.com/watch?v=iQFBcNhBWz8&t=1s 


- Piano 
  https://www.youtube.com/watch?v=Mv1ZYpo8q4g
  
  https://www.youtube.com/watch?v=nHDEgRYVbqQ&t=1394s ✔️

- Relógio
  https://www.youtube.com/watch?v=GK0ok3ZCXwM&t=362s ✔️


#### Aprendizagens de estudo

* Para organização e estilização uma div/tag inner SEMPRE é importante, assim você descreve melhor onde vocÊ deseja estilizar


##### itens para guardar

* HTML

    <!-- <div class="card-holder">
        <label class="label-name">Nome</label>
        <div class="name-v1">Lorem Ipsum</div>
    </div> -->

* CSS

    <!-- .card-holder {
        color: whitesmoke;
    }

    .card-holder label{
        font-size: .7rem;
    } -->

* JS

<!-- // Animação do Cartão
const card = document.querySelector('.card');

card.addEventListener("mousemove", cardEffect);
card.addEventListener("mouseleave", cardBack);
card.addEventListener("mouseenter", cardEnter);

function cardEffect(event){
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth/2;
    const centerY = card.offsetTop + cardHeight/2;
    const positionX = event.clientX - centerX;
    const positionY = event.clientY - centerY;

    const rotateX = ((+1)*25*positionY(cardHeight/2).toFixed(2));
    const rotateY = ((-1)*25*positionX(cardWidth/2).toFixed(2));
    
    console.log(rotateX, rotateY);

    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}   

function cardBack(event){
    card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    cardTransition();
}

function cardTransition(){
    clearInterval(card.transitionId);
    card.style.transition = 'transform 400ms';
    card.transitionId = setTimeout(() => {
        card.style.transition = '';
    }, 400);
}

function cardEnter(event){
    cardTransition();
}
// Fim Animação do Cartão -->