import Timer  from "./Timer.js"; 

new Timer(
document.querySelector(".btn-timer")
);


const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')

    }

})

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

//const text = document.querySelector(".sec-text");

//const textLoad = () => {
  //  setTimeout(() => {
    //    text.textContent = "Révision";
   // }, 0);
    //setTimeout(() => {
    //    text.textContent = "Notes";
   // }, 4000);
   // setTimeout(() => {
     //   text.textContent = "Cours";
   // }, 8000); //1s = 1000 milliseconds
//}

//textLoad();
//setInterval(textLoad, 12000);
