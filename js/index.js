let slide = 0;
Videos = document.querySelector("#myVideo")
BtnLL = document.querySelector("#btn-ll")
BtnRR = document.querySelector("#btn-rr")
Dis = document.querySelector("#myDescription")
Titles = document.querySelector("#myTitle")
Links = document.querySelector("#myVideolink")

/* Texts = document.querySelector("#text-el") */
/* Texts.style.fontSize = "4.052rem"; */
showVideo(slide)

// button delay 1.5s
BtnLL.addEventListener("click", function() {
    BtnLL.disabled = true
    pushVideo(-1)
    setTimeout(function() {BtnLL.disabled = false}, 1000)
})
BtnRR.addEventListener("click", function() {
    BtnRR.disabled = true
    pushVideo(1)
    setTimeout(function() {BtnRR.disabled = false}, 1000)
})

function pushVideo(num) {
    Videos.classList.add('fade-up');
    Dis.classList.add('fade-up');
    slide += num
    // slide overflow
    if (slide < 0) {
        slide = 4
    } else if (slide > 4) {
        slide = 0
    }
    showVideo(slide);
    /* Texts.style.fontSize = "3.052rem"; */
    Videos.classList.remove('fade-up');
    Dis.classList.remove('fade-up');
}

// function showBg(num) {
//     if (num === 0) {
//         Bgs.style.backgroundImage = "url('./img/background/bg1.jpg')";
//         /* Texts.textContent = "😀Hello, we are Group 3😀" */
//     } else if (num === 1) {
//         Bgs.style.backgroundImage = "url('./img/background/bg2.jpg')";
//         /* Texts.textContent = "😊Tip1 - good dress and time⌚" */
//     } else if (num === 2) {
//         Bgs.style.backgroundImage = "url('./img/background/bg3.jpg')";
//         /* Texts.textContent = "🤓Tip2 - Answer the question in detail📙" */
//     } else if (num === 3) {
//         Bgs.style.backgroundImage = "url('./img/background/bg4.jpg')";
//         /* Texts.textContent = "🙃Tip3 - be polite, avoid using filler words✨" */
//     }  else if (num === 4) {
//         Bgs.style.backgroundImage = "url('./img/background/bg5.jpg')";
//         /* Texts.textContent = "😎Tip4 - End the interview with a good impression💖" */
//     }
// }

// video button

function showVideo(num) {
    if (num === 0) {
        Videos.style.backgroundImage = "url('./img/background/video1.png')";
        Titles.textContent = "懂理財，你才能成為人才！";
        Dis.innerHTML = "無論你是學生、職場新人還是已經在職場摸爬滾打多年，理財技能都是你成功的關鍵。這部影片將帶你了解為什麼理財是人才的必備技能。";
        Links.href="https://youtu.be/MVssUmrLefc";
    } else if (num === 1) {
        Videos.style.backgroundImage = "url('./img/background/video2.png')";
        Titles.textContent = "來自物理室的你♂♂";
        Dis.textContent = "在一所大學的物理實驗室中，兩位主角，小昌和小康，在一次意外的科學實驗中發現了一扇通往時空的神秘之門。這個物理室成為了他們獨特而令人著迷的愛情舞台。 \
        小昌是一名年輕的物理學家，充滿好奇心和創造力，他一直在探索時空的奧秘。小康是一位天賦異禀的工程師，精通機械製作和發明創造。他們的相遇和共同的科學興趣使他們開始了一段令人心動的冒險。";
        Links.href="https://youtu.be/0SVOQ-QLt9s";
    } else if (num === 2) {
        Videos.style.backgroundImage = "url('./img/background/video3.png')";
        Titles.textContent = "Press Conference";
        Dis.textContent = "此影片暫時不可用🙇";
        Links.href="https://youtu.be";
        // window.alert("此影片暫時不可用🙇")
        // Links.href="https://youtu.be/4hmBnT3OL9s";
    } else if (num === 3) {
        Videos.style.backgroundImage = "url('./img/background/video4.png')";
        Titles.textContent = "黃六醫生 vs. 膽結石";
        Dis.textContent = "這部影片聚焦於一位傑出的醫生，黃六醫生，以及他在膽結石治療領域的卓越成就。膽結石是一種常見但痛苦的健康問題，它可以嚴重影響患者的生活質量。但有幸的是，黃六醫生以他的醫學專業知識和同情心，一直在幫助患者克服這一問題。";
        Links.href="https://youtu.be/tYec2NzgmI4";
    }  else if (num === 4) {
        Videos.style.backgroundImage = "url('./img/background/video5.png')";
        Titles.textContent = "F6D 感謝老師的話";
        Dis.textContent = "這部影片致敬了教育領域的默默奉獻者。在F6D 中，一群學生為了表達他們對老師的深深感激之情，決定共同製作一部特別的影片。 \
        在影片中，你將見證學生們分享了關於他們的老師們的故事和感受。這些故事包括老師的啟發、激勵和幫助，以及老師們在學生生活中所起到的關鍵作用。學生們用真誠的話語和深情的回顧，感謝了那些曾經引導他們走向未來的導師。";
        Links.href="https://youtu.be/EG8bWeuXEWg";
    }
}

const list = document.querySelectorAll('.list');
    window.onload = function() {
        document.querySelector('.home').classList.add('active');
    }
    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }

    list.forEach((item) =>
    item.addEventListener('click',activeLink));

// waypoints

window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    var scrollPercentage = (scrollPosition / totalHeight) * 100;
    console.log(scrollPercentage.toFixed(2));
    console.log(window.screen.width);
    // laptop & pad
    if(window.screen.width >= 769) {   
        if(scrollPercentage.toFixed(2) <= 9){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[0].classList.add('active');
        } else if(scrollPercentage.toFixed(2) <= 67){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[1].classList.add('active');
        } else if(scrollPercentage.toFixed(2) <= 74.2){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[2].classList.add('active');
        } else if(scrollPercentage.toFixed(2) <= 86){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[3].classList.add('active');
        } else{
            list.forEach((item) =>
            item.classList.remove('active'));
            list[4].classList.add('active');
        }
    };
    
    
    if(window.screen.width >= 512 && window.screen.width < 769) {   
        if(scrollPercentage.toFixed(2) <= 9){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[0].classList.add('active');
        } else if(scrollPercentage.toFixed(2) <= 65){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[1].classList.add('active');
        } else if(scrollPercentage.toFixed(2) <= 72){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[2].classList.add('active');
        } else if(scrollPercentage.toFixed(2) <= 80){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[3].classList.add('active');
        } else{
            list.forEach((item) =>
            item.classList.remove('active'));
            list[4].classList.add('active');
        }
    }
    if(window.screen.width < 512) {   
        if(scrollPercentage.toFixed(2) <= 9){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[0].classList.add('active');
        } else if(scrollPercentage.toFixed(2) <= 65){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[1].classList.add('active');
        } else if(scrollPercentage.toFixed(2) <= 71){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[2].classList.add('active');
        } else if(scrollPercentage.toFixed(2) <= 82){
            list.forEach((item) =>
            item.classList.remove('active'));
            list[3].classList.add('active');
        } else{
            list.forEach((item) =>
            item.classList.remove('active'));
            list[4].classList.add('active');
        }
    }
    });

  // reveal
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('displayed')
        } else {
            reveals[i].classList.remove('displayed')
        }
    }
}