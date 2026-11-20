const TO_ADDRESS = "hello@examplewebsite142.com";

const form = document.querySelector("#contactForm");

function buildMailto(){
  const fullName = document.querySelector("#fullName").value;
  const email = document.querySelector("#email").value;
  const inquiryType = document.querySelector("#inquiryType").value;
  const product = document.querySelector("#product").value;
  const message = document.querySelector("#message").value;

  const subject = "Status 200 Shop Inquiry: " + inquiryType;
  const body =
    "Name: " + fullName + "\r\n" +
    "Email: " + email + "\r\n" +
    "Product: " + product + "\r\n" +
    message;

    return (
      "mailto:" + TO_ADDRESS +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body)
    );
}

form.addEventListener("submit", function (event){
  event.preventDefault();
  window.location.href=buildMailto();
});