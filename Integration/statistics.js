console.log("TEST");
document.getElementById ("refresher").addEventListener ("click", function GenerateLatex(event){
    var A = "\\("+document.getElementById("input_answer").value+"\\)" ;
    document.getElementsByClassName("output")[0].replaceChildren(A);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementsByClassName("output")[0]]);
    //document.getElementById("input_answer").value = '';
});


document.getElementById ("submit_answer").addEventListener ("click", function handleClick(event){
console.log("Hi");

const inputText = document.getElementById("input_answer").value;

// Use a regular expression to match and capture the content inside \boxed{}
const regex = /\\boxed\{([^{}]*(\{[^{}]*\}[^{}]*)*)\}/;
const match = inputText.match(regex);

// Extract the captured content
const boxedContent = match ? match[1] : null;

console.log(boxedContent);

});
