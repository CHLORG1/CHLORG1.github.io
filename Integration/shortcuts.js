document.addEventListener('keydown', (event) => {
    if(event.ctrlKey && event.key == "Enter") {
        console.log("activate");
        var A = "\\("+document.getElementById("input_answer").value+"\\)" ;
        document.getElementsByClassName("output")[0].replaceChildren(A);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementsByClassName("output")[0]]);
        //document.getElementById("input_answer").value = '';
  }
});