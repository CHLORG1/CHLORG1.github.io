import nerdamer from 'nerdamer/all.min';
document.getElementById("b_submit").addEventListener('click', e=>{
  var ans1 = String(document.getElementById('t_answer').value);
  var ans = (nerdamer.convertFromLaTeX(ans1)).toString();
  var ref_ans1 = 'x^2 - 7';
  var ref_ans = (nerdamer.convertFromLaTeX(ref_ans1)).toString();
  var check_ans = nerdamer(ans).eq(ref_ans);
  console.log(ans,ref_ans,check_ans.toString());
});
