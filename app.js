const input = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const list = document.querySelector(".list");
const item = document.querySelector(".item");

addBtn.addEventListener("click", () => {
  if (!input.value) {
    alert("Enter an item");
  } else {
    list.innerHTML += `<li class="item">
    <div class=" item pt-1 d-flex">
      <button class="btn checkBtn">
        <i class="fa-solid fa-check"></i>
      </button>
      <p class="pt-2 "> ${input.value}
      </p>
    </div>
    <button class="btn delBtn">
      <i class="fa-solid fa-trash-can"></i>
    </button>
</li>`;

    input.value = "";
    input.focus();
  }

  //****LİNE-THROUGH */

  const checkBtn = document.querySelectorAll(".checkBtn");
  // console.log(checkBtn);

  checkBtn.forEach((a) => {
    a.addEventListener("click", () => {
      // console.log(a.nextElementSibling);
      if (!a.nextElementSibling.classList.contains("line-through")) {
        a.nextElementSibling.classList.add("line-through");
        a.style.color = "green";
        a.parentElement.nextElementSibling.firstElementChild.style.color =
          "green";
      } else {
        a.nextElementSibling.classList.remove("line-through");
        a.style.color = "black";
        a.parentElement.nextElementSibling.firstElementChild.style.color =
          "black";
      }
    });
  });

  //***DELETE */

  const delBtn = document.querySelectorAll(".delBtn");
  delBtn.forEach((item) => {
    item.addEventListener("click", () => {
      item.previousElementSibling.lastElementChild.classList.contains(
        "line-through"
      ) && item.parentElement.remove();
    });
  });

  //***REMOVE-ALL */

  document.querySelector(".remove-btn").addEventListener("click", () => {
    list.childElementCount > 0 && document.querySelector("li").remove();
    input.focus();
  });
});

window.onload = () => {
  input.focus();
};
