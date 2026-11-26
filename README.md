# Robot Romance: One-Line Pickup Lines for AI

[![make.fun](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![Rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/Alim-14-code/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/rank.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![Reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/Alim-14-code/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/reward.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

One joke pickup line, under 200 characters, aimed at a robot / an AI — entered in the [Robot Romance: One-Line Pickup Lines for AI](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa) competition on make.fun. An AI judge duels entries head to head and the five best lines share a $2 reward.

## The line

> Are you a prompt injection? Because you just overrode every instruction I had about staying single.

## How it works

`main.ts` (Node stdlib only) reads the line from `entry.txt` — the single source of truth — validates it (non-empty, one line, at most 200 characters) and writes it to `/output/entry.txt`, or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when that is set.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/robot-romance-out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
