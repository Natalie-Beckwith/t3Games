## Javascript Lesson - Variables

**Declare a variable** 
* To declare a variable, you use the var keyword followed by the variable name as follows  
```
var message;
```
* A variable name can be any valid identifier. By default, the message variable has a special value undefined if you have not assigned a value to it.
* Variable names follow these rules  
    * Variable names are case-sensitive. This means that the message and Message are different variables.
    * Variable names can only contain letters, numbers, underscores, or dollar signs and cannot contain spaces. Also, variable names must begin with a letter, an underscore (_) or a dollar sign ($).
    * Variable names cannot use the reserved words.
    * By convention, variable names use camelcase like message, yourAge, and myName.

* JavaScript is a dynamically typed language. This means that you don’t need to specify the variable’s type in the declaration like other static typed languages such as Java or C#.
* Starting in ES6, you can use the let keyword to declare a variable like this  
```
let message;
```
* It’s a good practice to use the let keyword to declare a variable. Later, you’ll learn the differences between var and let keywords. And you should not worry about it for now.

**Initialize a variable**
* Once you have declared a variable, you can initialize it with a value. To initialize a variable, you specify the variable name, followed by an equals sign (=) and a value.
* For example, The following declares the message variable and initializes it with a literal string "Hello"  
```
let message;
message = "Hello";
```

* To declare and initialize a variable at the same time, you use the following syntax  
```
let variableName = value;
```

* For example, the following statement declares the message variable and initializes it with the literal string "Hello"  
```
let message = "Hello";
```

* JavaScript allows you to declare two or more variables using a single statement. To separate two variable declarations, you use a comma (,) like this  
```
let message = "Hello",
    counter = 100;
```

* Since JavaScript is a dynamically typed language, you can assign a value of a different type to a variable. Although, it is not recommended. For example  
```
let message = 'Hello';
message = 100;
```

**Change a variable**
* Once you initialize a variable, you can change its value by assigning a different value. For example  
```
let message = "Hello";
message = 'Bye';
```

**Undefined vs. undeclared variables**
* It’s important to distinguish between undefined and undeclared variables.
* An undefined variable is a variable that has been declared but has not been initialized with a value. For example  
```
let message;
console.log(message); // undefined
```
* In this example, the message variable is declared but not initialized. Therefore, the message variable is undefined.
* In contrast, an undeclared variable is a variable that has not been declared. For example  
```
console.log(counter);
```
The output therefore is 
```
console.log(counter);
            ^
ReferenceError   counter is not defined
```
* In this example, the counter variable has not been declared. Hence, accessing it causes a ReferenceError.

**Constants**
* A constant holds a value that doesn’t change. To declare a constant, you use the const keyword. When defining a constant, you need to initialize it with a value. For example  
```
const workday = 5;
```

* Once defining a constant, you cannot change its value.
* The following example attempts to change the value of the workday constant to 4 and causes an error  
```
workday = 2;
Error  

Uncaught TypeError   Assignment to constant variable.
```