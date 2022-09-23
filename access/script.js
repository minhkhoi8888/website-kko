var hoverInfo = document.querySelectorAll('.home-slider__item--hover'),
hoverImg = document.querySelectorAll('.home-slider__item img'),
wrapSlides = document.querySelector('.home-slider'),
indexSlide = 0,
mapSlide = document.querySelectorAll('.home-slider-map-item'),
slideWidth = slides = wrapSlides.querySelectorAll('.home-slider__item')[0].offsetWidth,
slidesLength = mapSlide.length;

// Slider 
mapSlide[0].style.opacity = "1";
mapSlide.forEach((item, index) =>{
    item.onclick = () =>{
        wrapSlides.style.left = -slideWidth*index + 'px';
        indexSlide = index;
        mapSlide.forEach((item) =>{
            item.style.opacity = "0.5";
        })
        mapSlide[index].style.opacity = "1";
    }
})

// Content slide
const infoList = {
    0: {
        name: "FORZA HORIZON",
        description: "Forza Horizon 5 là một trò chơi điện tử đua xe năm 2021 được phát triển bởi Playground Games và được xuất bản bởi Xbox Game Studios. Đây là tựa Forza Horizon thứ năm và là phần chính thứ mười hai trong loạt Forza. Trò chơi lấy bối cảnh một đại diện hư cấu của Mexico.",
        link: 'https://forzamotorsport.net/en-US'
    },
    1: {
        name: "OUT LAST",
        description: "Outlast là trò chơi điện tử thuộc thể loại kinh dị sinh tồn được phát triển và phát hành bởi hãng Red Barrels từ Canada dưới dạng góc nhìn thứ nhất. Outlast kể về cuộc phiêu lưu của nhà báo tự do Miles Upshur nhằm khám phá những bí ẩn bên trong ...",
        link: 'https://redbarrelsgames.com/'
    },
    2: {
        name: "FORTNITE",
        description: "Fortnite là một trò chơi sinh tồn phối hợp trên sandbox do Epic Games và People Can Fly phát triển, và Epic Games phát hành. Trò chơi đã được phát hành dưới phiên bản truy cập sớm trả tiền cho các nền tảng Microsoft Windows, macOS, PlayStat...",
        link: 'https://www.epicgames.com/fortnite/en-US/home'
    },
    3: {
        name: "Mortal Kombat 11",
        description: "Mortal Kombat 11 là phần thứ 11 của trò chơi điện tử đối kháng Mortal Kombat, do NetherRealm Studios sản xuất và Warner Bros. Interactive Entertainment phân phối. Game ra mắt ngày 23 tháng 4 năm 2019 trên các hệ máy PlayStation 4, Xbox...",
        link: 'https://www.mortalkombat.com/'
    }
};

// Infor Slide
hoverInfo.forEach((item, index)=>{
    item.innerHTML = `<h3>${infoList[index].name}</h3>
    <p>${infoList[index].description}</p>
    <a href=${infoList[index].link} target="_blank" class="btn">Khám phá</a>`;
})
// Mouse Over
wrapSlides.addEventListener('mouseover', function (){
    hoverInfo[indexSlide].classList.add('home-slider__hover--active');

    hoverInfo[indexSlide].style.animation = "leftToRight 0.6s forwards";;
 
    hoverImg[indexSlide].style.transform = "scale(1.1)";
});
// Mouse out
wrapSlides.addEventListener('mouseout', function (){
    hoverInfo[indexSlide].style.animation = "rightToLeft 0.6s forwards";

    hoverInfo[indexSlide].classList.remove('home-slider__hover--active');

    hoverImg[indexSlide].style.transform = "scale(1)";
});


// Scroll Header Animation
var headerNav = document.querySelector('.menu');
window.onscroll = function (){
    if(this.scrollY > 20){
        headerNav.classList.add('menu--active');
        headerNav.classList.remove('menu--clip-path');

    } else if (headerNav.classList.contains('menu--active')) {
        headerNav.classList.remove('menu--active');
        headerNav.classList.add('menu--clip-path');
    }
}

// Background Interface
var iconS = document.querySelectorAll('.right-menu__interface-hover i'),
mainSite = document.querySelector('body');
iconS.forEach((item, index)=>{
    mainSite.classList.remove('main-color');
    item.onclick = ()=>{
        if (index == 0){
            mainSite.style.background = 'rgb(247, 246, 242)';
            Toast('Light Mode', 2000);
        } else if (index == 1){
            mainSite.style.background = 'rgb(51, 71, 86)';
            Toast('Night Mode', 2000);
        } else if (index == 2){
            mainSite.style.background = null;
            mainSite.classList.add('main-color');
            Toast('Color Mode', 2000);
        }
    }
})

// TOAST
var toast = document.querySelector('#toast'),
language = document.querySelectorAll('.right-menu__lang-choise div');

function Toast (msg='info', duration = 3000){
    var toastItem = document.createElement('DIV');
    // Auto remove toast
    const removeToast = setTimeout(function(){
        toast.removeChild(toastItem);
    },duration);
    // remove when clicked
    toastItem.onclick = function(e){
        if(e.target.closest('.toast-close')){
            toast.removeChild(toastItem);
            clearTimeout(removeToast);
        }
    }
    var delay = (duration/1000).toFixed(2);
    toastItem.classList.add('toast');
    toastItem.style.animation = `showToast 0.3s ease, hideToast ease 1s ${delay}s forwards`
    toastItem.innerHTML = `
    <div class="toast-msg">${msg}</div>
    <span class='toast-close'>
        <i class="bi bi-x-circle-fill"></i></i>
    </span>`;

    toast.appendChild(toastItem);
}

language.forEach(function (item){
    item.onclick = function (){
        if (item.values != "VI"){
            Toast("Comming soon", 2000);
        }
    }
});

// Add bookmark
document.querySelectorAll('.news-bookmark').forEach((item)=>{
    item.onclick = function(){ Toast("Đã lưu bookmark", 2000); }
});


// Loading loadMore button
var btnLoadMore = document.querySelectorAll('.load-more');
btnLoadMore.forEach((item)=>{
    item.onclick = ()=>{
        item.classList.add('load-more--loading');
        setTimeout(function(){
            item.classList.remove('load-more--loading');
        }, 3500);
    }
})

