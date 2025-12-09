function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("msg");

  if (user.trim() === "" || pass.trim() === "") {
    msg.textContent = "Semua kolom harus diisi!";
    return;
  }

  // Contoh username dan password
  let correctUser = "admin";
  let correctPass = "12345";

  if (user === correctUser && pass === correctPass) {
    msg.style.color = "green";
    msg.textContent = "Login berhasil!";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Halaman tujuan
    }, 1000);
  } else {
    msg.style.color = "red";
    msg.textContent = "Username atau Password salah!";
  }
}
