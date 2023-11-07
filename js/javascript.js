let list= document.querySelectorAll(".list li a");
list.forEach(link =>{
    let letra=link.textContent.split("");
    link.textContent ="";
    letra.forEach((letra,i)=>{
        i +=1;
        let span = document.createElement("span");
        let delay=i/15;
        let letraout = document.createElement("span");
        letraout.textContent=letra;
        letraout.style.transitionDelay=`${delay}s`;
        letraout.classList.add("out");
        span.append(letraout);

        let letrain = document.createElement("span");
        letrain.textContent=letra;
        letrain.style.transitionDelay=`${delay}s`;
        letrain.classList.add("in");
        span.append(letrain);
        link.append(span);
    })
});