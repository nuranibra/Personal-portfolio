function scroolToElement (elementSelector , i = 0){
    const elements = document.querySelector(elementSelector);
    if(elements.length > i){
        elements[i].scrollIntoView({behavior: 'smooth'});
    }
}

const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')

link1.addEventListener('click',() =>{
    scroolToElement('.text-h2');
});

