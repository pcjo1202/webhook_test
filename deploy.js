const axios = require('axios');

// 배포 로직
async function deploy() {
  console.log('Deploying application...');
  // 여기에 실제 배포 로직을 작성해

  // 배포 완료 후 웹훅을 통해 Discord에 메시지 전송
  await sendDiscordWebhook();
}

// Discord 웹훅을 통해 메시지 전송
async function sendDiscordWebhook() {
  const webhookURL = process.env.DISCORD_WEBHOOK_URL; // GitHub Secrets에 저장된 웹훅 URL을 사용

  const data = {
    content: 'Deployment completed successfully!', //Test
  };

  try {
    const response = await axios.post(webhookURL, data);
    console.log('Message sent to Discord:', response.status);
  } catch (error) {
    console.error('Error sending message to Discord:', error);
  }
}

// 배포 스크립트 실행
deploy();
