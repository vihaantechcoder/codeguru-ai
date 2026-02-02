const pythonCourses = {
    title: "Python",
    totalLessons: 25,
    lessons: [
        {
            title: "What is Python?",
            notes: `<p><strong>Python ek high-level programming language hai</strong> jo simple syntax ke liye famous hai.</p>
                <p>Python ko aasan bhasha mein likha jaa sakta hai, isliye beginners ke liye perfect hai. Yeh general-purpose language hai - web development, data science, AI, automation sab kuch kar sakti hai.</p>
                
                <p><strong>Real-life example:</strong> Instagram, YouTube, Netflix, Spotify - yeh sab Python use karte hain. Google aur NASA bhi Python use karte hain.</p>
                
                <p><strong>Simple analogy:</strong> Jaise Hindi/English aasan hai bolne ke liye, waise Python aasan hai programming ke liye.</p>
                
                <p><strong>Python ka basic example:</strong></p>
                <pre><code># Python code
name = input("Apna naam batao: ")
print("Namaste", name, "!")
age = 20
if age >= 18:
    print("Aap vote de sakte ho!")
else:
    print("Aap abhi chhote ho!")</code></pre>
                
                <p><strong>Line-by-line explanation:</strong></p>
                <ol>
                    <li><code>name = input("Apna naam batao: ")</code> - User se naam input leta hai</li>
                    <li><code>print("Namaste", name, "!")</code> - Namaste message print karta hai</li>
                    <li><code>age = 20</code> - Ek variable create karta hai</li>
                    <li><code>if age >= 18:</code> - Condition check karta hai</li>
                    <li><code>print("Aap vote de sakte ho!")</code> - Condition true hone pe yeh print karta hai</li>
                    <li><code>else:</code> - Agar condition false hai toh</li>
                    <li><code>print("Aap abhi chhote ho!")</code> - Yeh print karta hai</li>
                </ol>
                
                <p><strong>Common beginner mistakes:</strong></p>
                <ul>
                    <li>Indentation (spacing) galat karna (Python mein indentation bahut important hai)</li>
                    <li>Colon (:) bhool jana if/else statements ke baad</li>
                    <li>Variables declare karna bhool jana</li>
                </ul>`,
            practiceQuestions: [
                "Python kaisi programming language hai?",
                "Python mein indentation kyu important hai?"
            ],
            miniTask: "Python install karo aur ek simple program likho jo user se naam le aur uska welcome message print kare!",
            quiz: {
                question: "Python kiske liye famous hai?",
                options: [
                    "Complex syntax ke liye",
                    "Simple aur readable syntax ke liye",
                    "Slow speed ke liye"
                ],
                correctAnswer: 1,
                explanation: "Python simple, readable aur easy-to-learn syntax ke liye famous hai. Iski readability iski sabse badi strength hai."
            },
            simpleExplanation: "Python English jaise hai - jo soch sakte ho, woh code mein likh sakte ho. Bahut simple hai!",
            exampleCode: `# Simple Python Program
print("Welcome to Python!")

# Calculate sum
num1 = 10
num2 = 20
sum = num1 + num2

print(f"The sum of {num1} and {num2} is: {sum}")

# Check if number is even
number = 15
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")`
        },
        {
            title: "Python Variables and Data Types",
            notes: `<p><strong>Python Variables:</strong> Data store karne ke liye</p>
                
                <p><strong>Variable Declaration:</strong> Python mein type declare nahi karna padta</p>
                <pre><code>name = "Rahul"      # String
age = 25          # Integer
height = 5.9      # Float
is_student = True # Boolean</code></pre>
                
                <p><strong>Data Types:</strong></p>
                <ul>
                    <li><strong>String:</strong> Text data
                        <pre><code>message = "Hello World"
name = 'Python'</code></pre>
                    </li>
                    <li><strong>Integer:</strong> Whole numbers
                        <pre><code>count = 10
temperature = -5</code></pre>
                    </li>
                    <li><strong>Float:</strong> Decimal numbers
                        <pre><code>price = 99.99
pi = 3.14159</code></pre>
                    </li>
                    <li><strong>Boolean:</strong> True/False
                        <pre><code>is_raining = True
has_permission = False</code></pre>
                    </li>
                    <li><strong>List:</strong> Ordered collection
                        <pre><code>fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]</code></pre>
                    </li>
                </ul>
                
                <p><strong>Type Checking:</strong></p>
                <pre><code>print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(is_student)) # <class 'bool'></code></pre>
                
                <p><strong>Type Conversion:</strong></p>
                <pre><code># String to integer
num_str = "100"
num_int = int(num_str)

# Integer to string
age_str = str(25)

# Float to integer
price_int = int(99.99)  # Becomes 99</code></pre>`,
            practiceQuestions: [
                "Python mein variable kaise declare karte hain?",
                "List aur string mein kya antar hai?"
            ],
            miniTask: "Different data types ke variables create karo aur unka type check karo",
            quiz: {
                question: "Python mein True/False values kaun sa data type hai?",
                options: [
                    "String",
                    "Boolean", 
                    "Integer"
                ],
                correctAnswer: 1,
                explanation: "True aur False Boolean data type ke values hain. Yeh logical operations ke liye use hote hain."
            }
        }
        // Add 8 more Python lessons here...
    ]
};