"use strict";

const $header = document.querySelector(".header");
const $headerLogo = document.querySelector(".logo");
const $gnbListItem = document.querySelectorAll(".gnb-left__title");
const $lnbItems = document.querySelectorAll(".lnb-list");
const $gnbDetail = document.querySelector(".gnb__detail");
const $gnbBtn = document.querySelector(".gnb-btn");
const $issue = document.querySelector("#issue");

// 헤더영역 mouseenter, mouseleave 이벤트
$gnbListItem.forEach((el, idx) => {
  el.addEventListener("mouseenter", (e) => {
    let lnbTarget = $lnbItems[idx];

    $header.classList.add("active");
    $lnbItems.forEach((el) => {
      el.classList.remove("active");
    });
    lnbTarget.classList.add("active");
  });
});

$headerLogo.addEventListener("mouseenter", () => {
  $header.classList.add("active");
});

$header.addEventListener("mouseleave", () => {
  $lnbItems.forEach((el) => {
    el.classList.remove("active");
    $header.classList.remove("active");
  });
});

// 헤더영역 gnb-btn, gnb__detail 이벤트
$gnbBtn.addEventListener("click", (e) => {
  $gnbBtn.classList.toggle("on");
  $gnbDetail.classList.toggle("open");
  document.body.classList.toggle("gnb-open");
});

// 스크롤 메인 영역 진입시 header 스타일 변경
document.body.addEventListener("scroll", () => {
  const issueTop = $issue.getBoundingClientRect().top;
  if (issueTop < 500) {
    $header.classList.add("active");
  } else {
    $header.classList.remove("active");
  }
});

// gnb-detail hover 이벤트
const $detailList = document.querySelector(".detail-list");
const $detailItmes = document.querySelectorAll(".detail-item");
const $detailTitle = document.querySelectorAll(".detail-item__title");
const $detailLnb = document.querySelectorAll(".detail-lnb");

$detailTitle.forEach((el, idx) => {
  el.addEventListener("mouseenter", (e) => {
    $detailTitle.forEach((el) => {
      el.style.color = `#999`;
    });
    e.target.style.color = `#000`;

    $detailLnb.forEach((el) => {
      el.classList.remove("open");
    });

    $detailLnb[idx].classList.add("open");

    $detailItmes.forEach((el) => {
      el.classList.remove("open");
    });

    $detailItmes[idx].classList.add("open");
  });
});

$detailList.addEventListener("mouseleave", () => {
  $detailLnb.forEach((el) => {
    el.classList.remove("open");
  });
  $detailItmes.forEach((el) => {
    el.classList.remove("open");
  });
});

// inspiration 섹션 컬러 복사 버튼
// 컬러코드 복사
$("body").append("<input class='clip_target' type='text'/>");
$(".clip_target").addClass("visually-hidden");
$(".insp__button--copy").click(function () {
  let colorCode = $(this).siblings(".insp__color-info--code").text();
  clipBoardCopy(colorCode);
});

// 클립보드 복사 함수
function clipBoardCopy(copyEl) {
  $(".clip_target").attr("value", copyEl);
  $(".clip_target").select();
  try {
    var success = document.execCommand("copy");

    if (success) alert("컬러코드가 복사되었습니다.");
    else alert("복사된 값이 없습니다.");
  } catch (error) {
    alert("해당 브라우저는 지원하지 않습니다.");
  }
}

// inspiration 섹션 컬러 팝업 버튼
const $colorPopupBtn = document.querySelectorAll(".insp__button--popup");
const $colorPopup = document.querySelectorAll(".insp__color-popup");
const $popupClose = document.querySelectorAll(".popup-close");

$colorPopupBtn.forEach((el, idx) => {
  el.addEventListener("click", (e) => {
    $colorPopup[idx].classList.add("open");
    document.body.classList.add("popup-open");
  });
});

// inspiration 섹션 컬러 팝업 닫기 버튼
$popupClose.forEach((el, idx) => {
  el.addEventListener("click", (e) => {
    $colorPopup[idx].classList.remove("open");
    document.body.classList.remove("popup-open");
  });
});

// inspiration 섹션 팝업 컬러 복사 버튼
$(".insp__button--popup").click(function () {
  let popupColorCode = $(this).siblings(".insp__color-info--code").text();
  $(".clip_target").attr("value", popupColorCode);
});

$(".popup-btn--copy").click(function () {
  $(".clip_target").select();
  try {
    var success = document.execCommand("copy");

    if (success) alert("컬러코드가 복사되었습니다.");
    else alert("복사된 값이 없습니다.");
  } catch (error) {
    alert("해당 브라우저는 지원하지 않습니다.");
  }
});

// Family Site 클릭 이벤트

const $familySite = document.querySelector(".family-site span");
const $familySiteList = document.querySelector(".family-site__list");

$familySite.addEventListener("click", (e) => {
  $familySiteList.classList.toggle("open");
});
