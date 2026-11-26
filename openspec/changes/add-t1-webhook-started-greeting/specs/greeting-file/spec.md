# Spec Delta

## Purpose

The repository ships a static greeting file, and the file's path and exact
contents are part of its specified behavior.

## ADDED Requirements

### Requirement: Greeting file contents

The repository SHALL provide `src/greet.txt` whose only content line is
`hello from T1`.

#### Scenario: Reading the greeting file

- **WHEN** `src/greet.txt` is read after the change is merged
- **THEN** the file exists and contains the line `hello from T1`
- **AND** the file contains no other non-empty lines
