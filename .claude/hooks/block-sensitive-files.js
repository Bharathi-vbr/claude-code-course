#!/usr/bin/env node

// Step 1: Read JSON from stdin
let raw = "";
process.stdin.on("data", (chunk) => (raw += chunk));

process.stdin.on("end", () => {
  // Step 2: Parse the tool call data
  const input = JSON.parse(raw);
  const { tool_name, tool_input } = input;

  const filePath = tool_input?.file_path || tool_input?.path || "";

  // Step 3: Check if it matches a restricted pattern
  const restricted =
    /\.(env)(\.|$)/i.test(filePath) || filePath.endsWith(".env");

  if (restricted) {
    // Step 4: Exit 2 + write error to stderr → Claude gets blocked with this message
    process.stderr.write(
      `Blocked: Access to sensitive file "${filePath}" is not allowed.\n` +
        `Tool "${tool_name}" tried to read a restricted path.\n`,
    );
    process.exit(2);
  }

  // All clear — exit 0 allows the tool call to proceed
  process.exit(0);
});
