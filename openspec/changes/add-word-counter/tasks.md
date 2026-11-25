# Tasks

## 1. Word counter

- [ ] 1.1 Create `src/count.py` with `count_words(text)` returning `len(text.split())`, with a short docstring; verify `python3 -c "import sys; sys.path.insert(0, 'src'); from count import count_words as c; assert c('a b c') == 3; assert c('  hello   world\n') == 2; assert c('') == 0 and c('   ') == 0; print('ok')"` prints `ok`
- [ ] 1.2 Run `openspec validate add-word-counter --strict` and verify it passes
