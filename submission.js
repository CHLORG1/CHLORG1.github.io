import nerdamer from 'nerdamer/all.min';
window.addEventListener('load',function(){
    
    this.document.getElementById("input").value = "";
    var urlParams = new URLSearchParams(window.location.search);
    var p_id = urlParams.get('p_id');
    var problem = localStorage.getItem("problem_select");
    var answer = localStorage.getItem("answer");
    answer = "\\ln(e^{2x}-e^{x} +1) - 2\\ln(e^{x}+1)" //\ln (\exp{2*x}-\exp{x}+1)- 2 \ln (\exp{x}+1)
    var author = localStorage.getItem("author");
    var problem_id = localStorage.getItem("problem_id");
    this.document.getElementById("problem_id").innerHTML = problem_id;
    this.document.getElementById("author").innerHTML = author;
    console.log("ren",answer);
    document.getElementById("integrate_display").innerHTML ="\\(\\displaystyle"+problem+"\\)";

    MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("integrate_display")]);
    var actual_answer = answer;
    //this is solved when fetch
    this.document.getElementById("s_submit").addEventListener('click', (e) =>{
        
        var ans1 = this.document.getElementById("input").value;
        
        var ans = (nerdamer.convertFromLaTeX(ans1)).toString();

        var ref_ans = (nerdamer.convertFromLaTeX(actual_answer)).toString();
        
        var check_ans = nerdamer(ans).eq(ref_ans);
        var expression_check = check_ans;
        const root = document.querySelector(":root");
        
        if (expression_check) {
            expression_check="Correct";
            this.document.getElementsByClassName("progress-bar")[0].style.background="radial-gradient(closest-side, black 79%, transparent 80% 100%),conic-gradient(rgb(105, 198, 255) 100%, grey 0)";
            root.style.setProperty("--status", `"100/100"`);
        } else {
            expression_check="Incorrect";
            this.document.getElementsByClassName("progress-bar")[0].style.background="radial-gradient(closest-side, black 79%, transparent 80% 100%),conic-gradient(rgb(105, 198, 255) 0%, grey 0)";
            root.style.setProperty("--status", `"0/100"`);
        }
        openTab(e,'my_submission');
        //create card
        let Newcard = document.createElement('div');
        Newcard.className ="hcard";
        let date = document.createElement('div'); date.className ="date";
        date.innerHTML = new Date().toDateString();
        let submitted = document.createElement('div'); submitted.className ="submitted_answer";
        submitted.innerHTML = "\\(\\displaystyle "+ans1+"\\)";
        let status = document.createElement('div'); status.className ="status";
        status.innerHTML = expression_check;
        Newcard.append(date);
        Newcard.append(submitted);
        Newcard.append(status);
        
        this.document.getElementById("my_submission").append(Newcard);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementsByClassName("submitted_answer")]);
        /*
        this.document.getElementById("result").innerHTML = expression_check;
        document.getElementById("answer_display").innerHTML ="\\(\\displaystyle "+ans1+"\\)";

        MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answer_display")]);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("actual_answer")]);
        */
    });
});
