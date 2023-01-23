import { toast } from "react-toastify";

const copyText = (text: string, successMsg?: string) => {
  let tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  toast.success(successMsg || "Copied!");
};

export default copyText;
