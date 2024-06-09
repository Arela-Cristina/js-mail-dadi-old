//chiediamo la mail ai guests
const emailGuest = document.querySelector(".emailInput");
console.log(emailGuest);

//chiediamo la mail ai guests
const sendButton = document.querySelector(".sendButton");
console.log(sendButton);

const arrayGuest = ['simo@gmail.com', 'cri@gmail.com', 'mono@gmail.com'];

for (let i = 0; i < arrayGuest.length; i++) {
    const guest = arrayGuest[i];
    console.log('Somos los invitados', guest);

}