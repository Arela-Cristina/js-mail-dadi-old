const buttonUser = document.getElementById('button-user');
console.log(buttonUser);

buttonUser.addEventListener('click', function (event) {
    event.preventDefault();

    let userChoices = [1, 2, 3, 4, 5, 6];

    let indexArray = Math.floor((Math.random() * 6) + 1);

    userChoices = indexArray;

    bottonUser = indexArray;
    console.log('Soy el numero Random', bottonUser)

})

