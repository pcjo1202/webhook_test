const axios = require('axios');

// 웹훅을 통해 메시지 전송
async function sendWebhook(message) {
  const webhookURL = process.env.MM_WEBHOOK_URL; // GitHub Secrets에 저장된 웹훅 URL을 사용

  const body = {
    text: message,
  };

  try {
    const response = axios.post(webhookURL, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
  } catch (error) {
    console.error('Error :', error);
  }
}

// 배포 로직
async function deploy() {
  const message = `승호야 안녕`;
  await sendWebhook(message);
}

// 배포 스크립트 실행
deploy();
