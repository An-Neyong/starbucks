const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
// 상단으로 스크롤 버튼을 클릭하면,
    gsap.to(window, .7, {
        scrollTo: 0 //scrollTo < 을 위해 plugin cnd 스크립트 태그 삽입한 것
    });
});

// lodash 적용 (throttle)
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // Badge 요소 숨기기!
        gsap.to(badgeEl, .6, {
          opacity: 0,
          display: 'none'
        })
        // 상단으로 스크롤 버튼 보이기!
        gsap.to(toTopEl, .2, {
          x: 0
        })
    
      // 페이지 스크롤 위치가 500px이 넘지 않으면.
      } else {
        // Badge 요소 보이기!
        gsap.to(badgeEl, .6, {
          opacity: 1,
          display: 'block'
        })
        // 상단으로 스크롤 버튼 숨기기!
        gsap.to(toTopEl, .2, {
          x: 100
        })
      }
    }, 300))
    
// _.throttle(함수, 시간)




 
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay:(index + 1) * .7, // 0.7초 1.4초 2.1초 2.7초
        opacity: 1
    });
});

//Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper-container',{ //new : javascript 생성자 (클래스)
    direction: 'vertical', //수직여부
    autoplay: true,  //자동재생 여부
    loop: true, // 반복여부
}); 

new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
      nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    },
   
  });
  new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetwwen: 30,
    slidesPerView: 5, // 하나에 화면에 몇개의 슬라이드를 보여줄지 결정
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
  })


  
  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn = document.querySelector('.toggle-promotion');
  let isHidePromotion = false;

  promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion 
    // 반댓값을 다시 할당 true가 할당 됨
    if(isHidePromotion) {
        // 숨김 처리 !
        promotionEl.classList.add('hide');
        //트루라면 실행
    }else { 
        // 보임 처리 !
        promotionEl.classList.remove('hide');
    }
  });
 // 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, //선택자
        random(1.5, 2.5), // 애니메이션 동작 시간
        { // 옵션
            y: size,
            repeat: -1, // 무한 반복 !!!!! 자바스크립트 라이브러리에서 지원하는 기능 ~
            yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생해서 위로 밑으로 밑으로 위로 재생되게 할 수 있는 기능
            ease: "power1.inOut",
            delay: random(0, delay) //몇초 뒤에 애니메이션을 시작할지 설정(지연시간)
        }
    );
}
    floatingObject('.floating1', 1, 15);
    floatingObject('.floating2', 0.5, 15);
    floatingObject('.floating3',1.5, 15);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정 
            triggerHook: .8, // 뷰포트가 시작하는 부분이 0 가장 아랫부분이 1 중간지점은 0.5 스크롤하다가 0.8이란 지점에 걸리면 실행된다. 
        })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); // 동작하게 해주는 Controller ..!
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023



