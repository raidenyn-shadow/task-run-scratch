# Spec Delta

## Purpose

The greeting capability formats a short, human-readable greeting for a supplied name.

## ADDED Requirements

### Requirement: Greeting a supplied name

The greeting helper SHALL return the exact text `Hello, <name>!` for the name it is given,
with the name inserted unchanged.

#### Scenario: Greet a name

- **WHEN** the helper is called with the name `Ana`
- **THEN** it returns `Hello, Ana!`
