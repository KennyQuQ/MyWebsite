let slide = 1;
Bgs = document.querySelector("#myBg")
Texts = document.querySelector("#text-el")
Texts.style.fontSize = "4.052rem";
showBg(slide)

function pushBg(num) {
    Bgs.style.opacity = 0.4
    slide += num
    /* if (slide < 0) {
        slide = 4
    } else if (slide > 4) {
        slide = 0
    } */
    
    showBg(slide);
    Texts.style.fontSize = "3.052rem";
    Bgs.style.opacity = 1
}

function showBg(num) {
    if (num) {
        Bgs.style.backgroundImage = "url('./img/interview/bg1.png')";
        Texts.textContent = "😀Hello, we are Group 3😀"
    } else if (num % 5 === 2) {
        Bgs.style.backgroundImage = "url('./img/interview/bg2.webp')";
        Texts.textContent = "😊Tip1 - good dress and time⌚"
    } else if (num % 5 === 3) {
        Bgs.style.backgroundImage = "url('./img/interview/bg3.png')";
        Texts.textContent = "🤓Tip2 - Answer the question in detail📙"
    } else if (num % 5 === 4) {
        Bgs.style.backgroundImage = "url('./img/interview/bg4.png')";
        Texts.textContent = "🙃Tip3 - be polite, avoid using filler words✨"
    }  else if (num % 5 === 0) {
        Bgs.style.backgroundImage = "url('./img/interview/bg5.png')";
        Texts.textContent = "😎Tip4 - End the interview with a good impression💖"
    }
}
