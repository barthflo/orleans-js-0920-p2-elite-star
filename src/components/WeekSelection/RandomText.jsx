const RandomText = () =>{
    const text=["- This model knew how to mix pose and power, very invested and passionate! -","- Amazingly amazing! Beautiful curves and presence! -","- Nothing eclipses its beauty. -","- An imperial allure that shines in the universe! -","- A star to be revealed! -"];
    const xNumber = Math.floor((Math.random() * text.length-1) + 1);
    const DisplayText = text.slice(xNumber, (xNumber+1));
    return DisplayText
    
}


export default RandomText;