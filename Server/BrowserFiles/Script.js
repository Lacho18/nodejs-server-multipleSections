let title = document.getElementById('Title');

//Sections------------------------------------------------------------
let homeSection = document.getElementById('homeSection');
let aboutSection = document.getElementById('aboutSection');
let optionSection = document.getElementById('optionSection');
let otherSection = document.getElementById('anotherSection');

aboutSection.style.display = 'none';
optionSection.style.display = 'none';
otherSection.style.display = 'none';

let sectionArray = [homeSection, aboutSection, optionSection, otherSection];
//----------------------------------------------------------------------------

//Buttons-----------------------------------------------------------------
let homeButton = document.getElementById("home");
let aboutButton = document.getElementById("about");
let optionButton = document.getElementById("options");
let otherButton = document.getElementById("other");

let buttonsArray = [homeButton, aboutButton, optionButton, otherButton];

setVisibility(buttonsArray, false);
//----------------------------------------------------------------------------

let bool = true;
let menuButton = document.getElementById('MenuButton');
menuButton.addEventListener('click', () => {
    menuButtonHnadler(bool);
    bool ? bool = false : bool = true;
    console.log(bool);
});

let buttonDiv = document.getElementById("buttons");
buttonDiv.style.visibility = 'hidden';
title.innerHTML = "home";

function menuButtonHnadler(boolean) {
    let interval

    if(boolean) {
        buttonDiv.style.visibility = 'visible';
        buttonDiv.classList.add("divAppeare");
        buttonDiv.classList.remove("divDisappeare");

        interval = setInterval(() => {
            setVisibility(buttonsArray, true);
        }, 600);
    }
    else {
        buttonDiv.classList.add("divDisappeare");
        buttonDiv.classList.remove("divAppeare");

        interval = setInterval(() => {
            
            setVisibility(buttonsArray, false);
            let inIt = setInterval(() => {
                buttonDiv.style.visibility = 'hidden';
                clearInterval(inIt);
            }, 600);
            clearInterval(interval);
        }, 300);
    }
}

function setVisibility(array, boolean) {
    if(boolean) {
        for(let i = 0; i < array.length; i++) {
            array[i].style.display = 'block';
        }
    }
    else {
        for(let i = 0; i < array.length; i++) {
            array[i].style.display = 'none';
        }
    }
}

function setVisibilityofSection(array, index, buttonID) {
    title.innerHTML = buttonID;

        for(let i = 0; i < array.length; i++) {
            if(i == index) {
                array[i].style.display = "block";
            }
            else {
                array[i].style.display = 'none';
            }
        }
}

//Event listeners-------------------------------------------------
homeButton.addEventListener('click', () => {setVisibilityofSection(sectionArray, 0, homeButton.id);});
aboutButton.addEventListener('click', () => {setVisibilityofSection(sectionArray, 1, aboutButton.id);});
optionButton.addEventListener('click', () => {setVisibilityofSection(sectionArray, 2, optionButton.id);});
otherButton.addEventListener('click', () => {setVisibilityofSection(sectionArray, 3, otherButton.id);});
//--------------------------------------------------------------------------