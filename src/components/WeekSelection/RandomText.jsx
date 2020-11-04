const RandomText = () =>{
    const text=["This model knew how to mix pose and power, very invested and passionate!","Amazingly amazing! Beautiful curves and presence!","This model knows what he doing.","Hardworker!"];
    const xNumber = Math.floor((Math.random() * text.length-1) + 1);
    const DisplayText = text.slice(xNumber, (xNumber+1));
    return DisplayText
    
}


export default RandomText;