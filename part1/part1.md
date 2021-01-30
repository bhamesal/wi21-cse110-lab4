1. The updated value stored by i will be printed (updated from for loop incrementation). This works because using "var" to declare the variable "i" makes it a global variable that is accessible outside of the for loop code block it was declared in.

2. The value stored by discountedPrice will be printed. This works because using "var" to declare the variable "discountedPrice" makes it a global variable that is accessible outside of the for loop code block it was declared in.

3. The updated value of "finalPrice" will be printed (updated from line 7). This works because using "var" to declare the variable "discountedPrice" makes it a global variable that is accessible to line 13, and in fact, even using let to declare the variable would make it accessible to line 13 in this case.

4. The following is printed:

3

150

150

50 100 150

"3" is printed because i = 3 after its final incrementation on the for loop since the for loop only continues until it reaches the length of the prices array
"150" is printed because that's what discountedPrice equals after the final iteration of the for loop (final element in prices * (1 - discount) = 300 * .5 = 150)
"150" is printed again because that's what finalPrice equals after the final iteration of the for loop (final discounted price was not in need of rounding so it stayed the same)
Values inside "discounted" array are returned at the end, all of which being equal to 50% of their respective input prices since the discount specified was 50% off.

5. Error, no such variable. This is because using "let" to declare the variable "i" makes it so that it is not accessible outside of the for loop code block it was declared in.

6. Error, no such variable. This is because using "let" to declare the variable "discountedPrice" makes it so that it is not accessible outside of the for loop code block it was declared in.

7. The updated value of "finalPrice" will be printed (updated from line 7). This works because the variable "finalPrice" was not declared inside a code block that would make it inaccessible to the code on line 13.

8. The following is printed:

3

150

150

50 100 150

"3" is printed because i = 3 after its final incrementation on the for loop since the for loop only continues until it reaches the length of the prices array
"150" is printed because that's what discountedPrice equals after the final iteration of the for loop (final element in prices * (1 - discount) = 300 * .5 = 150)
"150" is printed again because that's what finalPrice equals after the final iteration of the for loop (final discounted price was not in need of rounding so it stayed the same)
Values inside "discounted" array are returned at the end, all of which being equal to 50% of their respective input prices since the discount specified was 50% off.

9. Error, no such variable. This is because using "let" to declare the variable "i" makes it so that it is not accessible outside of the for loop code block it was declared in.

10. Error, no such variable. This is because using "const" to declare the variable "discountedPrice" makes it so that it is not accessible outside of the for loop code block it was declared in.

11. Value stored in finalPrice is printed, which will be 0 in this case since finalPrice was declared as a "const" and originally set equal to 0, nullifying any updates from the for loop.

12. The following is printed:

3

150

150

50 100 150

13.

  A) student.name
  
  B) student["Grad Year"]
  
  C) student.greeting.function()
  
  D) student["Favorite Teacher"].name
  
  E) student.courseLoad[0]
