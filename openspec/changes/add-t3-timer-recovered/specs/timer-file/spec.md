# Spec Delta

## Purpose

The repository ships a static timer file, and the file's path and exact
contents are part of its specified behavior.

## ADDED Requirements

### Requirement: Timer file contents

The repository SHALL provide `src/timer.txt` whose only content line is
`recovered by the timer`.

#### Scenario: Reading the timer file

- **WHEN** `src/timer.txt` is read after the change is merged
- **THEN** the file exists and contains the line `recovered by the timer`
- **AND** the file contains no other non-empty lines
