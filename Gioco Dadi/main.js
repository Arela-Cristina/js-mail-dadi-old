const buttonUser = document.getElementById('button-user');
console.log(buttonUser);

buttonUser.addEventListener('click', function (event) {
    event.preventDefault();

    let userChoice = Math.floor((Math.random() * 6) + 1);

    bottonUser = userChoice;
    console.log('Soy el numero Random del usuario', bottonUser);

    let messagio;

    let pcChoice = Math.floor((Math.random() * 6) + 1);
    console.log('Soy el numero Random del PC', pcChoice);

    if (userChoice > pcChoice) {
        messagio = 'User hai vinto';
    } else if (userChoice === pcChoice) {
        messagio = 'Avete pareggiato';
    } else {
        messagio = 'User hai perso';
    }
    console.log('Mensaje', messagio);
});




