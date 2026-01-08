@echo off
echo Pushing to remote repository...

git add .
git commit -m "Production copy1.7 - Added Facebook grid feed with Instagram-like layout, enhanced social media integration, and improved user experience"
git push https://github.com/sankeashok/gogreenin.git main

echo Push completed!
pause