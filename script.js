// variabili

let distanceInput = document.getElementById('Km');
let userAgeInput = document.getElementById('age');
let formButton = document.getElementById('formButton');
let pInput = document.getElementById('total-price');

// evento click

formButton.addEventListener('click',
    function () {
        let kmTrip = distanceInput.value;
        let userAge = userAgeInput.value;
        // controllo dati

        if (!isNaN(kmTrip) && !isNaN(userAge)) {
            console.log('Hai inserito i dati correttamente');
            let totalPrice = (kmTrip * 0.21);
            let discount = 0;
            if (userAge < 18) {
                discount = (totalPrice / 100 * 20);
            } else if (userAge > 65) {
                discount = (totalPrice / 100 * 40);
            }
            totalPrice = totalPrice - discount;
            console.log(`Il tuo biglietto costa ${totalPrice.toFixed(2)} euro`);
        } else {
            console.log('Puoi inserire solo numeri');
        }
    }
);







