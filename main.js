let btn1 = document.querySelector(".block__small-btn1");

btn1.addEventListener("click", () => {
  let p = document.querySelectorAll(".block__text-p");
  p.forEach((item) => {
    item.classList.add("p-btn1");
  });
  let block_a = document.querySelector(".block__a");
  block_a.textContent = "Здесь осталось три параграфа";
});

let btn2 = document.querySelector(".block__small-btn2");

btn2.addEventListener(
  "click",
  () => {
    let image = document.querySelectorAll(".image");
    let p = document.querySelectorAll(".block__small-p");

    image.forEach((item) => {
      item.classList.add("btn2-img");
    });
    p.forEach((elem) => {
      elem.classList.add("p-btn2");
    });

    let str1 = document.querySelector(".last-p");
    let str = str1.innerHTML;
    let arr = str.split(" ");

    arr.forEach((item, i) => {
      item = `<span>${item}</span>`;
      arr[i] = item;
    });

    str = arr.join(" ");
    str1.innerHTML = str;
  },
  { once: true }
);
