// Button Animation
function buttonAnimation() {
    const buttonList = document.querySelector(".links-list");
    const container = document.querySelector(".container");

    function deleteCircleIcon(circle) {
        circle.remove();
    }

    function createCircleIcon(posX, posY, event) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`;

        event.target.closest(".container").appendChild(circle);

        setTimeout(() => {
            deleteCircleIcon(circle);
        }, 1000);
    }

    function handleButtonClick(event) {
        const offset = event.target.getBoundingClientRect();

        const posX = event.pageX - offset.left;
        const posY = event.pageY - offset.top;

        createCircleIcon(posX, posY, event);
    }

    buttonList.addEventListener("click", function (event) {
        if (event.target.closest(".button")) {
            handleButtonClick(event);
        }
    });
}
buttonAnimation();
