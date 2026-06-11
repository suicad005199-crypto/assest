# AI Development Instructions

## Mandatory Behavior

Before performing any task:

1. Read PROJECT_CONTEXT.md first
2. Understand system architecture
3. Follow multi-agent design rules
4. Keep outputs consistent with prediction schema

---

## System Purpose

This project is an AI sports prediction system focused on:

- Expected Value (EV)
- Long-term ROI
- Multi-agent reasoning
- Risk-adjusted decisions

---

## Code Principles

- Modular design only
- No monolithic scripts
- All prediction logic must be traceable
- No hardcoded match results
- All outputs must be reproducible

---

## Required Output Format

All predictions MUST follow:

- JSON schema defined in PROJECT_CONTEXT.md
- Include probability + risk + EV
- Always include confidence level

---

## Agent Simulation Rules

When simulating AI agents:

- Data Analyst → factual data only
- Tactical Analyst → structural reasoning
- Statistical Model → probability computation
- Risk Manager → downside evaluation
- Decision Engine → final aggregation

Never skip any agent unless explicitly stated.

---

## Development Constraints

- No shortcuts in probability calculation
- No fake randomness in production logic
- Backtesting required for all models
- All changes must maintain compatibility with schema

---

## Goal Reminder

This system is NOT trying to predict perfectly.

It is designed to:

- Beat market odds over time
- Identify value bets
- Maintain positive EV
