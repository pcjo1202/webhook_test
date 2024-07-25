const axios = require('axios');

// 배포 로직
async function deploy() {
  console.log('Deploying application...');
  // 여기에 실제 배포 로직을 작성해

  // 배포 완료 후 웹훅을 통해 Discord에 메시지 전송
  await sendDiscordWebhook();
}

const message = `
# test
## 이렇게 하는게 되나?
---
`;

// Discord 웹훅을 통해 메시지 전송
async function sendDiscordWebhook() {
  const webhookURL = process.env.MM_WEBHOOK_URL; // GitHub Secrets에 저장된 웹훅 URL을 사용

  const body = {
    text: `#### Test results for July 27th, 2017\n@channel please review failed tests.\n\n| Component  | Tests Run   | Tests Failed                                   |\n|:-----------|:-----------:|:-----------------------------------------------|\n| Server     | 948         | ✅ 0                           |\n| Web Client | 123         | ⚠️ 2 [(see details)](https://linktologs) |\n| iOS Client | 78          | ⚠️ 3 [(see details)](https://linktologs) |`,
  };

  try {
    const response = axios.post(webhookURL, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
  } catch (error) {
    console.error('Error sending message to Discord:', error);
  }
}

// 배포 스크립트 실행
deploy();
