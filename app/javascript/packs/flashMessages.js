import Toastify from "toastify-js";
import { Bootstrap} from "./application";

document.addEventListener("DOMContentLoaded", () => {
  const bgColors = {
    alert: "#f44336",
    error: "#f44336",
    notice: "#009688"
  }

  if (document.body.dataset.flashMessages) {
    JSON.parse(document.body.dataset.flashMessages).forEach((flashMessage) => {
      const [type, message] = flashMessage;
      Toastify({
        text: message,
        duration: 3000,
        close: true,
        backgroundColor: bgColors[type],
        stopOnFocus: true,
      }).showToast();
    });
  }
});
