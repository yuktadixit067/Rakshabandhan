/* ================================= */
/* CHANGE SCREEN */
/* ================================= */

function goToScreen(number) {

    const screens =
        document.querySelectorAll(".screen");


    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    const nextScreen =
        document.getElementById(
            "screen" + number
        );


    if (nextScreen) {

        nextScreen.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    createHearts(5);

}



/* ================================= */
/* GIFT BOXES 🎁 */
/* ================================= */

function openGift(number) {

    const gifts =
        document.querySelectorAll(".gift");


    const result =
        document.getElementById(
            "giftResult"
        );


    const nextButton =
        document.getElementById(
            "memoryButton"
        );


    const clickedGift =
        gifts[number - 1];


    if (
        clickedGift.dataset.opened === "true"
    ) {

        return;

    }


    clickedGift.dataset.opened = "true";


    clickedGift.innerHTML = "🎊";


    clickedGift.classList.add(
        "gift-opened"
    );


    let photo = "";

    let title = "";

    let message = "";



    /* ================================= */
    /* GIFT 1 */
    /* ================================= */

    if (number === 1) {

        photo =
            "images/gift.photo1.jpeg";

        title =
            "A SPECIAL MEMORY ❤️";

        message =
            "Look what I found! 🥹 A little memory just for you.";

    }



    /* ================================= */
    /* GIFT 2 */
    /* ================================= */

    else if (number === 2) {

        photo =
            "images/gift.photo2.jpeg";

        title =
            "HAHA! GOTCHA! 😂";

        message =
            "Okay okay... this one is a little embarrassing! 😈";

    }



    /* ================================= */
    /* GIFT 3 */
    /* ================================= */

    else {

        photo =
            "images/gift.photo3.jpeg";

        title =
            "A SECRET MESSAGE 💌";

        message =
            "You're annoying, but you're still my favourite little brother! ❤️";

    }



    result.innerHTML = `

        <div class="surprise-message">

            <img
                src="${photo}"
                alt="Gift surprise"
                class="gift-photo"
            >

            <h2>
                ${title}
            </h2>

            <p>
                ${message}
            </p>

        </div>

    `;


    nextButton.classList.remove(
        "hidden"
    );


    createHearts(15);


    setTimeout(function() {

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

}



/* ================================= */
/* UNLOCK MEMORY */
/* ================================= */

function unlockMemory() {

    const memory =
        document.getElementById(
            "memoryCard"
        );


    const unlockButton =
        document.getElementById(
            "unlockButton"
        );


    memory.classList.remove(
        "hidden"
    );


    unlockButton.classList.add(
        "hidden"
    );


    createHearts(15);

}



/* ================================= */
/* 13 PHOTO GALLERY 📸 */
/* ================================= */

let currentPhoto = 1;

const totalPhotos = 13;



function nextPhoto() {

    const photo =
        document.getElementById(
            "memoryPhoto"
        );


    const title =
        document.getElementById(
            "photoTitle"
        );


    const caption =
        document.getElementById(
            "photoCaption"
        );


    const counter =
        document.getElementById(
            "photoCounter"
        );


    const button =
        document.getElementById(
            "nextPhotoButton"
        );


    currentPhoto++;


    if (
        currentPhoto <= totalPhotos
    ) {

        photo.src =
            "images/photo"
            +
            currentPhoto
            +
            ".jpeg";


        title.innerHTML =
            "Memory "
            +
            currentPhoto
            +
            " 🥹❤️";


        caption.innerHTML =
            "Another beautiful memory with you. ❤️";


        counter.innerHTML =
            currentPhoto
            +
            " / "
            +
            totalPhotos;


        if (
            currentPhoto ===
            totalPhotos
        ) {

            button.innerHTML =
                "I'VE SEEN ALL 13 ❤️";

        }


        createHearts(5);

    }


    else {

        button.classList.add(
            "hidden"
        );


        document
            .getElementById(
                "videoNext"
            )
            .classList.remove(
                "hidden"
            );


        createHearts(20);

    }

}



/* ================================= */
/* SHOW VIDEO 1 */
/* ================================= */

function showVideo() {

    const videoBox =
        document.getElementById(
            "videoBox"
        );


    const watchButton =
        document.getElementById(
            "watchButton"
        );


    const video1 =
        document.getElementById(
            "video1"
        );


    videoBox.classList.remove(
        "hidden"
    );


    watchButton.classList.add(
        "hidden"
    );


    document
        .getElementById(
            "videoBox2"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "nextVideoButton"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "questionNext"
        )
        .classList.add(
            "hidden"
        );


    video1.currentTime = 0;


    video1.play().catch(
        function() {

            console.log(
                "Video 1 requires user interaction."
            );

        }
    );


    createHearts(15);


    setTimeout(function() {

        videoBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

}



/* ================================= */
/* VIDEO EVENTS */
/* ================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        const video1 =
            document.getElementById(
                "video1"
            );


        const video2 =
            document.getElementById(
                "video2"
            );


        /* ============================= */
        /* VIDEO 1 ENDED */
        /* ============================= */

        if (video1) {

            video1.addEventListener(
                "ended",
                function() {

                    const nextButton =
                        document.getElementById(
                            "nextVideoButton"
                        );


                    nextButton.classList.remove(
                        "hidden"
                    );


                    createHearts(25);


                    setTimeout(function() {

                        nextButton.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }, 300);

                }
            );

        }



        /* ============================= */
        /* VIDEO 2 ENDED */
        /* ============================= */

        if (video2) {

            video2.addEventListener(
                "ended",
                function() {

                    const finalButton =
                        document.getElementById(
                            "questionNext"
                        );


                    finalButton.classList.remove(
                        "hidden"
                    );


                    createHearts(30);


                    setTimeout(function() {

                        finalButton.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }, 300);

                }
            );

        }

    }
);



/* ================================= */
/* SHOW VIDEO 2 */
/* ================================= */

function showSecondVideo() {

    const videoBox2 =
        document.getElementById(
            "videoBox2"
        );


    const nextVideoButton =
        document.getElementById(
            "nextVideoButton"
        );


    const video2 =
        document.getElementById(
            "video2"
        );


    videoBox2.classList.remove(
        "hidden"
    );


    nextVideoButton.classList.add(
        "hidden"
    );


    document
        .getElementById(
            "questionNext"
        )
        .classList.add(
            "hidden"
        );


    video2.currentTime = 0;


    video2.play().catch(
        function() {

            console.log(
                "Video 2 requires user interaction."
            );

        }
    );


    createHearts(25);


    setTimeout(function() {

        videoBox2.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

}



/* ================================= */
/* FLOATING HEARTS ❤️ */
/* ================================= */

function createHearts(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            function() {

                const heart =
                    document.createElement(
                        "div"
                    );


                heart.classList.add(
                    "heart"
                );


                const heartTypes = [

                    "❤️",
                    "💗",
                    "💕",
                    "💖",
                    "🩷"

                ];


                heart.innerHTML =
                    heartTypes[
                        Math.floor(
                            Math.random()
                            *
                            heartTypes.length
                        )
                    ];


                heart.style.left =
                    Math.random()
                    *
                    100
                    +
                    "%";


                heart.style.animationDuration =
                    (
                        3
                        +
                        Math.random()
                        * 3
                    )
                    +
                    "s";


                heart.style.fontSize =
                    (
                        15
                        +
                        Math.random()
                        * 20
                    )
                    +
                    "px";


                document.body.appendChild(
                    heart
                );


                setTimeout(
                    function() {

                        heart.remove();

                    },
                    6000
                );

            },
            i * 150
        );

    }

}



/* ================================= */
/* AUTOMATIC HEARTS */
/* ================================= */

setInterval(
    function() {

        createHearts(1);

    },
    1800
);



/* ================================= */
/* RUN-AWAY WRONG ANSWERS 🏃💨 */
/* ================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const movingButtons =
            document.querySelectorAll(
                ".moving-answer"
            );


        movingButtons.forEach(
            function(button) {


                /* ================================= */
                /* MOUSE / POINTER ENTER */
                /* ================================= */

                button.addEventListener(
                    "pointerenter",
                    function() {

                        moveWrongButton(
                            button
                        );

                    }
                );


                /* ================================= */
                /* MOBILE TOUCH */
                /* ================================= */

                button.addEventListener(
                    "touchstart",
                    function(event) {

                        event.preventDefault();

                        moveWrongButton(
                            button
                        );

                    },
                    {
                        passive: false
                    }
                );

            }
        );

    }
);



/* ================================= */
/* MOVE WRONG BUTTON */
/* ================================= */

function moveWrongButton(button) {

    const container =
        document.querySelector(
            ".answer-container"
        );


    if (!container) {

        return;

    }


    const containerWidth =
        container.clientWidth;


    const containerHeight =
        container.clientHeight;


    const buttonWidth =
        button.offsetWidth;


    const buttonHeight =
        button.offsetHeight;



    /* ================================= */
    /* SAFE AREA */
/* ================================= */

    const padding = 10;


    let maxX =
        containerWidth
        -
        buttonWidth
        -
        padding;


    let maxY =
        containerHeight
        -
        buttonHeight
        -
        padding;


    if (maxX < padding) {

        maxX = padding;

    }


    if (maxY < padding) {

        maxY = padding;

    }



    /* ================================= */
    /* RANDOM POSITION */
/* ================================= */

    const randomX =
        Math.floor(
            Math.random()
            *
            maxX
        );


    const randomY =
        Math.floor(
            Math.random()
            *
            maxY
        );



    /* ================================= */
    /* MOVE BUTTON */
/* ================================= */

    button.style.left =
        randomX
        +
        "px";


    button.style.top =
        randomY
        +
        "px";


    /* Remove bottom/right positioning */

    button.style.right =
        "auto";


    button.style.bottom =
        "auto";


    /* Remove transform from option 3 */

    button.style.transform =
        "none";



    /* ================================= */
    /* FUN MESSAGE */
/* ================================= */

    const result =
        document.getElementById(
            "answerResult"
        );


    if (result) {

        const messages = [

            "😂 Nice try! I'm too fast!",

            "🏃💨 Nope! Catch me if you can!",

            "😏 You almost got me!",

            "🤣 Wrong answer detected!",

            "🏃‍♂️💨 I'm RUNNING AWAY!",

            "😂 Stop trying to catch me!",

            "😈 You can't click me!",

            "💨 Too slow!"

        ];


        result.innerHTML =
            messages[
                Math.floor(
                    Math.random()
                    *
                    messages.length
                )
            ];

    }


    createHearts(3);

}



/* ================================= */
/* CORRECT ANSWER ❤️ */
/* ================================= */

function answerQuestion() {

    document
        .getElementById(
            "answerResult"
        )
        .innerHTML =
        "🎉 CORRECT! 😎❤️ I KNEW YOU WOULD CHOOSE ME!";


    document
        .getElementById(
            "finalNext"
        )
        .classList.remove(
            "hidden"
        );


    createHearts(20);

}