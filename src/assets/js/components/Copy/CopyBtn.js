export default function wvCopyBtn({ feedback = "alert" } = {}) {
  const copyBtns = $(".wv_copy_btn");

  copyBtns.on("click", function () {
    const btn = $(this);
    const textToCopy = btn.data("text");
    const targetId = btn.data("target");
    let text = "";

    if (textToCopy) {
      text = textToCopy; // data-text 값을 복사
    } else if (targetId) {
      const target = $(`#${targetId}`);
      text = target.text(); // 대상 요소의 텍스트를 복사
    } else {
      console.warn("No text or target specified for copy.");
      return;
    }

    // 클립보드에 텍스트 복사
    navigator.clipboard
        .writeText(text)
        .then(() => {
          if (feedback === "alert") {
            alert("Copied to clipboard.");
          } else if (feedback === "modal") {
            const successModal = $("#copySuccessModal");
            if (successModal.length) {
              successModal.addClass("active");
              setTimeout(() => {
                successModal.removeClass("active");
              }, 2000); // 2초 후 모달 닫기
            }
          }
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
  });
}