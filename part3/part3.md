
The bug was that instead of adding the first and second numbers as integers, they were added as strings. This is because "num1", "num2", and "sum" variables were written in string notation thanks to the quotation marks. So instead of 1 + 3 = 4 we get "1" + "3" = "13".

Simply remove the quotation marks to fix.

Refer to part3pics.jpg for relevant pictures.

1. citylots.json

2. part2.js

3. 11.7 MB

4. 3.85s

5. User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36

6. Server: Apache

7. Last-Modified: Tue, 26 Jan 2021 22:14:13 GMT

8. Content-Type: application/json

9. fetchData
