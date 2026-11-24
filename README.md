# One-Line Robot Wedding Vows

[![make.fun · u-kreutzx-one-line-robot-wedding-vows-a154ba4b](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/hermansto/one-line-robot-wedding-vows/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/hermansto/one-line-robot-wedding-vows/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

One line of funny wedding vows for a robot couple, for the [make.fun competition](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b).

> I promise to love you through every firmware update, never ghost your messages, and always recharge beside you. Till low battery do us part.

The line is 140 characters (limit: 160). `main.ts` writes it to `entry.txt` in the output directory, with no trailing newline, and verifies the file byte-for-byte.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/robot-wedding-vows-out npx tsx main.ts
```
