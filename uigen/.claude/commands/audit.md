Run a full dependency security audit and verify nothing breaks:

1. Run `npm audit` and summarize any vulnerabilities found
2. Run `npm audit fix` to apply safe updates
3. Run `npm test` to verify tests still pass
4. Report what was fixed and flag anything that requires manual intervention
