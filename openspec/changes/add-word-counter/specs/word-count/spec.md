# Spec Delta

## Purpose

Lets a caller count the words in a piece of text, where words are separated by whitespace.

## ADDED Requirements

### Requirement: Count whitespace-separated words
The system SHALL return the number of words in a given text, where a word is a maximal run of non-whitespace characters.

#### Scenario: Three single-letter words
- **WHEN** the text is `a b c`
- **THEN** the count is 3

#### Scenario: Repeated and surrounding whitespace
- **WHEN** the text is `  hello   world\n`
- **THEN** the count is 2

#### Scenario: Empty or blank text
- **WHEN** the text is empty or contains only whitespace
- **THEN** the count is 0
