#!/usr/bin/env bash

for f in `ls test/bookmarklets/*.bookmarklet.js`; do
  filename=$(basename "$f")
  expected="test/expected/$filename"

  ./bin/cli.js "$f" "$actual" | head -c -1 > $expected
done
