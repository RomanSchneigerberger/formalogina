#!/bin/bash
read -p "COMMIT MESSAGE" CM
git add .
git commit -m "$CM"
git push
exit;