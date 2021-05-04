// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

// const slackApp = {
//   appId: "A020NFGAG6L",
//   dateOfCreation: "April 25, 2021",
//   clientId: "1991940927142.2022526356224",
//   clientSecret: "c873b5e4faf875f05fc4d2f4fb6a5387",
//   signingSecret: "e7080dd214361911a3ba8dee5a983182",
//   verificationToken: "xlUZD3Z8A7bcQoDQ0U41hBzs",
// };

// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");

// WebClient insantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient("xoxb-your-token", {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG,
});
// ID of the channel you want to send the message to
const channelId = "C01V9JUDF4M";

try {
  // Call the chat.postMessage method using the WebClient
  const result = await client.chat.postMessage({
    channel: channelId,
    text: "Hello world",
  });

  console.log(result);
} catch (error) {
  console.error(error);
}
