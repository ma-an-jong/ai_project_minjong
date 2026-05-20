// HTML 요소를 가져옵니다.
const nameInput = document.getElementById("nameInput");
const startButton = document.getElementById("startButton");
const messageArea = document.getElementById("messageArea");

// 필요한 요소가 모두 있는지 확인합니다.
if (!nameInput || !startButton || !messageArea) {
  console.error("필수 DOM 요소를 찾지 못했습니다. index.html의 id를 확인하세요.");
  throw new Error("필수 DOM 요소 누락");
}

// 화면에 메시지를 보여주는 함수입니다.
function showMessage(text, type) {
  messageArea.innerHTML = "";

  const messageBox = document.createElement("div");
  messageBox.className = type;
  messageBox.textContent = text;

  messageArea.appendChild(messageBox);
}

// 실습 시작 버튼을 눌렀을 때 실행되는 함수입니다.
function handleStartClick() {
  const name = nameInput.value.trim();

  if (name) {
    showMessage(`${name}님, 환영합니다! AI 협업 개발 실습을 시작합니다.`, "success");
  } else {
    showMessage("이름을 입력한 뒤 다시 시도해주세요", "warning");
  }
}

startButton.addEventListener("click", handleStartClick);
