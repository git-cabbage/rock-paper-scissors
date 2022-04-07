(() => {
  const btn = document.querySelectorAll(".btn");
  const label = document.querySelectorAll("label");
  const randomE = document.querySelector(".random");
  const selected = document.querySelector(".user__select");
  const notification = document.querySelector(".notification");
  const title = document.querySelector(".title");
  const notiContent = document.querySelector(".content__noti");
  const notiBtn = document.querySelector(".btn__noti");
  const objE = ["Kéo", "Búa", "Bao"];
  let count = 3;

  function loadGame() {
    randomE.textContent = "?";
    selected.textContent = "Bạn chưa chọn kìa!!!";

    label.forEach((e, key) => {
      e.textContent = objE[key];
      e.style.pointerEvents = "auto";
    });
    btn.forEach((value) => {
      value.checked = false;
    });
    console.log("load game");
  }
  loadGame();

  btn.forEach((value, key) => {
    value.addEventListener("click", () => {
      handlePreventClick();
      countTimer(key);
      hiddenNoti();
      console.log("select button");
    });
  });

  function countTimer(key) {
    const counter = setInterval(function () {
      randomE.textContent = count;
      count--;

      if (count < 1) {
        clearInterval(counter);
        count = 3;
      }
    }, 1000);

    const randTimer = setTimeout(() => {
      handleRandom(key);
      clearTimeout(randTimer);
    }, 2500);
  }

  function handlePreventClick() {
    label.forEach((e) => {
      e.style.pointerEvents = "none";
    });
    console.log("prevent click");
  }

  function handleRandom(key) {
    const rand = objE[Math.floor(Math.random() * 3)];

    setTimeout(() => {
      randomE.textContent = rand;
    }, 1000 * (count + 1));

    handleCompare(key, rand);
    console.log("random value");
  }

  function handleCompare(key, rand) {
    if (objE[key] === "Kéo") {
      rand === "Búa"
        ? ((title.textContent = "THUA LUN :(("),
          (notiContent.textContent = "Hãy thử lại lần sau nhé !!!"))
        : rand === "Bao"
        ? ((title.textContent = "THẮNG RỒI <3"),
          (notiContent.textContent = "Bạn đã dành chiến thắng, :>"))
        : ((title.textContent = "HÒA, WOW !!!"),
          (notiContent.textContent = "Ồ bạn nghĩ thật giống mình đấy :)))"));
    }
    if (objE[key] === "Búa") {
      rand === "Kéo"
        ? ((title.textContent = "THẮNG RỒI <3"),
          (notiContent.textContent = "Bạn đã dành chiến thắng, :>"))
        : rand === "Bao"
        ? ((title.textContent = "THUA LUN :(("),
          (notiContent.textContent = "Hãy thử lại lần sau nhé !!!"))
        : ((title.textContent = "HÒA, WOW !!!"),
          (notiContent.textContent = "Ồ bạn nghĩ thật giống mình đấy :)))"));
    }
    if (objE[key] === "Bao") {
      rand === "Búa"
        ? ((title.textContent = "THẮNG RỒI <3"),
          (notiContent.textContent = "Chúc mừng bạn đã dành chiến thắng, :>"))
        : rand === "Kéo"
        ? ((title.textContent = "THUA LUN :(("),
          (notiContent.textContent =
            "Bạn đã thua, hãy thử lại lần sau nhé !!!"))
        : ((title.textContent = "HÒA, WOW !!!"),
          (notiContent.textContent = "Ồ bạn nghĩ thật giống mình đấy :)))"));
    }
    console.log("compare value");
  }

  function hiddenNoti() {
    setTimeout(() => {
      notification.style.display = "flex";
      notification.classList.add("active");
    }, 1000 * (count + 2.5));

    notiBtn.addEventListener("click", () => {
      notification.style.display = "none";
      console.log("re-start");
      loadGame();
    });
    console.log("hidden notification");
  }
})();
