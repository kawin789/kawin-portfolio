const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransition(){
    //Button click active class
    for(let i=0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    
    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other section
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toogle theme

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })

}

PageTransition();


const words = ["Computer Science Student", "AI Developer Enthusiast", "Frontend Developer"];
let i = 0;

function typeWriter() {
    if (i < words.length) {
        document.getElementById('typing-text').innerText = words[i];
        document.getElementById('typing-text').style.width = `${words[i].length}ch`;
        i++;
        setTimeout(() => {
            document.getElementById('typing-text').style.animation = 'none';
            setTimeout(() => {
                document.getElementById('typing-text').style.animation = '';
                typeWriter();
            }, 50);
        }, 4000); // Duration each word is shown before switching to the next one
    } else {
        i = 0;
        typeWriter();
    }
}

typeWriter();

window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;
    elements.forEach(element => {
      const position = element.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        element.classList.add('in-view');
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        const progress = skill.querySelector('.progress');
        const percentage = skill.querySelector('.percentage');
        const percent = skill.getAttribute('data-percent');

        skill.addEventListener('mouseover', () => {
            progress.style.width = percent + '%';
            let count = 0;
            const interval = setInterval(() => {
                if (count >= percent) {
                    clearInterval(interval);
                } else {
                    count++;
                    percentage.textContent = count + '%';
                }
            }, 20);
        });

        skill.addEventListener('mouseout', () => {
            progress.style.width = '0';
            percentage.textContent = '0%';
        });
    });
});
