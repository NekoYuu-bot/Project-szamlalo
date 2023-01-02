// Alapérték felvétele

let count = 0;

// gombok és egyéb elemek eltárolása változóba
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// ciklussal végiglépkedek az eltárolt btn klasszú gombokon

btns.forEach((btn)=>{

    //Az összes gomb közül arra kattintok rá, amelyik a ciklusfutáskor következik
    btn.addEventListener("click", (e)=>{

        // megnézzük hogy az aktuálisan megkattintott gombon milyen class/classok vannak
        const style = e.currentTarget.classList;

        //megnézzük hogy a megkattintott gomb tartalmazza-e a decrease class-t
        if(style.contains("decrease")){

            //ha igen akkor az alapértékünket csökkentjük
            count--;
        }
        //megnézzük hogy a megkattintott gomb tartalmazza-e a increase class-t
        else if(style.contains("increase")){

            //ha igen akkor az alapértékünket növeljük
            count++;
        }
        //Ha ezek közül egyik sem akkor reset
        else{
            //akkor az alapértéket visszaállítjuk 0-ra.
            count = 0;
        }

        //hozzáadjuk a színeket
        if(count >0){
            value.style.color = "green";
        }
        else if(count <0){
            value.style.color = "red";
        }
        else{
            value.style.color = "black";
        }
        value.textContent = count;
    })
})

