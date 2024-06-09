//chiediamo la mail ai guests
const emailGuest = document.querySelector(".emailInput");
console.log(emailGuest);

//chiediamo la mail ai guests
let sendButton = document.querySelector(".sendButton");
console.log(sendButton);

sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Soy el valor', emailGuest.value);

    const arrayGuest = ['simo@gmail.com', 'cri@gmail.com', 'mono@gmail.com'];

    let messaggio = 'No estas invitado';

    for (let i = 0; i < arrayGuest.length; i++) {
        let guest = arrayGuest[i];
        // console.log('Siamo gli invitati', guest);

        if (guest === emailGuest.value) {
            messaggio = 'Estas invitado♥';
        }
    }
    console.log(messaggio);
});

