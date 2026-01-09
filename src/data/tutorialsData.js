// COMPREHENSIVE TUTORIAL DATABASE - Deep learning content for all languages
// 5-10 hour tutorials with exercises and solutions for each language

export const tutorialsData = {
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: '🟨',
    color: '#F7DF1E',
    tutorials: [
      {
        id: 'js-basics',
        title: 'JavaScript Fundamentals',
        level: 'Beginner',
        duration: '5-6 hours',
        description: 'Learn JavaScript basics from scratch - variables, functions, arrays, and objects.',
        topics: ['Variables', 'Data Types', 'Functions', 'Arrays', 'Objects', 'Conditionals', 'Loops'],
        lessons: [
          {
            id: 'js-basics-1',
            title: 'Variables & Data Types',
            duration: '45 min',
            content: `Learn the fundamentals of JavaScript variables and data types.

**Key Concepts:**
- let, const, var differences
- Primitive types (string, number, boolean, undefined, null)
- Type conversion and coercion
- Variable naming conventions`,
            code: `// Variables - let, const, var
let name = "Max";        // Can be reassigned
const age = 25;          // Cannot be reassigned
var oldWay = "legacy";   // Function-scoped (avoid!)

// Data Types
const stringType = "Hello World";
const numberType = 42;
const booleanType = true;
const undefinedType = undefined;
const nullType = null;

// typeof operator
console.log(typeof stringType);  // "string"
console.log(typeof numberType);  // "number"
console.log(typeof nullType);    // "object" (JavaScript quirk!)

// Type conversion
const str = "123";
const num = Number(str);        // 123
const bool = Boolean(0);        // false
const back = String(num);       // "123"

// Template literals (ES6)
const greeting = \`Hello, \${name}! You are \${age} years old.\`;
console.log(greeting);

// String methods
const text = "JavaScript";
console.log(text.length);           // 10
console.log(text.toUpperCase());    // "JAVASCRIPT"
console.log(text.slice(0, 4));      // "Java"
console.log(text.includes("Script")); // true`,
            exercise: `**Exercise 1:** Create a program that:
1. Declares variables for a person (name, age, city, isStudent)
2. Uses template literals to create a bio text
3. Converts the age to a string and checks its type
4. Creates an uppercase version of the city name

**Expected Output:**
\`\`\`
Bio: John Doe, 22 years old from NEW YORK
Age type as string: string
\`\`\``,
            solution: `// Solution
const personName = "John Doe";
const personAge = 22;
const personCity = "New York";
const isStudent = true;

// Bio with template literal
const bio = \`Bio: \${personName}, \${personAge} years old from \${personCity.toUpperCase()}\`;
console.log(bio);

// Age as string
const ageString = String(personAge);
console.log(\`Age type as string: \${typeof ageString}\`);

// Alternative: Check if student
if (isStudent) {
    console.log(\`\${personName} is currently a student.\`);
}`
          },
          {
            id: 'js-basics-2',
            title: 'Functions',
            duration: '60 min',
            content: `Master JavaScript functions - the building blocks of any program.

**Key Concepts:**
- Function declarations vs expressions
- Arrow functions (ES6)
- Parameters and return values
- Default parameters
- Rest and spread operators`,
            code: `// Function Declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function (ES6) - Concise syntax
const multiply = (a, b) => a * b;

// Arrow function with block
const calculate = (a, b) => {
    const result = a + b;
    return result * 2;
};

// Default parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(5));      // 25 (5^2)
console.log(power(5, 3));   // 125 (5^3)

// Rest parameters (...)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // 15

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// Higher-order functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);     // [2, 4, 6, 8, 10]
const evens = numbers.filter(n => n % 2 === 0);  // [2, 4]
const total = numbers.reduce((sum, n) => sum + n, 0);  // 15

// Callback functions
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John" };
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Data received:", data);
});`,
            exercise: `**Exercise 2:** Create a calculator with these functions:
1. \`add(a, b)\` - returns sum
2. \`subtract(a, b)\` - returns difference
3. \`calculate(operation, a, b)\` - takes operation name and numbers
4. \`processNumbers(...numbers)\` - takes any amount of numbers and returns:
   - sum
   - average
   - max
   - min

**Example Usage:**
\`\`\`javascript
console.log(calculate('add', 5, 3));  // 8
console.log(processNumbers(1, 2, 3, 4, 5));  
// { sum: 15, average: 3, max: 5, min: 1 }
\`\`\``,
            solution: `// Solution
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";

function calculate(operation, a, b) {
    const operations = {
        'add': add,
        'subtract': subtract,
        'multiply': multiply,
        'divide': divide
    };
    
    const fn = operations[operation];
    return fn ? fn(a, b) : "Invalid operation";
}

function processNumbers(...numbers) {
    if (numbers.length === 0) return null;
    
    const sum = numbers.reduce((total, n) => total + n, 0);
    const average = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    
    return { sum, average, max, min };
}

// Test
console.log(calculate('add', 5, 3));      // 8
console.log(calculate('multiply', 4, 7)); // 28
console.log(processNumbers(1, 2, 3, 4, 5));
// { sum: 15, average: 3, max: 5, min: 1 }`
          }
        ]
      }
    ]
  },

  python: {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3776AB',
    tutorials: [
      {
        id: 'py-basics',
        title: 'Python Fundamentals',
        level: 'Beginner',
        duration: '5-6 hours',
        description: 'Learn Python from the ground up - syntax, data structures, and functions.',
        topics: ['Variables', 'Data Types', 'Lists', 'Dictionaries', 'Functions', 'Control Flow'],
        lessons: [
          {
            id: 'py-basics-1',
            title: 'Python Basics',
            duration: '50 min',
            content: `Learn Python fundamentals - the most beginner-friendly programming language.

**Key Concepts:**
- Variables and naming conventions
- Data types (int, float, str, bool)
- String formatting (f-strings)
- User input
- Type conversion`,
            code: `# Variables - no declaration needed!
name = "Alice"
age = 25
height = 1.65
is_student = True

# Print with f-strings (Python 3.6+)
print(f"Name: {name}, Age: {age}")

# Multiple assignment
x, y, z = 1, 2, 3

# Type checking
print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>

# Type conversion
age_str = str(age)           # "25"
number = int("42")           # 42
decimal = float("3.14")      # 3.14

# String methods
text = "python programming"
print(text.upper())          # "PYTHON PROGRAMMING"
print(text.capitalize())     # "Python programming"
print(text.split())          # ["python", "programming"]
print("_".join(["a", "b"]))  # "a_b"

# String operations
greeting = "Hello, " + name
repeated = "Ha" * 3          # "HaHaHa"
substring = text[0:6]        # "python"

# Input (always returns string!)
user_name = input("Enter name: ")
user_age = int(input("Enter age: "))

# Boolean operations
is_adult = age >= 18
has_permission = is_adult and is_student
print(f"Adult: {is_adult}, Has permission: {has_permission}")`,
            exercise: `**Exercise 1:** Create a personal information program:
1. Ask user for name, age, and favorite color
2. Convert age to integer
3. Check if user is an adult (>= 18)
4. Print a formatted message with all info
5. Calculate birth year (current year - age)

**Expected Output:**
\`\`\`
Name: John
Age: 22 (adult)
Favorite color: Blue
Born in: 2004
\`\`\``,
            solution: `# Solution
import datetime

# Get user input
name = input("Enter your name: ")
age = int(input("Enter your age: "))
favorite_color = input("Enter your favorite color: ")

# Check adult status
age_status = "adult" if age >= 18 else "minor"

# Calculate birth year
current_year = datetime.datetime.now().year
birth_year = current_year - age

# Print formatted output
print(f"\\nName: {name}")
print(f"Age: {age} ({age_status})")
print(f"Favorite color: {favorite_color}")
print(f"Born in: {birth_year}")

# Alternative: All in one
print(f"""
Profile Summary:
- Name: {name.title()}
- Age: {age} years old
- Status: {age_status.upper()}
- Favorite Color: {favorite_color.capitalize()}
- Birth Year: {birth_year}
""")`
          }
        ]
      }
    ]
  },

  java: {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: '#007396',
    tutorials: [
      {
        id: 'java-basics',
        title: 'Java Fundamentals',
        level: 'Beginner',
        duration: '6-8 hours',
        description: 'Master Java basics - OOP, syntax, and core concepts.',
        topics: ['Classes', 'Methods', 'Variables', 'Data Types', 'Control Flow', 'OOP'],
        lessons: [
          {
            id: 'java-basics-1',
            title: 'Java Basics & OOP',
            duration: '60 min',
            content: `Learn Java fundamentals with object-oriented programming.

**Key Concepts:**
- Classes and objects
- Methods and constructors
- Access modifiers
- Data types
- Static vs instance`,
            code: `// Basic Java class
public class Person {
    // Instance variables (fields)
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Setter methods
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
    
    // Instance method
    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age);
    }
    
    // Static method
    public static void printInfo() {
        System.out.println("This is the Person class");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        // Create objects
        Person person1 = new Person("John", 25);
        Person person2 = new Person("Alice", 30);
        
        // Call methods
        person1.introduce();  // "Hi, I'm John and I'm 25"
        person2.introduce();  // "Hi, I'm Alice and I'm 30"
        
        // Use getters
        System.out.println(person1.getName());  // "John"
        
        // Use setters
        person1.setAge(26);
        
        // Static method (call on class)
        Person.printInfo();
    }
}`,
            exercise: `**Exercise 1:** Create a \`BankAccount\` class with:
- Fields: accountNumber, balance, ownerName
- Constructor to initialize all fields
- Methods:
  - deposit(amount) - adds to balance
  - withdraw(amount) - removes from balance (check if sufficient)
  - getBalance() - returns current balance
  - transfer(amount, otherAccount) - transfers money to another account

**Test it:**
Create 2 accounts, deposit money, transfer between them, print balances.`,
            solution: `// Solution
public class BankAccount {
    private String accountNumber;
    private double balance;
    private String ownerName;
    
    // Constructor
    public BankAccount(String accountNumber, String ownerName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance >= 0 ? initialBalance : 0;
    }
    
    // Deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }
    
    // Withdraw money
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            return true;
        } else {
            System.out.println("Insufficient funds or invalid amount");
            return false;
        }
    }
    
    // Transfer money
    public boolean transfer(double amount, BankAccount other) {
        if (withdraw(amount)) {
            other.deposit(amount);
            System.out.println("Transferred $" + amount + " to " + other.ownerName);
            return true;
        }
        return false;
    }
    
    // Get balance
    public double getBalance() {
        return balance;
    }
    
    // Get account info
    public void printInfo() {
        System.out.println(ownerName + "'s account (" + accountNumber + "): $" + balance);
    }
}

// Test
public class Main {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount("001", "John", 1000);
        BankAccount account2 = new BankAccount("002", "Alice", 500);
        
        account1.printInfo();  // John's account (001): $1000.0
        account2.printInfo();  // Alice's account (002): $500.0
        
        account1.deposit(200);
        account1.withdraw(150);
        account1.transfer(300, account2);
        
        account1.printInfo();  // John's account (001): $750.0
        account2.printInfo();  // Alice's account (002): $800.0
    }
}`
          }
        ]
      }
    ]
  },

  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: '🔷',
    color: '#3178C6',
    tutorials: [
      {
        id: 'ts-basics',
        title: 'TypeScript Fundamentals',
        level: 'Intermediate',
        duration: '6-7 hours',
        description: 'Master TypeScript - types, interfaces, generics, and advanced features.',
        topics: ['Types', 'Interfaces', 'Generics', 'Type Guards', 'Advanced Types'],
        lessons: [
          {
            id: 'ts-basics-1',
            title: 'Types & Interfaces',
            duration: '60 min',
            content: `Learn TypeScript type system and interfaces for type-safe code.

**Key Concepts:**
- Basic types (string, number, boolean)
- Interfaces and type aliases
- Optional and readonly properties
- Union and intersection types
- Type assertions`,
            code: `// Basic Types
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;
let notDefined: undefined;
let empty: null = null;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane"];

// Tuple - fixed length array with types
let person: [string, number] = ["John", 25];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Red;

// Interface - define object shape
interface User {
    name: string;
    age: number;
    email?: string;  // Optional property
    readonly id: number;  // Cannot be changed
}

const user: User = {
    id: 1,
    name: "John",
    age: 25
};

// user.id = 2;  // Error! readonly property

// Type Alias
type Point = {
    x: number;
    y: number;
};

const point: Point = { x: 10, y: 20 };

// Union Types - can be one of several types
let value: string | number;
value = "hello";  // OK
value = 42;       // OK

// Intersection Types - combine multiple types
type Admin = User & {
    role: string;
    permissions: string[];
};

const admin: Admin = {
    id: 1,
    name: "Admin",
    age: 30,
    role: "superadmin",
    permissions: ["read", "write", "delete"]
};

// Type Assertion
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// Function types
interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;`,
            exercise: `**Exercise:** Create a TypeScript system for a library:

1. Define an \`Book\` interface with:
   - id (number, readonly)
   - title (string)
   - author (string)
   - isbn (string)
   - year (number)
   - available (boolean)

2. Define a \`Library\` interface with:
   - books (array of Book)
   - addBook method
   - removeBook method
   - findBookByTitle method

3. Create a type \`LibraryMember\` that extends User and adds:
   - memberId (string)
   - borrowedBooks (array of Book)

4. Implement functions to work with these types`,
            solution: `// Solution
interface Book {
    readonly id: number;
    title: string;
    author: string;
    isbn: string;
    year: number;
    available: boolean;
}

interface Library {
    books: Book[];
    addBook(book: Book): void;
    removeBook(id: number): boolean;
    findBookByTitle(title: string): Book | undefined;
}

interface User {
    name: string;
    age: number;
    email?: string;
}

type LibraryMember = User & {
    memberId: string;
    borrowedBooks: Book[];
};

// Implementation
class LibrarySystem implements Library {
    books: Book[] = [];
    
    addBook(book: Book): void {
        this.books.push(book);
        console.log(\`Added: \${book.title}\`);
    }
    
    removeBook(id: number): boolean {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
    
    findBookByTitle(title: string): Book | undefined {
        return this.books.find(b => 
            b.title.toLowerCase().includes(title.toLowerCase())
        );
    }
}

// Usage
const library = new LibrarySystem();

const book1: Book = {
    id: 1,
    title: "TypeScript Handbook",
    author: "Microsoft",
    isbn: "123-456",
    year: 2023,
    available: true
};

library.addBook(book1);

const member: LibraryMember = {
    name: "John Doe",
    age: 25,
    email: "john@example.com",
    memberId: "M001",
    borrowedBooks: []
};

console.log(library.findBookByTitle("TypeScript"));`
          }
        ]
      }
    ]
  },

  go: {
    id: 'go',
    name: 'Go',
    icon: '🐹',
    color: '#00ADD8',
    tutorials: [
      {
        id: 'go-basics',
        title: 'Go Fundamentals',
        level: 'Beginner',
        duration: '5-6 hours',
        description: 'Learn Go basics - syntax, goroutines, channels, and concurrency.',
        topics: ['Variables', 'Functions', 'Structs', 'Goroutines', 'Channels'],
        lessons: [
          {
            id: 'go-basics-1',
            title: 'Go Basics & Structs',
            duration: '50 min',
            content: `Learn Go fundamentals and struct types.

**Key Concepts:**
- Variable declaration
- Functions
- Structs (like classes)
- Methods
- Pointers`,
            code: `package main

import "fmt"

// Variables
var globalVar = "I'm global"

func main() {
    // Variable declaration
    var name string = "John"
    age := 25  // Short declaration (type inferred)
    
    // Multiple variables
    var x, y int = 1, 2
    a, b := 3, 4
    
    // Constants
    const PI = 3.14159
    
    fmt.Println(name, age)
}

// Functions
func add(a int, b int) int {
    return a + b
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Named return values
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return  // Naked return
}

// Structs - like classes
type Person struct {
    Name string
    Age  int
}

// Method on struct
func (p Person) Greet() string {
    return fmt.Sprintf("Hi, I'm %s", p.Name)
}

// Method with pointer receiver (can modify)
func (p *Person) HaveBirthday() {
    p.Age++
}

func main() {
    // Create struct
    person1 := Person{Name: "John", Age: 25}
    person2 := Person{"Jane", 30}  // Field names optional
    
    // Access fields
    fmt.Println(person1.Name)
    
    // Call methods
    fmt.Println(person1.Greet())
    person1.HaveBirthday()
    
    // Pointers
    ptr := &person1
    ptr.Age = 26  // Auto-dereference
    
    // Arrays and Slices
    var arr [5]int = [5]int{1, 2, 3, 4, 5}
    slice := []int{1, 2, 3}
    slice = append(slice, 4, 5)
    
    // Maps
    ages := make(map[string]int)
    ages["John"] = 25
    ages["Jane"] = 30
    
    // Check if key exists
    age, exists := ages["John"]
    if exists {
        fmt.Println(age)
    }
}`,
            exercise: `**Exercise:** Create a simple banking system in Go:

1. Define a \`BankAccount\` struct with:
   - AccountNumber (string)
   - Owner (string)
   - Balance (float64)

2. Implement methods:
   - Deposit(amount float64) - adds to balance
   - Withdraw(amount float64) error - removes from balance (check sufficient funds)
   - Transfer(amount float64, to *BankAccount) error
   - GetBalance() float64

3. Create 2 accounts, deposit money, transfer between them`,
            solution: `package main

import (
    "fmt"
    "errors"
)

type BankAccount struct {
    AccountNumber string
    Owner         string
    Balance       float64
}

// Deposit adds money to account
func (acc *BankAccount) Deposit(amount float64) {
    if amount > 0 {
        acc.Balance += amount
        fmt.Printf("Deposited $%.2f to %s\\n", amount, acc.Owner)
    }
}

// Withdraw removes money from account
func (acc *BankAccount) Withdraw(amount float64) error {
    if amount <= 0 {
        return errors.New("amount must be positive")
    }
    if amount > acc.Balance {
        return errors.New("insufficient funds")
    }
    acc.Balance -= amount
    fmt.Printf("Withdrawn $%.2f from %s\\n", amount, acc.Owner)
    return nil
}

// Transfer sends money to another account
func (acc *BankAccount) Transfer(amount float64, to *BankAccount) error {
    if err := acc.Withdraw(amount); err != nil {
        return err
    }
    to.Deposit(amount)
    fmt.Printf("Transferred $%.2f from %s to %s\\n", 
        amount, acc.Owner, to.Owner)
    return nil
}

// GetBalance returns current balance
func (acc *BankAccount) GetBalance() float64 {
    return acc.Balance
}

// PrintInfo displays account information
func (acc *BankAccount) PrintInfo() {
    fmt.Printf("Account: %s | Owner: %s | Balance: $%.2f\\n",
        acc.AccountNumber, acc.Owner, acc.Balance)
}

func main() {
    // Create accounts
    acc1 := &BankAccount{
        AccountNumber: "001",
        Owner:         "John",
        Balance:       1000.0,
    }
    
    acc2 := &BankAccount{
        AccountNumber: "002",
        Owner:         "Jane",
        Balance:       500.0,
    }
    
    // Operations
    acc1.PrintInfo()
    acc2.PrintInfo()
    
    acc1.Deposit(200)
    acc1.Withdraw(150)
    
    if err := acc1.Transfer(300, acc2); err != nil {
        fmt.Println("Transfer error:", err)
    }
    
    fmt.Println("\\nFinal balances:")
    acc1.PrintInfo()
    acc2.PrintInfo()
}`
          }
        ]
      }
    ]
  },
  
  c: {
    id: 'c',
    name: 'C',
    icon: '🔷',
    color: '#A8B9CC',
    tutorials: [
      {
        id: 'c-pointers',
        title: 'Pointers & Memory Management',
        level: 'Intermediate',
        duration: '60 min',
        description: 'Master C pointers and dynamic memory allocation',
        topics: ['Pointers', 'malloc/calloc', 'free', 'Memory leaks', '2D arrays'],
        lessons: [
          {
            id: 1,
            title: 'Pointers and Dynamic Memory',
            duration: '60 min',
            content: 'Learn about pointers, dynamic memory allocation with malloc/calloc/realloc, and proper memory management with free.',
            code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Basic pointer usage
void pointerBasics() {
    int x = 42;
    int *ptr = &x;  // Pointer to x
    
    printf("Value: %d\\n", *ptr);  // Dereference
    printf("Address: %p\\n", (void*)ptr);
    
    *ptr = 100;  // Modify through pointer
    printf("New value: %d\\n", x);
}

// Dynamic memory allocation
int* createArray(int size) {
    int *arr = (int*)malloc(size * sizeof(int));
    if (arr == NULL) {
        fprintf(stderr, "Memory allocation failed\\n");
        return NULL;
    }
    
    for (int i = 0; i < size; i++) {
        arr[i] = i * 2;
    }
    return arr;
}

// 2D array allocation
int** create2DArray(int rows, int cols) {
    int **matrix = (int**)malloc(rows * sizeof(int*));
    if (matrix == NULL) return NULL;
    
    for (int i = 0; i < rows; i++) {
        matrix[i] = (int*)malloc(cols * sizeof(int));
        if (matrix[i] == NULL) {
            // Cleanup on failure
            for (int j = 0; j < i; j++) {
                free(matrix[j]);
            }
            free(matrix);
            return NULL;
        }
    }
    return matrix;
}

void free2DArray(int **matrix, int rows) {
    for (int i = 0; i < rows; i++) {
        free(matrix[i]);
    }
    free(matrix);
}

// String manipulation
char* duplicateString(const char *src) {
    if (src == NULL) return NULL;
    
    char *dest = (char*)malloc(strlen(src) + 1);
    if (dest != NULL) {
        strcpy(dest, src);
    }
    return dest;
}

int main() {
    // Pointer basics
    pointerBasics();
    
    // Dynamic array
    int *arr = createArray(5);
    if (arr != NULL) {
        for (int i = 0; i < 5; i++) {
            printf("%d ", arr[i]);
        }
        printf("\\n");
        free(arr);  // Always free!
    }
    
    // 2D array
    int **matrix = create2DArray(3, 4);
    if (matrix != NULL) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 4; j++) {
                matrix[i][j] = i * 4 + j;
            }
        }
        free2DArray(matrix, 3);
    }
    
    // String duplication
    char *str = duplicateString("Hello, C!");
    if (str != NULL) {
        printf("%s\\n", str);
        free(str);
    }
    
    return 0;
}`,
            exercise: 'Create a program that allocates a 2D matrix, fills it with values, transposes it, and properly frees all memory.',
            solution: `#include <stdio.h>
#include <stdlib.h>

int** allocateMatrix(int rows, int cols) {
    int **matrix = (int**)malloc(rows * sizeof(int*));
    if (matrix == NULL) return NULL;
    
    for (int i = 0; i < rows; i++) {
        matrix[i] = (int*)calloc(cols, sizeof(int));
        if (matrix[i] == NULL) {
            for (int j = 0; j < i; j++) free(matrix[j]);
            free(matrix);
            return NULL;
        }
    }
    return matrix;
}

void freeMatrix(int **matrix, int rows) {
    for (int i = 0; i < rows; i++) {
        free(matrix[i]);
    }
    free(matrix);
}

int** transpose(int **matrix, int rows, int cols) {
    int **transposed = allocateMatrix(cols, rows);
    if (transposed == NULL) return NULL;
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
}

void printMatrix(int **matrix, int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%3d ", matrix[i][j]);
        }
        printf("\\n");
    }
}

int main() {
    int rows = 3, cols = 4;
    
    // Allocate and fill matrix
    int **matrix = allocateMatrix(rows, cols);
    if (matrix == NULL) {
        fprintf(stderr, "Memory allocation failed\\n");
        return 1;
    }
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            matrix[i][j] = i * cols + j + 1;
        }
    }
    
    printf("Original matrix:\\n");
    printMatrix(matrix, rows, cols);
    
    // Transpose
    int **transposed = transpose(matrix, rows, cols);
    if (transposed != NULL) {
        printf("\\nTransposed matrix:\\n");
        printMatrix(transposed, cols, rows);
        freeMatrix(transposed, cols);
    }
    
    freeMatrix(matrix, rows);
    return 0;
}`
          }
        ]
      }
    ]
  },
  
  rust: {
    id: 'rust',
    name: 'Rust',
    icon: '🦀',
    color: '#CE412B',
    tutorials: [
      {
        id: 'rust-ownership',
        title: 'Ownership & Borrowing',
        level: 'Intermediate',
        duration: '70 min',
        description: 'Understand Rust\'s unique ownership system and borrowing rules',
        topics: ['Ownership', 'Borrowing', 'Lifetimes', 'References', 'Move semantics'],
        lessons: [
          {
            id: 1,
            title: 'Ownership and Borrowing Fundamentals',
            duration: '70 min',
            content: 'Master Rust\'s ownership system, borrowing rules, and lifetime management for memory-safe programming.',
            code: `// Ownership basics
fn ownership_basics() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 moved to s2
    // println!("{}", s1);  // ERROR: s1 no longer valid
    println!("{}", s2);  // OK
}

// Borrowing with references
fn borrowing_example() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);  // Borrow
    println!("'{}' has length {}", s1, len);  // s1 still valid
}

fn calculate_length(s: &String) -> usize {
    s.len()
}

// Mutable references
fn mutable_borrowing() {
    let mut s = String::from("hello");
    change(&mut s);
    println!("{}", s);
}

fn change(s: &mut String) {
    s.push_str(", world");
}

// Multiple immutable references OK
fn multiple_borrows() {
    let s = String::from("hello");
    let r1 = &s;
    let r2 = &s;
    println!("{} and {}", r1, r2);  // OK
}

// Lifetime annotations
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

// Struct with lifetime
struct Book<'a> {
    title: &'a str,
    author: &'a str,
}

impl<'a> Book<'a> {
    fn new(title: &'a str, author: &'a str) -> Self {
        Book { title, author }
    }
    
    fn info(&self) -> String {
        format!("{} by {}", self.title, self.author)
    }
}

// Ownership transfer
fn takes_ownership(s: String) {
    println!("Taking ownership: {}", s);
}  // s dropped here

fn gives_ownership() -> String {
    String::from("yours")
}

fn takes_and_gives(s: String) -> String {
    s  // Return ownership
}

fn main() {
    // Basic ownership
    ownership_basics();
    
    // Borrowing
    borrowing_example();
    mutable_borrowing();
    multiple_borrows();
    
    // Lifetimes
    let str1 = String::from("long string");
    let str2 = "short";
    let result = longest(str1.as_str(), str2);
    println!("Longest: {}", result);
    
    // Struct with lifetime
    let book = Book::new("Rust Programming", "Steve Klabnik");
    println!("{}", book.info());
    
    // Ownership transfer
    let s = gives_ownership();
    let s = takes_and_gives(s);
    println!("Final: {}", s);
}`,
            exercise: 'Create a library management system with Book structs that properly handles ownership, borrowing, and lifetimes.',
            solution: `use std::collections::HashMap;

#[derive(Debug, Clone)]
struct Book {
    id: u32,
    title: String,
    author: String,
    available: bool,
}

impl Book {
    fn new(id: u32, title: String, author: String) -> Self {
        Book {
            id,
            title,
            author,
            available: true,
        }
    }
}

struct Library {
    books: HashMap<u32, Book>,
    next_id: u32,
}

impl Library {
    fn new() -> Self {
        Library {
            books: HashMap::new(),
            next_id: 1,
        }
    }
    
    fn add_book(&mut self, title: String, author: String) -> u32 {
        let id = self.next_id;
        let book = Book::new(id, title, author);
        self.books.insert(id, book);
        self.next_id += 1;
        id
    }
    
    fn borrow_book(&mut self, id: u32) -> Option<&Book> {
        if let Some(book) = self.books.get_mut(&id) {
            if book.available {
                book.available = false;
                return self.books.get(&id);
            }
        }
        None
    }
    
    fn return_book(&mut self, id: u32) -> bool {
        if let Some(book) = self.books.get_mut(&id) {
            book.available = true;
            return true;
        }
        false
    }
    
    fn find_by_author(&self, author: &str) -> Vec<&Book> {
        self.books
            .values()
            .filter(|b| b.author == author)
            .collect()
    }
    
    fn list_available(&self) -> Vec<&Book> {
        self.books
            .values()
            .filter(|b| b.available)
            .collect()
    }
}

fn main() {
    let mut library = Library::new();
    
    // Add books
    let id1 = library.add_book(
        "The Rust Programming Language".to_string(),
        "Steve Klabnik".to_string()
    );
    let id2 = library.add_book(
        "Programming Rust".to_string(),
        "Jim Blandy".to_string()
    );
    
    // Borrow a book
    if let Some(book) = library.borrow_book(id1) {
        println!("Borrowed: {:?}", book);
    }
    
    // List available
    println!("\\nAvailable books:");
    for book in library.list_available() {
        println!("  {:?}", book);
    }
    
    // Return book
    library.return_book(id1);
    println!("\\nAfter return:");
    for book in library.list_available() {
        println!("  {:?}", book);
    }
}`
          }
        ]
      }
    ]
  },
  
  swift: {
    id: 'swift',
    name: 'Swift',
    icon: '🦅',
    color: '#FA7343',
    tutorials: [
      {
        id: 'swift-optionals',
        title: 'Optionals & Safe Unwrapping',
        level: 'Beginner',
        duration: '50 min',
        description: 'Master Swift optionals and safe value handling',
        topics: ['Optionals', 'Optional binding', 'Guard', 'Nil coalescing', 'Optional chaining'],
        lessons: [
          {
            id: 1,
            title: 'Optionals and Safe Unwrapping',
            duration: '50 min',
            content: 'Learn Swift\'s optional types and various safe unwrapping techniques to handle nil values.',
            code: `import Foundation

// Optional basics
var name: String? = "John"
var age: Int? = nil

// Force unwrapping (dangerous!)
// print(age!)  // Crash if nil!

// Optional binding with if-let
if let unwrappedName = name {
    print("Name is \\(unwrappedName)")
} else {
    print("Name is nil")
}

// Guard statement
func greet(person: String?) {
    guard let name = person else {
        print("No name provided")
        return
    }
    print("Hello, \\(name)!")
}

// Nil coalescing operator
let displayName = name ?? "Anonymous"
print(displayName)

// Optional chaining
struct Address {
    var street: String
    var city: String
}

struct Person {
    var name: String
    var address: Address?
}

let person = Person(name: "Alice", address: nil)
let city = person.address?.city ?? "Unknown"

// Multiple optional binding
func processUser(name: String?, email: String?, age: Int?) {
    if let name = name,
       let email = email,
       let age = age,
       age >= 18 {
        print("\\(name) (\\(email)) is \\(age) years old")
    } else {
        print("Invalid or incomplete user data")
    }
}

// Implicitly unwrapped optionals
class ViewController {
    var label: UILabel!  // Will be set in viewDidLoad
    
    func setup() {
        // label is automatically unwrapped
        label.text = "Hello"
    }
}

// Optional map and flatMap
let numbers: [Int?] = [1, 2, nil, 4, 5]
let doubled = numbers.compactMap { $0 }.map { $0 * 2 }
print(doubled)  // [2, 4, 8, 10]

// Optional chaining with methods
struct Contact {
    var email: String?
    
    func sendEmail() -> Bool {
        guard let email = email else { return false }
        print("Sending to \\(email)")
        return true
    }
}

let contact: Contact? = Contact(email: "test@example.com")
let sent = contact?.sendEmail() ?? false

print("Examples completed")`,
            exercise: 'Create a User struct with optional properties and implement safe methods to display user information.',
            solution: `import Foundation

struct Address {
    let street: String
    let city: String
    let zipCode: String
}

struct User {
    let id: Int
    let username: String
    let email: String?
    let phoneNumber: String?
    let address: Address?
    let age: Int?
    
    // Safe display methods
    func displayBasicInfo() -> String {
        var info = "User #\\(id): \\(username)"
        
        if let email = email {
            info += "\\nEmail: \\(email)"
        }
        
        if let phone = phoneNumber {
            info += "\\nPhone: \\(phone)"
        }
        
        return info
    }
    
    func displayFullAddress() -> String? {
        guard let addr = address else {
            return nil
        }
        
        return """
        \\(addr.street)
        \\(addr.city), \\(addr.zipCode)
        """
    }
    
    func canVote() -> Bool {
        guard let userAge = age else {
            return false
        }
        return userAge >= 18
    }
    
    // Method with multiple optional checks
    func sendNotification(message: String) -> Bool {
        // Try email first, then phone
        if let email = email {
            print("Sending email to \\(email): \\(message)")
            return true
        } else if let phone = phoneNumber {
            print("Sending SMS to \\(phone): \\(message)")
            return true
        }
        
        print("No contact method available for \\(username)")
        return false
    }
}

// Usage examples
let user1 = User(
    id: 1,
    username: "alice",
    email: "alice@example.com",
    phoneNumber: "+1234567890",
    address: Address(street: "123 Main St", city: "New York", zipCode: "10001"),
    age: 25
)

let user2 = User(
    id: 2,
    username: "bob",
    email: nil,
    phoneNumber: nil,
    address: nil,
    age: nil
)

print(user1.displayBasicInfo())
print("\\n---\\n")

if let address = user1.displayFullAddress() {
    print("Address:\\n\\(address)")
}

print("\\n---\\n")
print("Can vote: \\(user1.canVote())")
print("\\n---\\n")

user1.sendNotification(message: "Welcome!")
user2.sendNotification(message: "Welcome!")

// Using optional chaining
let cityName = user1.address?.city ?? "Unknown city"
print("\\nUser 1 lives in: \\(cityName)")

let user2City = user2.address?.city ?? "Unknown city"
print("User 2 lives in: \\(user2City)")`
          }
        ]
      }
    ]
  },
  
  kotlin: {
    id: 'kotlin',
    name: 'Kotlin',
    icon: '🟣',
    color: '#7F52FF',
    tutorials: [
      {
        id: 'kotlin-nullsafety',
        title: 'Null Safety & Smart Casts',
        level: 'Beginner',
        duration: '50 min',
        description: 'Learn Kotlin\'s built-in null safety features',
        topics: ['Nullable types', 'Safe calls', 'Elvis operator', 'Smart casts', 'lateinit'],
        lessons: [
          {
            id: 1,
            title: 'Null Safety in Kotlin',
            duration: '50 min',
            content: 'Master Kotlin\'s null safety system with nullable types, safe calls, and smart casting.',
            code: `// Nullable types
var name: String? = "John"
var age: Int? = null

// Safe call operator
val length = name?.length  // Returns null if name is null
println(length)

// Elvis operator
val displayName = name ?: "Anonymous"
println(displayName)

// Safe call with let
name?.let {
    println("Name is $it")
}

// Not-null assertion (dangerous!)
// val len = name!!.length  // Throws exception if null

// Smart casts
fun describe(obj: Any): String {
    return when (obj) {
        is String -> "String of length \${obj.length}"  // Smart cast
        is Int -> "Integer: $obj"
        is List<*> -> "List of size \${obj.size}"
        else -> "Unknown type"
    }
}

// Safe casting
fun processValue(value: Any) {
    val str: String? = value as? String  // Returns null if not String
    println(str ?: "Not a string")
}

// Nullable collections
val numbers: List<Int?> = listOf(1, null, 3, null, 5)
val nonNullNumbers = numbers.filterNotNull()
println(nonNullNumbers)  // [1, 3, 5]

// lateinit for non-null properties
class UserManager {
    lateinit var currentUser: String
    
    fun initialize(user: String) {
        currentUser = user
    }
    
    fun isInitialized(): Boolean {
        return ::currentUser.isInitialized
    }
}

// Extension function for null safety
fun String?.orDefault(default: String = "N/A"): String {
    return this ?: default
}

// Multiple safe calls
data class Address(val street: String?, val city: String?)
data class Person(val name: String, val address: Address?)

val person: Person? = Person("Alice", Address("Main St", null))
val city = person?.address?.city ?: "Unknown"

// Safe call with method chaining
class DataProcessor {
    fun process(data: String?): String? {
        return data
            ?.trim()
            ?.uppercase()
            ?.takeIf { it.isNotEmpty() }
    }
}

// Run and let for null handling
fun processUser(user: String?) {
    user?.run {
        println("Processing user: $this")
        println("Length: \${this.length}")
    } ?: run {
        println("No user to process")
    }
}

fun main() {
    println(describe("Hello"))
    println(describe(42))
    println(describe(listOf(1, 2, 3)))
    
    processValue("test")
    processValue(123)
    
    val manager = UserManager()
    println("Initialized: \${manager.isInitialized()}")
    manager.initialize("admin")
    println("Initialized: \${manager.isInitialized()}")
    
    val result: String? = null
    println(result.orDefault())
    
    processUser("John")
    processUser(null)
}`,
            exercise: 'Create a shopping cart system with null-safe product handling and optional discounts.',
            solution: `data class Product(
    val id: Int,
    val name: String,
    val price: Double,
    val category: String?
)

data class CartItem(
    val product: Product,
    var quantity: Int
)

class ShoppingCart {
    private val items = mutableListOf<CartItem>()
    var discountCode: String? = null
    
    fun addItem(product: Product, quantity: Int = 1) {
        val existingItem = items.find { it.product.id == product.id }
        
        if (existingItem != null) {
            existingItem.quantity += quantity
        } else {
            items.add(CartItem(product, quantity))
        }
        
        println("Added \${quantity}x \${product.name}")
    }
    
    fun removeItem(productId: Int) {
        items.removeIf { it.product.id == productId }
    }
    
    fun updateQuantity(productId: Int, newQuantity: Int) {
        items.find { it.product.id == productId }?.apply {
            quantity = newQuantity
        } ?: println("Product not found in cart")
    }
    
    fun calculateSubtotal(): Double {
        return items.sumOf { it.product.price * it.quantity }
    }
    
    fun applyDiscount(subtotal: Double): Double {
        return when (discountCode?.uppercase()) {
            "SAVE10" -> subtotal * 0.9
            "SAVE20" -> subtotal * 0.8
            "HALF" -> subtotal * 0.5
            else -> subtotal
        }
    }
    
    fun getTotal(): Double {
        val subtotal = calculateSubtotal()
        return applyDiscount(subtotal)
    }
    
    fun displayCart() {
        if (items.isEmpty()) {
            println("Cart is empty")
            return
        }
        
        println("\\n=== Shopping Cart ===")
        items.forEach { item ->
            val category = item.product.category ?: "Uncategorized"
            println("\${item.product.name} (\$category)")
            println("  $\${item.product.price} x \${item.quantity} = $\${item.product.price * item.quantity}")
        }
        
        val subtotal = calculateSubtotal()
        println("\\nSubtotal: $\${String.format("%.2f", subtotal)}")
        
        discountCode?.let {
            val total = getTotal()
            val discount = subtotal - total
            println("Discount ($it): -$\${String.format("%.2f", discount)}")
            println("Total: $\${String.format("%.2f", total)}")
        } ?: run {
            println("Total: $\${String.format("%.2f", subtotal)}")
        }
    }
    
    fun findByCategory(category: String?): List<CartItem> {
        return items.filter { it.product.category == category }
    }
}

fun main() {
    val cart = ShoppingCart()
    
    // Create products
    val laptop = Product(1, "Laptop", 999.99, "Electronics")
    val mouse = Product(2, "Mouse", 29.99, "Electronics")
    val book = Product(3, "Kotlin Book", 45.00, null)
    
    // Add items
    cart.addItem(laptop, 1)
    cart.addItem(mouse, 2)
    cart.addItem(book, 1)
    
    // Display without discount
    cart.displayCart()
    
    // Apply discount
    println("\\n--- Applying Discount ---")
    cart.discountCode = "SAVE20"
    cart.displayCart()
    
    // Update quantity
    println("\\n--- Updating Quantity ---")
    cart.updateQuantity(2, 3)
    cart.displayCart()
    
    // Find by category
    val electronics = cart.findByCategory("Electronics")
    println("\\nElectronics items: \${electronics.size}")
}`
          }
        ]
      }
    ]
  },
  
  ruby: {
    id: 'ruby',
    name: 'Ruby',
    icon: '💎',
    color: '#CC342D',
    tutorials: [
      {
        id: 'ruby-blocks',
        title: 'Blocks, Procs & Lambdas',
        level: 'Intermediate',
        duration: '55 min',
        description: 'Master Ruby\'s powerful closure features',
        topics: ['Blocks', 'Yield', 'Procs', 'Lambdas', 'Closures'],
        lessons: [
          {
            id: 1,
            title: 'Blocks, Procs, and Lambdas',
            duration: '55 min',
            content: 'Learn Ruby\'s closure features including blocks, procs, lambdas, and their differences.',
            code: `# Blocks - anonymous code chunks
def greet
  puts "Hello"
  yield if block_given?
  puts "Goodbye"
end

greet { puts "from block!" }

# Block with parameters
def repeat(times)
  times.times { |i| yield i }
end

repeat(3) { |n| puts "Iteration \#{n}" }

# Procs - stored blocks
my_proc = Proc.new { |name| puts "Hello, \#{name}!" }
my_proc.call("Alice")
my_proc.call("Bob")

# Lambdas - strict procs
my_lambda = lambda { |x, y| x + y }
# or
my_lambda = ->(x, y) { x + y }

result = my_lambda.call(5, 3)
puts result  # 8

# Differences between Proc and Lambda
# 1. Argument handling
proc_example = Proc.new { |x, y| puts "\#{x}, \#{y}" }
proc_example.call(1)  # Works, y is nil

lambda_example = lambda { |x, y| puts "\#{x}, \#{y}" }
# lambda_example.call(1)  # Error: wrong number of arguments

# 2. Return behavior
def test_proc
  my_proc = Proc.new { return "proc return" }
  my_proc.call
  "end of method"  # Never reached
end

def test_lambda
  my_lambda = lambda { return "lambda return" }
  my_lambda.call
  "end of method"  # This is reached
end

puts test_proc     # "proc return"
puts test_lambda   # "end of method"

# Closures - capturing variables
def create_counter
  count = 0
  lambda { count += 1 }
end

counter = create_counter
puts counter.call  # 1
puts counter.call  # 2
puts counter.call  # 3

# Practical: Higher-order functions
def apply_operation(array, &block)
  array.map(&block)
end

numbers = [1, 2, 3, 4, 5]
doubled = apply_operation(numbers) { |n| n * 2 }
puts doubled.inspect

# Symbol to proc
names = ["alice", "bob", "charlie"]
puts names.map(&:upcase).inspect
puts names.map(&:capitalize).inspect

# Custom iterator
class CustomArray
  def initialize(*items)
    @items = items
  end
  
  def each
    @items.each { |item| yield item }
  end
  
  def select
    result = []
    each { |item| result << item if yield item }
    result
  end
end

arr = CustomArray.new(1, 2, 3, 4, 5)
evens = arr.select { |n| n.even? }
puts evens.inspect`,
            exercise: 'Create a BankAccount class that uses blocks/procs to log transactions and apply custom validation.',
            solution: `class BankAccount
  attr_reader :balance, :transactions
  
  def initialize(initial_balance = 0, &logger)
    @balance = initial_balance
    @transactions = []
    @logger = logger || lambda { |msg| puts msg }
    log("Account created with balance: $\#{@balance}")
  end
  
  def deposit(amount, &validator)
    # Use custom validator if provided
    validator ||= lambda { |amt| amt > 0 }
    
    unless validator.call(amount)
      log("Invalid deposit: $\#{amount}")
      return false
    end
    
    @balance += amount
    record_transaction("DEPOSIT", amount)
    log("Deposited $\#{amount}. New balance: $\#{@balance}")
    true
  end
  
  def withdraw(amount, &validator)
    # Use custom validator if provided
    validator ||= lambda { |amt| amt > 0 && amt <= @balance }
    
    unless validator.call(amount)
      log("Invalid withdrawal: $\#{amount}")
      return false
    end
    
    @balance -= amount
    record_transaction("WITHDRAW", amount)
    log("Withdrew $\#{amount}. New balance: $\#{@balance}")
    true
  end
  
  def transfer(amount, to_account)
    if withdraw(amount)
      to_account.deposit(amount)
      log("Transferred $\#{amount}")
      true
    else
      false
    end
  end
  
  def filter_transactions(&block)
    @transactions.select(&block)
  end
  
  def apply_interest(rate)
    interest = @balance * rate
    deposit(interest) do |amount|
      amount > 0  # Always allow interest deposits
    end
  end
  
  private
  
  def record_transaction(type, amount)
    @transactions << {
      type: type,
      amount: amount,
      timestamp: Time.now,
      balance: @balance
    }
  end
  
  def log(message)
    @logger.call("[BankAccount] \#{message}")
  end
end

# Custom logger
custom_logger = Proc.new do |msg|
  timestamp = Time.now.strftime("%H:%M:%S")
  puts "[\#{timestamp}] \#{msg}"
end

# Create accounts with custom logger
account1 = BankAccount.new(1000, &custom_logger)
account2 = BankAccount.new(500, &custom_logger)

# Deposits with custom validation
account1.deposit(500) { |amt| amt >= 100 }  # OK
account1.deposit(50) { |amt| amt >= 100 }   # Fails

# Standard operations
account1.withdraw(200)
account1.transfer(300, account2)

# Apply interest
account1.apply_interest(0.05)  # 5% interest

# Filter transactions
puts "\\n--- Large Transactions ---"
large_transactions = account1.filter_transactions do |t|
  t[:amount] > 200
end

large_transactions.each do |t|
  puts "\#{t[:type]}: $\#{t[:amount]}"
end

# Summary with block
puts "\\n--- Transaction Summary ---"
account1.transactions.each do |t|
  puts "\#{t[:type].ljust(10)} $\#{t[:amount].to_s.rjust(8)} -> Balance: $\#{t[:balance]}"
end`
          }
        ]
      }
    ]
  },
  
  sql: {
    id: 'sql',
    name: 'SQL',
    icon: '🗄️',
    color: '#00758F',
    tutorials: [
      {
        id: 'sql-joins',
        title: 'JOINs & Complex Queries',
        level: 'Intermediate',
        duration: '60 min',
        description: 'Master SQL joins and advanced query techniques',
        topics: ['INNER JOIN', 'LEFT JOIN', 'Subqueries', 'CTEs', 'Window functions'],
        lessons: [
          {
            id: 1,
            title: 'SQL JOINs and Advanced Queries',
            duration: '60 min',
            content: 'Learn different types of joins, subqueries, CTEs, and window functions for complex data retrieval.',
            code: `-- Sample database schema
CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    name VARCHAR(100),
    country VARCHAR(50)
);

CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(200),
    author_id INT,
    published_year INT,
    price DECIMAL(10, 2),
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE sales (
    sale_id INT PRIMARY KEY,
    book_id INT,
    quantity INT,
    sale_date DATE,
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);

-- INNER JOIN - only matching rows
SELECT b.title, a.name, b.price
FROM books b
INNER JOIN authors a ON b.author_id = a.author_id
WHERE b.published_year > 2020;

-- LEFT JOIN - all from left, matching from right
SELECT a.name, COUNT(b.book_id) as book_count
FROM authors a
LEFT JOIN books b ON a.author_id = b.author_id
GROUP BY a.author_id, a.name
ORDER BY book_count DESC;

-- Multiple JOINs
SELECT 
    a.name as author,
    b.title,
    SUM(s.quantity) as total_sold,
    SUM(s.quantity * b.price) as revenue
FROM authors a
INNER JOIN books b ON a.author_id = b.author_id
INNER JOIN sales s ON b.book_id = s.book_id
GROUP BY a.author_id, a.name, b.book_id, b.title
HAVING SUM(s.quantity) > 100
ORDER BY revenue DESC;

-- Subquery in WHERE
SELECT title, price
FROM books
WHERE price > (
    SELECT AVG(price)
    FROM books
);

-- Subquery in SELECT
SELECT 
    a.name,
    (SELECT COUNT(*) 
     FROM books b 
     WHERE b.author_id = a.author_id) as book_count
FROM authors a;

-- Common Table Expression (CTE)
WITH author_stats AS (
    SELECT 
        a.author_id,
        a.name,
        COUNT(b.book_id) as book_count,
        AVG(b.price) as avg_price
    FROM authors a
    LEFT JOIN books b ON a.author_id = b.author_id
    GROUP BY a.author_id, a.name
)
SELECT *
FROM author_stats
WHERE book_count > 2
ORDER BY avg_price DESC;

-- Recursive CTE (hierarchy)
WITH RECURSIVE employee_hierarchy AS (
    SELECT employee_id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    SELECT e.employee_id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.employee_id
)
SELECT * FROM employee_hierarchy;

-- Window functions
SELECT 
    a.name,
    b.title,
    b.price,
    ROW_NUMBER() OVER (PARTITION BY a.author_id ORDER BY b.price DESC) as price_rank,
    AVG(b.price) OVER (PARTITION BY a.author_id) as author_avg_price
FROM authors a
INNER JOIN books b ON a.author_id = b.author_id;

-- CASE statement
SELECT 
    title,
    price,
    CASE 
        WHEN price < 10 THEN 'Budget'
        WHEN price BETWEEN 10 AND 30 THEN 'Standard'
        ELSE 'Premium'
    END as price_category
FROM books;`,
            exercise: 'Create a library database query that finds the top 5 authors by revenue, shows their books, and categorizes them by sales performance.',
            solution: `-- Sample data
INSERT INTO authors VALUES
(1, 'J.K. Rowling', 'UK'),
(2, 'Stephen King', 'USA'),
(3, 'Agatha Christie', 'UK'),
(4, 'Dan Brown', 'USA'),
(5, 'Paulo Coelho', 'Brazil');

INSERT INTO books VALUES
(1, 'Harry Potter 1', 1, 1997, 19.99),
(2, 'Harry Potter 2', 1, 1998, 21.99),
(3, 'The Shining', 2, 1977, 15.99),
(4, 'It', 2, 1986, 18.99),
(5, 'Murder on Orient Express', 3, 1934, 12.99),
(6, 'Da Vinci Code', 4, 2003, 24.99),
(7, 'The Alchemist', 5, 1988, 14.99);

INSERT INTO sales VALUES
(1, 1, 150, '2024-01-15'),
(2, 1, 200, '2024-02-20'),
(3, 2, 180, '2024-01-10'),
(4, 3, 90, '2024-03-05'),
(5, 4, 120, '2024-02-15'),
(6, 5, 60, '2024-01-20'),
(7, 6, 250, '2024-03-10'),
(8, 7, 180, '2024-02-25');

-- Complete solution query
WITH book_sales AS (
    SELECT 
        b.book_id,
        b.title,
        b.author_id,
        b.price,
        COALESCE(SUM(s.quantity), 0) as total_sold,
        COALESCE(SUM(s.quantity * b.price), 0) as revenue
    FROM books b
    LEFT JOIN sales s ON b.book_id = s.book_id
    GROUP BY b.book_id, b.title, b.author_id, b.price
),
author_revenue AS (
    SELECT 
        a.author_id,
        a.name as author_name,
        a.country,
        SUM(bs.revenue) as total_revenue,
        SUM(bs.total_sold) as total_books_sold,
        COUNT(DISTINCT bs.book_id) as number_of_books,
        AVG(bs.price) as avg_book_price
    FROM authors a
    LEFT JOIN book_sales bs ON a.author_id = bs.author_id
    GROUP BY a.author_id, a.name, a.country
),
ranked_authors AS (
    SELECT 
        *,
        ROW_NUMBER() OVER (ORDER BY total_revenue DESC) as revenue_rank,
        CASE 
            WHEN total_revenue > 5000 THEN 'Top Performer'
            WHEN total_revenue > 2000 THEN 'Strong Performer'
            WHEN total_revenue > 500 THEN 'Moderate Performer'
            ELSE 'Emerging'
        END as performance_category
    FROM author_revenue
)
SELECT 
    ra.revenue_rank,
    ra.author_name,
    ra.country,
    ra.number_of_books,
    ra.total_books_sold,
    ROUND(ra.total_revenue, 2) as total_revenue,
    ROUND(ra.avg_book_price, 2) as avg_book_price,
    ra.performance_category,
    bs.title as book_title,
    bs.total_sold as book_sold,
    ROUND(bs.revenue, 2) as book_revenue,
    CASE 
        WHEN bs.total_sold > 200 THEN 'Bestseller'
        WHEN bs.total_sold > 100 THEN 'Popular'
        ELSE 'Standard'
    END as book_category
FROM ranked_authors ra
INNER JOIN book_sales bs ON ra.author_id = bs.author_id
WHERE ra.revenue_rank <= 5
ORDER BY 
    ra.revenue_rank, 
    bs.revenue DESC;

-- Alternative: Summary only (without individual books)
SELECT 
    revenue_rank,
    author_name,
    country,
    number_of_books,
    total_books_sold,
    ROUND(total_revenue, 2) as total_revenue,
    performance_category
FROM ranked_authors
WHERE revenue_rank <= 5
ORDER BY revenue_rank;`
          }
        ]
      }
    ]
  },
  
  php: {
    id: 'php',
    name: 'PHP',
    icon: '🐘',
    color: '#777BB4',
    tutorials: [
      {
        id: 'php-oop',
        title: 'OOP & Namespaces',
        level: 'Intermediate',
        duration: '60 min',
        description: 'Master PHP object-oriented programming features',
        topics: ['Classes', 'Interfaces', 'Traits', 'Namespaces', 'Autoloading'],
        lessons: [
          {
            id: 1,
            title: 'Object-Oriented PHP',
            duration: '60 min',
            content: 'Learn modern PHP OOP including classes, interfaces, traits, and namespace management.',
            code: `<?php
// Namespace declaration
namespace App\\Models;

// Interface
interface PaymentInterface {
    public function processPayment(float $amount): bool;
    public function refund(string $transactionId): bool;
}

// Trait
trait Timestampable {
    protected $createdAt;
    protected $updatedAt;
    
    public function setCreatedAt() {
        $this->createdAt = new \\DateTime();
    }
    
    public function setUpdatedAt() {
        $this->updatedAt = new \\DateTime();
    }
    
    public function getCreatedAt(): ?\\DateTime {
        return $this->createdAt;
    }
}

// Abstract class
abstract class PaymentProcessor implements PaymentInterface {
    protected $transactions = [];
    
    abstract protected function validate(float $amount): bool;
    
    public function getTransactions(): array {
        return $this->transactions;
    }
    
    protected function logTransaction(string $id, float $amount) {
        $this->transactions[] = [
            'id' => $id,
            'amount' => $amount,
            'date' => new \\DateTime()
        ];
    }
}

// Concrete class
class CreditCardProcessor extends PaymentProcessor {
    use Timestampable;
    
    private $cardNumber;
    private $expiryDate;
    
    public function __construct(string $cardNumber, string $expiryDate) {
        $this->cardNumber = $cardNumber;
        $this->expiryDate = $expiryDate;
        $this->setCreatedAt();
    }
    
    protected function validate(float $amount): bool {
        return $amount > 0 && $amount < 10000;
    }
    
    public function processPayment(float $amount): bool {
        if (!$this->validate($amount)) {
            return false;
        }
        
        $transactionId = uniqid('txn_');
        $this->logTransaction($transactionId, $amount);
        $this->setUpdatedAt();
        
        echo "Processed $$amount via credit card\\n";
        return true;
    }
    
    public function refund(string $transactionId): bool {
        echo "Refunding transaction: $transactionId\\n";
        return true;
    }
}

// Another implementation
class PayPalProcessor extends PaymentProcessor {
    use Timestampable;
    
    private $email;
    
    public function __construct(string $email) {
        $this->email = $email;
        $this->setCreatedAt();
    }
    
    protected function validate(float $amount): bool {
        return $amount > 0 && !empty($this->email);
    }
    
    public function processPayment(float $amount): bool {
        if (!$this->validate($amount)) {
            return false;
        }
        
        $transactionId = uniqid('pp_');
        $this->logTransaction($transactionId, $amount);
        $this->setUpdatedAt();
        
        echo "Processed $$amount via PayPal ($this->email)\\n";
        return true;
    }
    
    public function refund(string $transactionId): bool {
        echo "Refunding PayPal transaction: $transactionId\\n";
        return true;
    }
}

// Static methods and properties
class Config {
    private static $settings = [];
    
    public static function set(string $key, $value): void {
        self::$settings[$key] = $value;
    }
    
    public static function get(string $key, $default = null) {
        return self::$settings[$key] ?? $default;
    }
}

// Usage
Config::set('currency', 'USD');
Config::set('max_amount', 5000);

$cc = new CreditCardProcessor('4111-1111-1111-1111', '12/25');
$cc->processPayment(99.99);
$cc->processPayment(150.00);

$paypal = new PayPalProcessor('user@example.com');
$paypal->processPayment(75.50);

echo "\\nCredit Card transactions:\\n";
print_r($cc->getTransactions());

echo "\\nCreated at: " . $cc->getCreatedAt()->format('Y-m-d H:i:s');
?>`,
            exercise: 'Create a complete shopping cart system with product management, pricing strategies (using Strategy pattern), and order processing.',
            solution: `<?php
namespace App\\Shop;

// Product interface
interface ProductInterface {
    public function getId(): int;
    public function getName(): string;
    public function getPrice(): float;
    public function getCategory(): string;
}

// Pricing strategy interface
interface PricingStrategyInterface {
    public function calculate(float $subtotal): float;
}

// Regular pricing
class RegularPricing implements PricingStrategyInterface {
    public function calculate(float $subtotal): float {
        return $subtotal;
    }
}

// Discount pricing
class DiscountPricing implements PricingStrategyInterface {
    private $discountPercent;
    
    public function __construct(float $discountPercent) {
        $this->discountPercent = $discountPercent;
    }
    
    public function calculate(float $subtotal): float {
        return $subtotal * (1 - $this->discountPercent / 100);
    }
}

// Product class
class Product implements ProductInterface {
    private $id;
    private $name;
    private $price;
    private $category;
    
    public function __construct(int $id, string $name, float $price, string $category) {
        $this->id = $id;
        $this->name = $name;
        $this->price = $price;
        $this->category = $category;
    }
    
    public function getId(): int { return $this->id; }
    public function getName(): string { return $this->name; }
    public function getPrice(): float { return $this->price; }
    public function getCategory(): string { return $this->category; }
}

// Cart item
class CartItem {
    private $product;
    private $quantity;
    
    public function __construct(ProductInterface $product, int $quantity = 1) {
        $this->product = $product;
        $this->quantity = $quantity;
    }
    
    public function getProduct(): ProductInterface {
        return $this->product;
    }
    
    public function getQuantity(): int {
        return $this->quantity;
    }
    
    public function setQuantity(int $quantity): void {
        $this->quantity = $quantity;
    }
    
    public function getTotal(): float {
        return $this->product->getPrice() * $this->quantity;
    }
}

// Shopping cart
class ShoppingCart {
    private $items = [];
    private $pricingStrategy;
    
    public function __construct(PricingStrategyInterface $strategy = null) {
        $this->pricingStrategy = $strategy ?? new RegularPricing();
    }
    
    public function setPricingStrategy(PricingStrategyInterface $strategy): void {
        $this->pricingStrategy = $strategy;
    }
    
    public function addItem(ProductInterface $product, int $quantity = 1): void {
        $productId = $product->getId();
        
        if (isset($this->items[$productId])) {
            $currentQty = $this->items[$productId]->getQuantity();
            $this->items[$productId]->setQuantity($currentQty + $quantity);
        } else {
            $this->items[$productId] = new CartItem($product, $quantity);
        }
    }
    
    public function removeItem(int $productId): void {
        unset($this->items[$productId]);
    }
    
    public function updateQuantity(int $productId, int $quantity): void {
        if (isset($this->items[$productId])) {
            if ($quantity <= 0) {
                $this->removeItem($productId);
            } else {
                $this->items[$productId]->setQuantity($quantity);
            }
        }
    }
    
    public function getSubtotal(): float {
        return array_reduce($this->items, function($total, $item) {
            return $total + $item->getTotal();
        }, 0.0);
    }
    
    public function getTotal(): float {
        $subtotal = $this->getSubtotal();
        return $this->pricingStrategy->calculate($subtotal);
    }
    
    public function getItems(): array {
        return $this->items;
    }
    
    public function display(): void {
        echo "\\n=== Shopping Cart ===\\n";
        
        foreach ($this->items as $item) {
            $product = $item->getProduct();
            printf(
                "%s (%s) - $%.2f x %d = $%.2f\\n",
                $product->getName(),
                $product->getCategory(),
                $product->getPrice(),
                $item->getQuantity(),
                $item->getTotal()
            );
        }
        
        echo "\\n";
        printf("Subtotal: $%.2f\\n", $this->getSubtotal());
        
        if ($this->pricingStrategy instanceof DiscountPricing) {
            printf("Discount applied\\n");
        }
        
        printf("Total: $%.2f\\n", $this->getTotal());
    }
}

// Usage
$laptop = new Product(1, 'Laptop', 999.99, 'Electronics');
$mouse = new Product(2, 'Mouse', 29.99, 'Electronics');
$keyboard = new Product(3, 'Keyboard', 79.99, 'Electronics');

$cart = new ShoppingCart();
$cart->addItem($laptop, 1);
$cart->addItem($mouse, 2);
$cart->addItem($keyboard, 1);

$cart->display();

echo "\\n--- Applying 15% Discount ---";
$cart->setPricingStrategy(new DiscountPricing(15));
$cart->display();

?>`
          }
        ]
      }
    ]
  },
  
  csharp: {
    id: 'csharp',
    name: 'C#',
    icon: '💜',
    color: '#953DAC',
    tutorials: [
      {
        id: 'csharp-linq',
        title: 'LINQ & Collections',
        level: 'Intermediate',
        duration: '55 min',
        description: 'Master C# LINQ for powerful data queries',
        topics: ['LINQ', 'Lambda', 'IEnumerable', 'Select', 'Where', 'GroupBy'],
        lessons: [
          {
            id: 1,
            title: 'LINQ Fundamentals',
            duration: '55 min',
            content: 'Learn LINQ query syntax and method syntax for data manipulation.',
            code: `using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        
        // Query syntax
        var evenQuery = from n in numbers
                        where n % 2 == 0
                        select n;
        
        // Method syntax (preferred)
        var evenMethod = numbers.Where(n => n % 2 == 0);
        
        // Select (Map)
        var squared = numbers.Select(n => n * n);
        
        // Filter and transform
        var result = numbers
            .Where(n => n > 5)
            .Select(n => n * 2)
            .ToList();
        
        // First, FirstOrDefault
        var first = numbers.First(n => n > 5);
        var firstOrNull = numbers.FirstOrDefault(n => n > 100);
        
        // Any, All
        bool hasEven = numbers.Any(n => n % 2 == 0);
        bool allPositive = numbers.All(n => n > 0);
        
        // Sum, Average, Count
        int sum = numbers.Sum();
        double avg = numbers.Average();
        int count = numbers.Count(n => n > 5);
        
        // GroupBy
        var groups = numbers.GroupBy(n => n % 2 == 0 ? "Even" : "Odd");
        foreach (var group in groups)
        {
            Console.WriteLine($"{group.Key}: {string.Join(", ", group)}");
        }
        
        // OrderBy
        var sorted = numbers.OrderByDescending(n => n);
        
        // Distinct
        var unique = new[] { 1, 2, 2, 3, 3, 4 }.Distinct();
        
        // Join
        var people = new[] 
        {
            new { Id = 1, Name = "Alice" },
            new { Id = 2, Name = "Bob" }
        };
        
        var orders = new[]
        {
            new { PersonId = 1, Product = "Book" },
            new { PersonId = 2, Product = "Pen" }
        };
        
        var joined = from p in people
                     join o in orders on p.Id equals o.PersonId
                     select new { p.Name, o.Product };
    }
}`,
            exercise: 'Create a student management system using LINQ to filter, group, and analyze student data.',
            solution: `using System;
using System.Collections.Generic;
using System.Linq;

class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Course { get; set; }
    public int Age { get; set; }
    public double Grade { get; set; }
}

class Program
{
    static void Main()
    {
        var students = new List<Student>
        {
            new Student { Id = 1, Name = "Alice", Course = "CS", Age = 20, Grade = 85.5 },
            new Student { Id = 2, Name = "Bob", Course = "Math", Age = 22, Grade = 92.0 },
            new Student { Id = 3, Name = "Charlie", Course = "CS", Age = 21, Grade = 78.5 },
            new Student { Id = 4, Name = "Diana", Course = "Physics", Age = 20, Grade = 88.0 },
            new Student { Id = 5, Name = "Eve", Course = "Math", Age = 23, Grade = 95.5 }
        };
        
        // Top performers (Grade > 85)
        var topPerformers = students
            .Where(s => s.Grade > 85)
            .OrderByDescending(s => s.Grade)
            .Select(s => new { s.Name, s.Grade, s.Course });
        
        Console.WriteLine("Top Performers:");
        foreach (var student in topPerformers)
        {
            Console.WriteLine($"{student.Name}: {student.Grade} ({student.Course})");
        }
        
        // Group by course
        var byCourse = students
            .GroupBy(s => s.Course)
            .Select(g => new
            {
                Course = g.Key,
                Count = g.Count(),
                AvgGrade = g.Average(s => s.Grade),
                Students = g.Select(s => s.Name)
            });
        
        Console.WriteLine("\\nBy Course:");
        foreach (var course in byCourse)
        {
            Console.WriteLine($"{course.Course}: {course.Count} students, Avg: {course.AvgGrade:F2}");
            Console.WriteLine($"  Students: {string.Join(", ", course.Students)}");
        }
        
        // Statistics
        var stats = new
        {
            TotalStudents = students.Count,
            AverageAge = students.Average(s => s.Age),
            AverageGrade = students.Average(s => s.Grade),
            HighestGrade = students.Max(s => s.Grade),
            LowestGrade = students.Min(s => s.Grade)
        };
        
        Console.WriteLine($"\\nStatistics:");
        Console.WriteLine($"Total: {stats.TotalStudents}");
        Console.WriteLine($"Avg Age: {stats.AverageAge:F1}");
        Console.WriteLine($"Avg Grade: {stats.AverageGrade:F2}");
        Console.WriteLine($"Range: {stats.LowestGrade} - {stats.HighestGrade}");
        
        // Find students
        var csStudents = students
            .Where(s => s.Course == "CS")
            .OrderBy(s => s.Name);
        
        var youngAndSmart = students
            .Where(s => s.Age < 22 && s.Grade > 85);
    }
}`
          }
        ]
      }
    ]
  },
  
  dart: {
    id: 'dart',
    name: 'Dart',
    icon: '🎯',
    color: '#0175C2',
    tutorials: [
      {
        id: 'dart-async',
        title: 'Async Programming & Futures',
        level: 'Intermediate',
        duration: '50 min',
        description: 'Master asynchronous programming in Dart',
        topics: ['Future', 'async/await', 'Stream', 'Error handling'],
        lessons: [
          {
            id: 1,
            title: 'Futures and Streams',
            duration: '50 min',
            content: 'Learn asynchronous programming with Futures and Streams.',
            code: `import 'dart:async';

Future<String> fetchData() async {
  await Future.delayed(Duration(seconds: 2));
  return 'Data loaded';
}

Stream<int> countStream(int max) async* {
  for (int i = 1; i <= max; i++) {
    await Future.delayed(Duration(milliseconds: 500));
    yield i;
  }
}

void main() async {
  var data = await fetchData();
  print(data);
  
  await for (var num in countStream(5)) {
    print('Count: \$num');
  }
}`,
            exercise: 'Create an async API client with retry logic.',
            solution: `import 'dart:async';

class API {
  Future<String> fetch(String url) async {
    await Future.delayed(Duration(seconds: 1));
    return 'Data from \$url';
  }
  
  Future<String> fetchWithRetry(String url, {int maxRetries = 3}) async {
    int attempt = 0;
    while (attempt < maxRetries) {
      try {
        return await fetch(url);
      } catch (e) {
        attempt++;
        if (attempt >= maxRetries) throw e;
        await Future.delayed(Duration(seconds: 2));
      }
    }
    throw Exception('Failed');
  }
}

void main() async {
  final api = API();
  final result = await api.fetchWithRetry('/data');
  print(result);
}`
          }
        ]
      }
    ]
  },
  
  scala: {
    id: 'scala',
    name: 'Scala',
    icon: '🔺',
    color: '#DC322F',
    tutorials: [
      {
        id: 'scala-functional',
        title: 'Functional Programming Basics',
        level: 'Intermediate',
        duration: '50 min',
        description: 'Learn functional programming concepts in Scala',
        topics: ['Higher-order functions', 'Pattern matching', 'Collections', 'For comprehensions'],
        lessons: [
          {
            id: 1,
            title: 'Functional Scala',
            duration: '50 min',
            content: 'Master Scala functional programming patterns.',
            code: `// Higher-order functions
val numbers = List(1, 2, 3, 4, 5)
val doubled = numbers.map(_ * 2)
val evens = numbers.filter(_ % 2 == 0)

// Pattern matching
def describe(x: Any): String = x match {
  case i: Int => s"Integer: \$i"
  case s: String => s"String: \$s"
  case _ => "Unknown"
}`,
            exercise: 'Create a data processing pipeline using map, filter, and fold.',
            solution: `val data = List(1, 2, 3, 4, 5)
val result = data
  .filter(_ % 2 == 0)
  .map(_ * 2)
  .foldLeft(0)(_ + _)
println(result)`
          }
        ]
      }
    ]
  },
  
  perl: {
    id: 'perl',
    name: 'Perl',
    icon: '🐪',
    color: '#39457E',
    tutorials: [
      {
        id: 'perl-regex',
        title: 'Regular Expressions Mastery',
        level: 'Intermediate',
        duration: '45 min',
        description: 'Master Perl regex for text processing',
        topics: ['Regex patterns', 'Substitution', 'Capture groups', 'Modifiers'],
        lessons: [
          {
            id: 1,
            title: 'Perl Regex',
            duration: '45 min',
            content: 'Learn powerful regex features in Perl.',
            code: `# Pattern matching
my \$text = "Hello World";
if (\$text =~ /World/) {
    print "Found!\\n";
}

# Substitution
\$text =~ s/World/Perl/;
print "\$text\\n";`,
            exercise: 'Parse email addresses from text using regex.',
            solution: `my \$text = 'Contact: user@example.com';
if (\$text =~ /([\\w\\.-]+@[\\w\\.-]+\\.\\w+)/) {
    print "Email: \$1\\n";
}`
          }
        ]
      }
    ]
  },
  
  lua: {
    id: 'lua',
    name: 'Lua',
    icon: '🌙',
    color: '#000080',
    tutorials: [
      {
        id: 'lua-tables',
        title: 'Tables & Metatables',
        level: 'Intermediate',
        duration: '45 min',
        description: 'Master Lua tables and metatables',
        topics: ['Tables', 'Metatables', 'Metamethods', 'OOP in Lua'],
        lessons: [
          {
            id: 1,
            title: 'Tables and Metatables',
            duration: '45 min',
            content: 'Learn Lua\'s powerful table system.',
            code: `-- Basic table
local person = {
  name = "John",
  age = 30
}

-- Metatable
local mt = {
  __add = function(a, b)
    return a.value + b.value
  end
}

local obj1 = {value = 10}
setmetatable(obj1, mt)`,
            exercise: 'Create a Vector class using metatables.',
            solution: `local Vector = {}
Vector.__index = Vector

function Vector.new(x, y)
  local v = {x = x, y = y}
  setmetatable(v, Vector)
  return v
end

function Vector:length()
  return math.sqrt(self.x^2 + self.y^2)
end`
          }
        ]
      }
    ]
  },
  
  r: {
    id: 'r',
    name: 'R',
    icon: '📊',
    color: '#276DC3',
    tutorials: [
      {
        id: 'r-dataframes',
        title: 'Data Frames & dplyr',
        level: 'Beginner',
        duration: '50 min',
        description: 'Work with data frames in R',
        topics: ['Data frames', 'dplyr', 'filtering', 'grouping', 'summarizing'],
        lessons: [
          {
            id: 1,
            title: 'Data Manipulation',
            duration: '50 min',
            content: 'Learn data manipulation with dplyr.',
            code: `library(dplyr)

df <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(25, 30, 35),
  salary = c(50000, 60000, 70000)
)

# Filter and select
result <- df %>%
  filter(age > 25) %>%
  select(name, salary)`,
            exercise: 'Analyze a dataset using dplyr verbs.',
            solution: `df %>%
  group_by(department) %>%
  summarize(
    avg_salary = mean(salary),
    count = n()
  ) %>%
  arrange(desc(avg_salary))`
          }
        ]
      }
    ]
  },
  
  elixir: {
    id: 'elixir',
    name: 'Elixir',
    icon: '💧',
    color: '#4B275F',
    tutorials: [
      {
        id: 'elixir-pattern',
        title: 'Pattern Matching & Pipes',
        level: 'Intermediate',
        duration: '50 min',
        description: 'Master Elixir pattern matching',
        topics: ['Pattern matching', 'Pipe operator', 'Guards', 'Case expressions'],
        lessons: [
          {
            id: 1,
            title: 'Pattern Matching',
            duration: '50 min',
            content: 'Learn Elixir pattern matching and pipes.',
            code: `# Pattern matching
{:ok, result} = {:ok, 42}

# Pipe operator
"  hello  "
|> String.trim()
|> String.upcase()

# Function patterns
def greet({:ok, name}), do: "Hello, #{name}!"
def greet({:error, _}), do: "Error"`,
            exercise: 'Build a data processing pipeline with pipes.',
            solution: `defmodule DataProcessor do
  def process(data) do
    data
    |> validate()
    |> transform()
    |> save()
  end
  
  defp validate(data), do: {:ok, data}
  defp transform({:ok, data}), do: {:ok, String.upcase(data)}
  defp save({:ok, data}), do: {:ok, data}
end`
          }
        ]
      }
    ]
  },
  
  haskell: {
    id: 'haskell',
    name: 'Haskell',
    icon: '𝝺',
    color: '#5D4F85',
    tutorials: [
      {
        id: 'haskell-types',
        title: 'Type System & Typeclasses',
        level: 'Advanced',
        duration: '60 min',
        description: 'Master Haskell\'s type system',
        topics: ['Type signatures', 'Typeclasses', 'Algebraic data types', 'Type inference'],
        lessons: [
          {
            id: 1,
            title: 'Advanced Types',
            duration: '60 min',
            content: 'Learn Haskell\'s powerful type system.',
            code: `-- Type signatures
add :: Int -> Int -> Int
add x y = x + y

-- Algebraic data types
data Maybe a = Nothing | Just a

-- Typeclasses
class Eq a where
  (==) :: a -> a -> Bool`,
            exercise: 'Define a custom data type with typeclass instances.',
            solution: `data Color = Red | Green | Blue

instance Eq Color where
  Red == Red = True
  Green == Green = True
  Blue == Blue = True
  _ == _ = False

instance Show Color where
  show Red = "Red"
  show Green = "Green"
  show Blue = "Blue"`
          }
        ]
      }
    ]
  },

  // Modern Web Development & AI/ML Tutorials
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    icon: '▲',
    color: '#000000',
    tutorials: [
      {
        id: 'nextjs-15',
        title: 'Next.js 15 - App Router & Server Components',
        level: 'Intermediate',
        duration: '90 min',
        description: 'Master Next.js 15 with App Router, Server Components, and modern patterns.',
        topics: ['App Router', 'Server Components', 'Server Actions', 'Streaming', 'Metadata API'],
        lessons: [
          {
            id: 1,
            title: 'Next.js 15 Fundamentals',
            duration: '90 min',
            content: `Learn Next.js 15 - the most modern React framework for production.

**Key Concepts:**
- App Router (app/ directory)
- Server Components vs Client Components
- Server Actions for mutations
- Streaming with Suspense
- Dynamic Routes & Layouts`,
            code: `// app/layout.js - Root Layout (Server Component)
export const metadata = {
  title: 'My App',
  description: 'Built with Next.js 15'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// app/page.js - Home Page (Server Component)
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 } // ISR - revalidate every 60s
  });
  return res.json();
}

export default async function HomePage() {
  const data = await getData();
  
  return (
    <main>
      <h1>Server Component</h1>
      <p>This renders on the server!</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

// app/products/[id]/page.js - Dynamic Route
export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await fetchProduct(id);
  
  return <div>Product: {product.name}</div>;
}

// app/actions.js - Server Actions
'use server'

export async function createUser(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  
  // Direct database access (no API needed!)
  await db.users.create({
    data: { name, email }
  });
  
  revalidatePath('/users');
}

// app/form-client.js - Client Component
'use client'

import { createUser } from './actions';

export default function UserForm() {
  return (
    <form action={createUser}>
      <input name="name" required />
      <input name="email" type="email" required />
      <button type="submit">Create User</button>
    </form>
  );
}

// app/loading.js - Streaming UI
export default function Loading() {
  return <div>Loading...</div>;
}

// app/error.js - Error Handling
'use client'

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`,
            exercise: 'Build a blog with App Router, Server Components, and Server Actions.',
            solution: `// app/blog/page.js
import { getPosts } from '@/lib/db';

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}`
          }
        ]
      }
    ]
  },

  ai_ml: {
    id: 'ai_ml',
    name: 'AI & Machine Learning',
    icon: '🤖',
    color: '#FF6F00',
    tutorials: [
      {
        id: 'pytorch-basics',
        title: 'PyTorch - Neural Networks from Scratch',
        level: 'Intermediate',
        duration: '120 min',
        description: 'Build neural networks with PyTorch for deep learning applications.',
        topics: ['Tensors', 'Neural Networks', 'Training', 'CNN', 'Transfer Learning'],
        lessons: [
          {
            id: 1,
            title: 'PyTorch Fundamentals',
            duration: '120 min',
            content: `Master PyTorch for deep learning and AI applications.

**Key Concepts:**
- Tensors and GPU acceleration
- Building neural networks
- Training loops
- Loss functions & optimizers
- Model evaluation`,
            code: `import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader
import torchvision.transforms as transforms
import torchvision.datasets as datasets

# 1. Define Neural Network
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.fc1 = nn.Linear(784, 128)  # 28x28 images
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(128, 64)
        self.fc3 = nn.Linear(64, 10)    # 10 classes
        
    def forward(self, x):
        x = x.view(-1, 784)  # Flatten
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        x = self.relu(x)
        x = self.fc3(x)
        return x

# 2. Setup device (GPU if available)
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
print(f'Using device: {device}')

# 3. Load MNIST dataset
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,))
])

train_dataset = datasets.MNIST(root='./data', train=True, 
                               download=True, transform=transform)
train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)

# 4. Initialize model, loss, optimizer
model = SimpleNN().to(device)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# 5. Training Loop
def train(model, loader, criterion, optimizer, epochs=5):
    model.train()
    for epoch in range(epochs):
        total_loss = 0
        for batch_idx, (data, target) in enumerate(loader):
            # Move to device
            data, target = data.to(device), target.to(device)
            
            # Zero gradients
            optimizer.zero_grad()
            
            # Forward pass
            output = model(data)
            loss = criterion(output, target)
            
            # Backward pass
            loss.backward()
            optimizer.step()
            
            total_loss += loss.item()
            
            if batch_idx % 100 == 0:
                print(f'Epoch {epoch+1}, Batch {batch_idx}, Loss: {loss.item():.4f}')
        
        avg_loss = total_loss / len(loader)
        print(f'Epoch {epoch+1} completed, Avg Loss: {avg_loss:.4f}')

# 6. Train the model
train(model, train_loader, criterion, optimizer, epochs=5)

# 7. Save model
torch.save(model.state_dict(), 'model.pth')

# 8. Inference
model.eval()
with torch.no_grad():
    test_input = torch.randn(1, 1, 28, 28).to(device)
    prediction = model(test_input)
    predicted_class = prediction.argmax(dim=1)
    print(f'Predicted class: {predicted_class.item()}')

# CNN Example
class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.conv1 = nn.Conv2d(1, 32, kernel_size=3)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(64 * 12 * 12, 128)
        self.fc2 = nn.Linear(128, 10)
        
    def forward(self, x):
        x = self.pool(torch.relu(self.conv1(x)))
        x = self.pool(torch.relu(self.conv2(x)))
        x = x.view(-1, 64 * 12 * 12)
        x = torch.relu(self.fc1(x))
        x = self.fc2(x)
        return x

# Transfer Learning with Pre-trained Model
import torchvision.models as models

# Load pre-trained ResNet
resnet = models.resnet50(pretrained=True)

# Freeze all layers
for param in resnet.parameters():
    param.requires_grad = False

# Replace final layer
num_features = resnet.fc.in_features
resnet.fc = nn.Linear(num_features, 10)  # 10 classes

# Only train final layer
optimizer = optim.Adam(resnet.fc.parameters(), lr=0.001)`,
            exercise: 'Build and train a CNN to classify CIFAR-10 images.',
            solution: `# Full CIFAR-10 CNN solution
class CIFAR10CNN(nn.Module):
    def __init__(self):
        super(CIFAR10CNN, self).__init__()
        self.conv_layers = nn.Sequential(
            nn.Conv2d(3, 64, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(64, 128, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2, 2),
        )
        self.fc_layers = nn.Sequential(
            nn.Linear(128 * 8 * 8, 512),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(512, 10)
        )
    
    def forward(self, x):
        x = self.conv_layers(x)
        x = x.view(x.size(0), -1)
        x = self.fc_layers(x)
        return x`
          }
        ]
      }
    ]
  },

  docker: {
    id: 'docker',
    name: 'Docker & Kubernetes',
    icon: '🐳',
    color: '#2496ED',
    tutorials: [
      {
        id: 'docker-k8s',
        title: 'Docker & Kubernetes - Container Orchestration',
        level: 'Advanced',
        duration: '100 min',
        description: 'Master containers, Docker, and Kubernetes for cloud-native applications.',
        topics: ['Docker', 'Containers', 'Kubernetes', 'Microservices', 'Deployment'],
        lessons: [
          {
            id: 1,
            title: 'Docker & Kubernetes Complete Guide',
            duration: '100 min',
            content: `Learn Docker and Kubernetes for modern cloud-native development.

**Key Concepts:**
- Containers vs VMs
- Dockerfile best practices
- Docker Compose
- Kubernetes architecture
- Deployments & Services`,
            code: `# Dockerfile - Node.js App
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build app
RUN npm run build

# Production image
FROM node:18-alpine

WORKDIR /app

# Copy from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Run as non-root user
USER node

EXPOSE 3000

CMD ["node", "dist/index.js"]

# .dockerignore
node_modules
npm-debug.log
.git
.env
*.md

# docker-compose.yml - Multi-container app
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    restart: unless-stopped
    networks:
      - app-network

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=myapp
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - app-network

  redis:
    image: redis:7-alpine
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app
    networks:
      - app-network

volumes:
  postgres-data:

networks:
  app-network:
    driver: bridge

# Kubernetes Deployment - deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  labels:
    app: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:v1.0.0
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: myapp-secrets
              key: database-url
        resources:
          requests:
            memory: "128Mi"
            cpu: "250m"
          limits:
            memory: "256Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5

---
# Service - service.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: LoadBalancer
  selector:
    app: myapp
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000

---
# Ingress - ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  tls:
  - hosts:
    - myapp.example.com
    secretName: myapp-tls
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp-service
            port:
              number: 80

# Docker Commands
# Build image
docker build -t myapp:v1.0.0 .

# Run container
docker run -d -p 3000:3000 --name myapp myapp:v1.0.0

# View logs
docker logs -f myapp

# Execute command in container
docker exec -it myapp sh

# Docker Compose commands
docker-compose up -d
docker-compose ps
docker-compose logs -f app
docker-compose down

# Kubernetes commands
kubectl apply -f deployment.yaml
kubectl get pods
kubectl get services
kubectl logs pod-name
kubectl exec -it pod-name -- sh
kubectl scale deployment myapp --replicas=5
kubectl rollout status deployment/myapp
kubectl rollout undo deployment/myapp`,
            exercise: 'Deploy a microservices app with Docker Compose and migrate to Kubernetes.',
            solution: `# Complete solution in code above
# Steps:
# 1. Create Dockerfile
# 2. Create docker-compose.yml
# 3. Test locally: docker-compose up
# 4. Create K8s manifests
# 5. Deploy: kubectl apply -f .
# 6. Verify: kubectl get all`
          }
        ]
      }
    ]
  }
};

// Helper Functions
export function getTutorialsByLanguage(languageId) {
  return tutorialsData[languageId] || null;
}

export function getAllTutorials() {
  return Object.values(tutorialsData).flatMap(lang =>
    lang.tutorials.map(tutorial => ({
      ...tutorial,
      language: lang.name,
      languageId: lang.id,
      languageIcon: lang.icon
    }))
  );
}

export function getTutorialById(languageId, tutorialId) {
  const tutorials = getTutorialsByLanguage(languageId);
  return tutorials.find(t => t.id === tutorialId);
}

export function searchTutorials(query) {
  const allTutorials = getAllTutorials();
  const searchTerm = query.toLowerCase();
  
  return allTutorials.filter(tutorial =>
    tutorial.title.toLowerCase().includes(searchTerm) ||
    tutorial.description.toLowerCase().includes(searchTerm) ||
    tutorial.topics.some(t => t.toLowerCase().includes(searchTerm)) ||
    tutorial.language.toLowerCase().includes(searchTerm)
  );
}

export function getTutorialsByLevel(level) {
  return getAllTutorials().filter(t => t.level === level);
}

export function getTutorialStats() {
  const allTutorials = getAllTutorials();
  return {
    total: allTutorials.length,
    byLanguage: Object.keys(tutorialsData).reduce((acc, langId) => {
      acc[langId] = tutorialsData[langId].tutorials.length;
      return acc;
    }, {}),
    byLevel: {
      Beginner: allTutorials.filter(t => t.level === 'Beginner').length,
      Intermediate: allTutorials.filter(t => t.level === 'Intermediate').length,
      Advanced: allTutorials.filter(t => t.level === 'Advanced').length
    }
  };
}
