const core = require("@actions/core");
const github = require("@actions/github");

// 和外部的交互都需要使用 core 来做处理
try {
  // `who-to-greet` input defined in action metadata file
  // 这个就是给到 action 的参数
  // 通过 gitInput 来获取用户传入过来的参数
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  // 用户可以通过 steps.[stepId].outputs.time 来获取到 output 的key
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
