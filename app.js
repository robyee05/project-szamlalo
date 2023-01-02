//Alapérték felvétele
let count = 0;

//Gombdok és egyéb elemek eltárolása
const value = document. getElementById("value");
const btns = document.querySelectorAll(".btn");

//Ciklussal végig lépkedeke az eltárolt .btn classu gombokon

btns.forEach((btn) => {

    //Az összes gomb közül arra kattintok rá, amelyik a ciklusfutáskor következik
    btn.addEventListener("click", (e) => {

        //Megnézzük, hog yaz aktuálisan megkattintott gombon milyen  class/classokat vannak

        const style = e.currentTarget.classList;
        //Megnézzük, hogh y a megkattintott gomb tartalamzza a dróecrease classt
        if(style.contains("decrease")) {

            //Ha igen akkor az alapértékünket csükkentjük
            count--;
        }
        else if(style.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }

        //Adjuk hozzá a színeket annak függvényében, hogy a szám + vagy - értékű
        if(count > 0 ) {
            value.style.color = "green"
        } 
        else if(count < 0) {
            value.style.color = "red"
        }
        else {
            value.style.color = "black"
        }

        value.textContent = count;
    })
    
})
