# Spec Delta

## Purpose

Builds a friendly greeting message for a given name, so callers can greet a person by name in one call.

## ADDED Requirements

### Requirement: Greet a person by name
The system SHALL return the greeting `Hello, <name>!` for a given name, where `<name>` is the given name unchanged.

#### Scenario: Greeting Ann
- **WHEN** a caller asks for the greeting of the name `Ann`
- **THEN** the system returns `Hello, Ann!`
