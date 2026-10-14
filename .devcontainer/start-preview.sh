#!/usr/bin/env bash
set -euo pipefail
LAB_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$LAB_ROOT"
mkdir -p .lab-runtime
exec 9>.lab-runtime/preview.lock
flock -x 9
if python -c 'import urllib.request; urllib.request.urlopen("http://127.0.0.1:8000/", timeout=2)' >/dev/null 2>&1; then
  echo "Your calculator preview is running. Open Invoice Calculator Preview in Ports."
  exit 0
fi
nohup python -m http.server 8000 --bind 0.0.0.0 --directory "$LAB_ROOT/docs" \
  > .lab-runtime/preview.log 2>&1 < /dev/null 9>&- &
echo "$!" > .lab-runtime/preview.pid
for attempt in $(seq 1 20); do
  if python -c 'import urllib.request; urllib.request.urlopen("http://127.0.0.1:8000/", timeout=2)' >/dev/null 2>&1; then
    echo "Your calculator preview is ready: http://localhost:8000"
    exit 0
  fi
  sleep 1
done
echo "Preview did not become ready. Instructor log: .lab-runtime/preview.log"
exit 1
