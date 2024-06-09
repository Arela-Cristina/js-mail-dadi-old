//chiediamo la mail ai guests
const emailGuest = document.querySelector(".emailInput");
console.log(emailGuest);

//chiediamo la mail ai guests
let sendButton = document.querySelector(".sendButton");
console.log(sendButton);

sendButton.addEventListener('click', function (event) {
    event.preventDefault()
    sendButton = emailGuest.value;
    console.log('Soy el valor', sendButton);
});

const arrayGuest = ['simo@gmail.com', 'cri@gmail.com', 'mono@gmail.com'];

for (let i = 0; i < arrayGuest.length; i++) {
    const guest = arrayGuest[i];
    console.log('Somos los invitados', guest);

}