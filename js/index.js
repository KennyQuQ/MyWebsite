let slide = 0;
Bgs = document.querySelector("#myBg")
BtnL = document.querySelector("#btn-l")
BtnR = document.querySelector("#btn-r")
/* Texts = document.querySelector("#text-el") */
/* Texts.style.fontSize = "4.052rem"; */
showBg(slide)

// button delay 1.5s
BtnL.addEventListener("click", function() {
    BtnL.disabled = true
    pushBg(-1)
    setTimeout(function() {BtnL.disabled = false}, 2500)
})
BtnR.addEventListener("click", function() {
    BtnR.disabled = true
    pushBg(1)
    setTimeout(function() {BtnR.disabled = false}, 2500)
})

function pushBg(num) {
    Bgs.style.opacity = 0.4
    slide += num
    // slide overflow
    if (slide < 0) {
        slide = 4
    } else if (slide > 4) {
        slide = 0
    }
    showBg(slide);
    /* Texts.style.fontSize = "3.052rem"; */
    Bgs.style.opacity = 1
}

function showBg(num) {
    if (num === 0) {
        Bgs.style.backgroundImage = "url('./img/background/bg1.jpg')";
        /* Texts.textContent = "😀Hello, we are Group 3😀" */
    } else if (num === 1) {
        Bgs.style.backgroundImage = "url('./img/background/bg2.jpg')";
        /* Texts.textContent = "😊Tip1 - good dress and time⌚" */
    } else if (num === 2) {
        Bgs.style.backgroundImage = "url('./img/background/bg3.jpg')";
        /* Texts.textContent = "🤓Tip2 - Answer the question in detail📙" */
    } else if (num === 3) {
        Bgs.style.backgroundImage = "url('./img/background/bg4.jpg')";
        /* Texts.textContent = "🙃Tip3 - be polite, avoid using filler words✨" */
    }  else if (num === 4) {
        Bgs.style.backgroundImage = "url('./img/background/bg5.jpg')";
        /* Texts.textContent = "😎Tip4 - End the interview with a good impression💖" */
    }
}
