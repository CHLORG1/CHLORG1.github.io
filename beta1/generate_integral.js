let SHEET_ID = '1yVVvr9H6kZgb2S36dwzvIWdwKaPIbjyi_cu4z9XJ8_0';
let SHEET_TITLE = 'Integration';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE);
function Generate_submission_page(evt, p_id) {
    document.getElementsByClassName("button_bar")[2].className += " active";
    let A = ((document.getElementById("problem"+p_id)).cloneNode(true)).valueOf();
    let author_problem = ((document.getElementById("author"+p_id)).cloneNode(true)).valueOf();
    current = document.getElementsByClassName("integral_display")[0];
    document.getElementsByClassName("integral_display")[0].replaceChildren(A);
    document.getElementsByClassName("Detail")[0].replaceChildren(author_problem);
}
fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    console.log("successful fetch");
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    //console.log(data.table.rows[7]);
    let Problem_ID_TITLE = document.getElementById('Problem_ID');
    let AUTHOR_TITLE = document.getElementById('Author');
    let ANSWER_TITLE = document.getElementById('Answer');
    for (let i = 0; i<data.table.rows.length-1;i++){
        let Newcard = document.createElement('div');
        Newcard.id = data.table.rows[i+1].c[0].v
        Newcard.className ="card";
        let Author = document.createElement('div');
        Author.className ="author";
        Author.id ="author"+i;
        Author.append(data.table.rows[i+1].c[0].v + '\n'+data.table.rows[i+1].c[1].v);
        Newcard.append(Author);
        

        let Problem = document.createElement('div');
        Problem.className ="problem";
        p = document.createElement('p');
        let equation = "\\("+data.table.rows[i+1].c[2].v+"\\)";
        p.innerHTML = equation;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, p]);
        Problem.id = "problem"+i;
        Problem.append(p);
        Newcard.append(Problem);
        
        let Status = document.createElement('div');
        Status.className ="Solved";

       
        Status.append(data.table.rows[i+1].c[3].v);
        Newcard.append(Status);
        let Button = document.createElement('Tag');
        Button.className ="Tag";
        const button = document.createElement('button2');
        button.className = "submit_answer"
        button.id=i;
        button.addEventListener('click',function handleClick(event){
            const inner_fill = document.getElementById("problem"+i).innerHTML;
            const match = inner_fill.match(/\\displaystyle([^<]+)<\/script>/);
            localStorage.setItem("problem_select",match[1]);
            localStorage.setItem("answer",data.table.rows[i+1].c[4].v);
            localStorage.setItem("problem_id",data.table.rows[i+1].c[0].v);
            localStorage.setItem("author",data.table.rows[i+1].c[1].v);
            console.log(data.table.rows[i+1].c[4].v);
            location.replace("./submission.html?p_id="+i);
        });

        button.append("Submit")
        Button.append(button);
        Newcard.append(Button);
        Tasks.append(Newcard);
        
    }
})
        


