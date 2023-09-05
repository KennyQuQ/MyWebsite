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
        Dis.innerHTML = "无论你是学生、职场新人还是已经在职场摸爬滚打多年，理财技能都是你成功的关键。这部影片将带你了解为什么理财是人才的必备技能。";
        Links.href="https://youtu.be/MVssUmrLefc";
    } else if (num === 1) {
        Videos.style.backgroundImage = "url('./img/background/video2.png')";
        Titles.textContent = "來自物理室的你♂♂";
        Dis.textContent = "在一所大学的物理实验室中，两位主角，小昌和小康，在一次意外的科学实验中发现了一扇通往时空的神秘之门。这个物理室成为了他们独特而令人着迷的爱情舞台。\
        小昌是一名年轻的物理学家，充满好奇心和创造力，他一直在探索时空的奥秘。小康是一位天赋异禀的工程师，精通机械制作和发明创造。他们的相遇和共同的科学兴趣使他们开始了一段令人心动的冒险。";
        Links.href="https://youtu.be/0SVOQ-QLt9s";
    } else if (num === 2) {
        Videos.style.backgroundImage = "url('./img/background/video3.png')";
        Titles.textContent = "Press Conference";
        Dis.textContent = "此影片暫時不可用🙇\n此影片暫時不可用🙇";
        Links.href="https://youtu.be";
        // window.alert("此影片暫時不可用🙇")
        // Links.href="https://youtu.be/4hmBnT3OL9s";
    } else if (num === 3) {
        Videos.style.backgroundImage = "url('./img/background/video4.png')";
        Titles.textContent = "黃六醫生 vs. 膽結石";
        Dis.textContent = "这部影片聚焦于一位杰出的医生，黄六医生，以及他在胆结石治疗领域的卓越成就。胆结石是一种常见但痛苦的健康问题，它可以严重影响患者的生活质量。但有幸的是，黄六医生以他的医学专业知识和同情心，一直在帮助患者克服这一问题。";
        Links.href="https://youtu.be/tYec2NzgmI4";
    }  else if (num === 4) {
        Videos.style.backgroundImage = "url('./img/background/video5.png')";
        Titles.textContent = "F6D 感謝老師的話";
        Dis.textContent = "这部影片致敬了教育领域的默默奉献者 —— 老师们。在一所名为 F6D 的学校中，一群学生为了表达他们对老师的深深感激之情，决定共同制作一部特别的影片。\
        在影片中，你将见证学生们分享了关于他们的老师们的故事和感受。这些故事包括老师的启发、激励和帮助，以及老师们在学生生活中所起到的关键作用。学生们用真诚的话语和深情的回顾，感谢了那些曾经引导他们走向未来的导师。";
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
    if(scrollPercentage.toFixed(2) <= 11){
        list.forEach((item) =>
        item.classList.remove('active'));
        list[0].classList.add('active');
    } else if(scrollPercentage.toFixed(2) <= 53){
        list.forEach((item) =>
        item.classList.remove('active'));
        list[1].classList.add('active');
    } else if(scrollPercentage.toFixed(2) <= 63){
        list.forEach((item) =>
        item.classList.remove('active'));
        list[2].classList.add('active');
    } else if(scrollPercentage.toFixed(2) <= 77){
        list.forEach((item) =>
        item.classList.remove('active'));
        list[3].classList.add('active');
    } else{
        list.forEach((item) =>
        item.classList.remove('active'));
        list[4].classList.add('active');
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