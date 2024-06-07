const emailInputV = document.querySelector(".emailInput");
// console.log(emailInputV);

const sendButtonV = document.querySelector(".sendButton");


// console.log(sendButtonV)

sendButtonV.addEventListener("click",
    function (e) {
        e.preventDefault();
        let valoreButton = emailInputV.value;
        console.log(valoreButton);

        const guestList = ["cri@gmail.com", "simo@gmail.com", "stef@gmail.com"];
        console.log(guestList);

        if (valoreButton = guestList) {
            console.log("Welcome")
        }

        else {
            console.log ("Error")
        }
    }

);

