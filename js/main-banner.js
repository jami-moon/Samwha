"use strict";

// 메인배너 carousel
const $paginationItems = document.querySelectorAll(".banner__pagination li");
const $bannerBgItems = document.querySelectorAll(".banner-bg__list li");
const $bannerContItems = document.querySelectorAll(".banner-cont__list li");
const $bannerContLength = $bannerContItems.length;
let auto = 0;
let currentNum = 0;

autoPlay();

// 클릭 시 배너 배경 및 콘텐츠 변경 및 마우스 hover 시 autoPlay 중지
$paginationItems.forEach((el, idx) => {
  el.addEventListener("click", (e) => {
    handleClickPagination(e, idx);
  });
  el.addEventListener("mouseenter", () => {
    clearInterval(auto);
  });
  el.addEventListener("mouseleave", autoPlay);
});

function handleClickPagination(e, idx) {
  currentNum = `${idx}`;
  showSlide();
}

// 메인 슬라이드
function showSlide() {
  $paginationItems.forEach((el) => {
    el.classList.remove("active");
  });
  $paginationItems[currentNum].classList.add("active");
  $bannerBgItems.forEach((el) => {
    el.style.visibility = `hidden`;
    el.style.opacity = `0`;
  });
  $bannerBgItems[currentNum].style.visibility = `visible`;
  $bannerBgItems[currentNum].style.opacity = `1`;
  $bannerContItems.forEach((el) => {
    el.style.visibility = `hidden`;
    el.style.opacity = `0`;
  });
  $bannerContItems[currentNum].style.visibility = `visible`;
  $bannerContItems[currentNum].style.opacity = `1`;
}

function autoPlay() {
  auto = setInterval(goNextSlide, 4000);
}

function goNextSlide() {
  if (currentNum >= $bannerContLength - 1) {
    currentNum = 0;
  } else {
    currentNum++;
  }
  showSlide();
}
