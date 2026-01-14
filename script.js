function openModal() {
  document.getElementById("orderModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}

function payNow() {
     alert("这里可以付款");
  closeModal();
}

function contactSeller() {
 const message = encodeURIComponent(
    "你好，我想订购【多功能保温杯】"
  );

  // 改成卖家的 WhatsApp 号码
  const phone = "+601128208828";

  window.open(
    `https://wa.me/${phone}?text=${message}`,
    "_blank"
  );
}



