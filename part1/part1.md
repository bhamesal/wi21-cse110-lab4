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
  
14.

  A) Outputs '32'. '3' is a string so 2 is type converted to a string in order to allow for addition to the string, adding the character '2' after '3'.
  
  B) Outputs 1. This is because subtraction operation can only be carried out if '3' is type converted to an integer since 2 is an integer and a math operation is needed.
  
  C) Outputs 3. This is because null value is converted to 0 in math operations.
  
  D) Outputs '3null'. This is because null is literally interpreted as a string 'null' in order to allow for addition to the string '3'.
  
  E) Outputs 4. This is because true is converted to 1 in math operations.
  
  F) Outputs 0. This is because false and null are converted to 0 in math operations
  
  G) Outputs '3undefined'. This is because undefined is literally interpreted as a string 'undefined' in order to allow for addition to the string "3".
  
  H) Outputs NaN. This is because subtraction must make it a math operation, and in a math operation, undefined is converted to NaN. Subtracting NaN from any value will output        NaN
  
15.

  A) Outputs true. This is because '2' is converted to a number to allow for a math operation comparision with integer 1.
  
  B) Outputs false. This is because it's false when comparing the first character in both strings to each other, as '2' is greater than '1'
  
  C) Outputs true. '2' undergoes type conversion to an integer, making the comparison true.
  
  D) Outputs false. The === operator is for strict equality, and the types are different in this case.
  
  E) Outputs false. True is converted to the number 1 in this operation.
  
  F) Outputs true. Any non-zero number passed into the Boolean() function evaluates to the "true" value.
  
16. "===" is a strict equality operator that doesn't allow for type conversion when comparing two values. "==" is different in that it allows for type conversion when comparing      two values.

17. Outputs 'How are you?'. This is because true = 1 in the first comparison operation. Then inside the subsequent else if() operation, Boolean(2) is called, which evaluates to      true since 2 is non-zero.

19. The result is [6, 8, 10]. This is because the doSomething method (which is a callback in this case) increments each value in the array by 2 before each element is multiplied     by 2 within the modifyArray for loop.

21. Output below:

1

4

3

2
  
