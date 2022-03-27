const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransition(){
    // Button click active class
    for(let i=0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            if (document.querySelectorAll('.active-btn').length == 0){
                this.className += ' active-btn';
            } else {
                let currentBtn = document.querySelectorAll('.active-btn');
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
                this.className += ' active-btn';
            }
        })
    }

    allSections.addEventListener('click', (e) => {
        
        var id = '';
        // !WORKAROUND! this if clause is needed because if you click directly on the house icon, it will get the class Name of the icon, not the id of the control
        if (e.target.className == "fa-solid fa-house" || e.target.className == "fa-solid fa-house active"){
            console.log('inside');
            id = 'home';
        } else {
            id = e.target.dataset.id;
        }

        if(id){
            secBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransition();