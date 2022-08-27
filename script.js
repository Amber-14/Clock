setInterval(setClock,1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secHand = document.querySelector('[data-sec-hand]');

function setClock(){
    const currDate = new Date();
    const secondsRatio = currDate.getSeconds()/60;
    const minutesRatio = (secondsRatio+ currDate.getMinutes())/60;
    const hourRatio = (minutesRatio+ currDate.getHours())/12;

    setRotation(secHand,secondsRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(hourHand,hourRatio);

}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360);
}
setClock()