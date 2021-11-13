//Get panels in DOM
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');

    })

});

//Function to Remove Active Classes
function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}