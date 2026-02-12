document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  const toastEl = document.getElementById("cartToast");
  const toast = new bootstrap.Toast(toastEl);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      toast.show();
    });
  });
});
