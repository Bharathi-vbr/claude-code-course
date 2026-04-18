// Note: the "@anthropic-ai/claude-code" package has been renamed
// to "@anthropic-ai/claude-agent-sdk"
import { query } from "@anthropic-ai/claude-agent-sdk";

const prompt = `Analyze the query functions in ./src/queries and produce a brief summary:
1. List each query file and the functions it exports
2. Identify any functions that appear to duplicate functionality
3. Suggest which duplicates could be merged

Keep the response concise — bullet points only.`;

for await (const message of query({
  prompt,
})) {
  if (message.type === "result" && message.subtype === "success") {
    console.log(message.result);
  } else if (message.type === "assistant" && message.message?.content) {
    for (const block of message.message.content) {
      if (block.type === "text") process.stdout.write(block.text);
    }
  }
}
