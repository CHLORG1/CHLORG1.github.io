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
document.getElementById ("auto_fill").addEventListener ("click", function handleClick(event){
    const inner_fill = document.getElementsByClassName("integral_display")[0].innerHTML;
    const match = inner_fill.match(/\\displaystyle([^<]+)<\/script><\/p><\/div>/);
    console.log(inner_fill);
    // Check if a match is found
    if (match && match.length > 1) {
    var expression = match[1].trim();
    }
    document.getElementById("input_answer").value = "\\begin{align}"+'\n'+"\tI &="+ expression+"  \\\\\n  \t&= \\boxed{...} \\\\"+'\n'+"\\end{align}";

});
var inputField = document.getElementById('input_answer'); // get textarea object
inputField.onkeydown = function(e) { // list for when any key is pressed
if (e.keyCode === 9) { // block to catch when tab key is pressed
    this.setRangeText(
            '\t',
            this.selectionStart,
            this.selectionStart,
            'end'
        )
    return false; //prevent default action
}
};