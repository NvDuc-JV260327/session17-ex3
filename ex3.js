let modal = document.getElementById("modal");

let openBtn = document.getElementById("openBtn");

let closeBtn = document.querySelector(".close");

// Mở modal
openBtn.onclick = function () {
    modal.style.display = "block";
};

// Đóng khi bấm X
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Đóng khi bấm ra ngoài
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};