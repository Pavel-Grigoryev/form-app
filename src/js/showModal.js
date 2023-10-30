import {popup} from "./sendForm";
document.addEventListener("DOMContentLoaded", function () {
    const buttonModal = document.querySelector(".modal__button");
    const body = document.querySelector("body");
    buttonModal.addEventListener("click", () => {
        showModalonClick();
    });
    const showModalonClick = () => {
        popup.classList.toggle("active");
        body.classList.toggle("no-scroll");
    };

    document.removeEventListener("click", () => {
        showModalonClick();
    });

});
