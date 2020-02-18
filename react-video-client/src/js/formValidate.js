export function validate(event) {
    const passwordOne = document.getElementById("formBasicPassword").innerText;
    const passwordTwo = document.getElementById("formBasicPasswordTwo").innerText;

    if (passwordOne !== passwordTwo || passwordOne.length === 0 || passwordTwo.length === 0) {
        event.preventDefault();
    }

}