const jsCourses = {
    title: "JavaScript",
    totalLessons: 25,
    lessons: [
        {
            title: "What is JavaScript?",
            notes: `<p><strong>JavaScript ek programming language hai</strong> jo websites ko interactive banati hai.</p>
                <p>Socho agar HTML skeleton hai aur CSS skin hai, toh JavaScript muscles aur brain hai! 🧠💪 Yeh website ko zinda banati hai.</p>
                
                <p><strong>Real-life example:</strong> Jab tum Facebook pe like button click karte ho, woh instantly count badh jata hai - yeh JavaScript ka kaam hai. Form submit karte time validation bhi JavaScript karta hai.</p>
                
                <p><strong>Simple analogy:</strong> TV remote socho. TV ka body HTML/CSS hai, par remote se control JavaScript karta hai.</p>
                
                <p><strong>JavaScript ka basic example:</strong></p>
                <pre><code>// Button click pe alert show karna
document.getElementById("myButton").addEventListener("click", function() {
    alert("Hello World!");
});</code></pre>
                
                <p><strong>Line-by-line explanation:</strong></p>
                <ol>
                    <li><code>document.getElementById("myButton")</code> - HTML mein "myButton" id wala element dhoondta hai</li>
                    <li><code>.addEventListener("click", function() { ... })</code> - Us element pe click event listen karta hai</li>
                    <li><code>alert("Hello World!");</code> - Click pe "Hello World!" alert show karta hai</li>
                </ol>
                
                <p><strong>Common beginner mistakes:</strong></p>
                <ul>
                    <li>JavaScript file ko HTML se link karna bhool jana</li>
                    <li>console.log() use karna bhool jana debugging ke liye</li>
                    <li>Variables declare karna bhool jana</li>
                </ul>`,
            practiceQuestions: [
                "JavaScript ka main kaam kya hai?",
                "JavaScript ko HTML mein kaise link karte hain?"
            ],
            miniTask: "Ek simple button banao jisme JavaScript lagao. Button click pe alert message show karo!",
            quiz: {
                question: "JavaScript ka kya use hai?",
                options: [
                    "Website ka structure banana",
                    "Website ko beautiful banana",
                    "Website mein interactivity add karna"
                ],
                correctAnswer: 2,
                explanation: "JavaScript website ko interactive banati hai - forms validate karna, buttons pe react karna, data fetch karna, etc."
            },
            simpleExplanation: "JavaScript website ko zinda banati hai. Jaise remote se TV control karte hain, waise JavaScript se website control karte hain.",
            exampleCode: `// JavaScript Example
let button = document.querySelector('#myButton');
let counter = 0;

button.addEventListener('click', function() {
    counter++;
    button.textContent = 'Clicked ' + counter + ' times';
    console.log('Button clicked ' + counter + ' times');
});`
        },
        {
            title: "JavaScript Variables - var, let, const",
            notes: `<p><strong>Variables:</strong> Data store karne ke containers</p>
                
                <p><strong>Three ways to declare variables:</strong></p>
                
                <p><strong>1. var (Old way):</strong></p>
                <pre><code>var name = "Rahul";
var age = 25;
var isStudent = true;</code></pre>
                
                <p><strong>2. let (Modern way):</strong> Block-scoped</p>
                <pre><code>let score = 100;
let userName = "codeguru";</code></pre>
                
                <p><strong>3. const (Constant):</strong> Cannot be changed</p>
                <pre><code>const PI = 3.14;
const API_KEY = "abc123";</code></pre>
                
                <p><strong>Data Types:</strong></p>
                <ul>
                    <li><code>String</code> - Text: "Hello"</li>
                    <li><code>Number</code> - Numbers: 10, 3.14</li>
                    <li><code>Boolean</code> - true/false</li>
                    <li><code>Array</code> - List: [1, 2, 3]</li>
                    <li><code>Object</code> - {name: "John", age: 30}</li>
                    <li><code>undefined</code> - Not defined yet</li>
                    <li><code>null</code> - Empty value</li>
                </ul>
                
                <p><strong>Variable Naming Rules:</strong></p>
                <ul>
                    <li>Start with letter, _, or $</li>
                    <li>Case sensitive (age ≠ Age)</li>
                    <li>No spaces</li>
                    <li>Use camelCase (userName, totalScore)</li>
                </ul>`,
            practiceQuestions: [
                "let aur const mein kya antar hai?",
                "Camel case kya hota hai?"
            ],
            miniTask: "Different data types ke variables create karo aur console mein print karo",
            quiz: {
                question: "Kaun sa variable type constant value ke liye use hota hai?",
                options: [
                    "var",
                    "let", 
                    "const"
                ],
                correctAnswer: 2,
                explanation: "const variable constant value ke liye use hota hai jo change nahi hoti. let aur var change ho sakte hain."
            }
        }
        // Add 8 more JavaScript lessons here...
    ]
};