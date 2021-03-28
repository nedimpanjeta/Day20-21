const textarea = document.getElementById("text_area");
const capslock = document.getElementById("caps");
const backspace = document.getElementById("backspace");
const shift = document.getElementById("shift");
const enter = document.getElementById("enter");
const ok = document.getElementById("ok");
const space = document.getElementById("space");
const slova = document.querySelectorAll("button.veliko_slovo");
const keys = document.getElementsByClassName("key");

// Capslock dodaje klasu uppercase slovima
capslock.addEventListener("click", () => {
  for (let i of slova) {
    i.classList.toggle("uppercase");
  }
});

// Ispis slova u textarea string
for (let i of keys) {
  i.addEventListener("click", () => {
    if (i.classList.contains("uppercase") === true) {
      textarea.value += i.value.toUpperCase();
    } else {
      textarea.value += i.value;
    }
  });
}

// Brisanje slova
backspace.addEventListener("click", () => {
  textarea.value = textarea.value.substring(0, textarea.value.length - 1);
});

// Razmak izmedju slova
space.addEventListener("click", () => {
  textarea.value += " ";
});

// Enter nova linija
enter.addEventListener("click", () => {
  textarea.value += "\n";
});

// Ispis poruke u alert prozoru
ok.addEventListener("click", () => {
  if (textarea.value !== "") {
    alert(textarea.value);
  }
});

// Shift dugme velika slova jednokratno
shift.addEventListener("click", () => {
  for (let i of slova) {
    i.classList.toggle("uppercase");
    i.addEventListener("click", () => {
      for (let i of slova) {
        i.classList.remove("uppercase");
      }
    });
  }
});