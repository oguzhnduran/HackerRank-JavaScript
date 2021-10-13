// Day 0: Hello, World!

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
     
     console.log(parameterVariable);
     
    
}



// Day 0:Data Types

// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
console.log(firstInteger + Number(secondInteger)); // İçindeki sayıları toplamak  istediğimiz için başında Number fonksiyonu kullandık aksi taktirde cevap 412 olurdu.

// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
console.log(firstDecimal + Number(secondDecimal));

// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
console.log(firstString  + secondString);



// Day 1: Arithmetic Operators

function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width)
    return perimeter;
    
}

// Day 1: Functions

// First Method
function factorial(n) {
    if (n === 0) {
        return 1;
    }else {
        return n * factorial(n-1);
    }
}

// Second Method

function factorial(n) {
    let finalValue = 1;
    for(let i = n; i>1; i--) {
        finalValue *= i;
        }
        return finalValue; // Döngü tamamlandıktan sonra return ile finalValue değerini dışarı veriyor.
    } 



    //Day 1: Let and Const

    function main() {
        
        // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
        const PI = Math.PI;
        let input = Number(readLine()); // yukardaki açıklama satırında girdiyi okuyabilmek için "readline()" fonksiyonuna inputu ata diyor bu yüzden böyle yaptık.
        
        // Print the area of the circle:
        console.log(PI* Math.pow(input,2))
        
        // Print the perimeter of the circle:
        console.log(2 * PI * input)



    // Day 2: Conditional Statements: If-Else

    function getGrade(score) {
        let grade;
        // Write your code here
        if (score > 25 && score <= 30) { //bunu "score > 25" diyerekte başlayabilirdik.
            return grade = "A"; //return grade = A deseydik A'ya tanımsız diyecekti o yüzden  A,B,C,D,E notlarını string şeklinde yazmayı unutma!
        }else if (score > 20 && score <= 25) {
            return grade = "B"; 
        
        }else if (score > 15 && score <= 20) {
            return grade = "C"; 
        
        }else if (score > 10 && score <= 15) {
            return grade = "D"; 
        
        }else if (score > 5 && score <= 10) {
            return grade = "E"; 
        
        }else if (score >= 0 && score <= 5) { // bunu direk " else grade = 'F' " diyede bitirebilirdik.
            return grade = "F"; 
        }
        return grade;
    }
    


    // Day 2: Conditional Statements: Switch

    // First Method

    // Write your code here
  switch(s.charAt(0)) {
    case 'a' : // Durumu yazdıktan sonra ":" koymayı unutma!
    case 'e' :
    case 'i' :
    case 'o' :
    case 'u' :
    letter = "A"
    break;
    
    case 'b' :
    case 'c' :
    case 'd' :
    case 'f' :
    case 'g' :
    letter = "B"
    break;
    
    case 'h' :
    case 'j' :
    case 'k' :
    case 'l' :
    case 'm' :
    letter = "C"
    break;
    
    case 'n' :
    case 'p' :
    case 'q' :
    case 'r' :
    case 's' :
    case 't' :
    case 'v' :
    case 'w' :
    case 'x' :
    case 'y' :
    case 'z' :
    letter = "D"
    break;
    }
  
    return letter;
}

// Second Method

  // Write your code here
  switch(true) {
    case 'aeiou'.includes(s[0]) : //string'in 0. indexinde aeiou'dan biri varsa letter = A demek.
    letter = "A"; 
    break;
    case 'bcdfg'.includes(s[0]) :
    letter = "B";
    break;
    case 'hjklm'.includes(s[0]) :
    letter = "C";
    break;
    case 'npqrstvwxyz'.includes(s[0]) :
    letter = "D";
    break;
}
return letter;



//Day 2: Loops

let vowels = 'aeiuo'
function vowelsAndConsonants(s) {
   for (var i = 0; i < s.length; i++) {
       
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       } 
   } 
   for (var i = 0; i < s.length; i++) {
       
       if (!vowels.includes(s[i])) {
           console.log(s[i]);
}
}
}








    






    











