function tuyensinh(){
// Input: Khởi tạo biến
//1. điểm chuẩn
let score = +document.getElementById("standardscore").value;
//2. điểm 3 môn
let score1 = +document.getElementById("score1").value;
let score2 = +document.getElementById("score2").value;
let score3 = +document.getElementById("score3").value;

//3. khu vực 
let area = +document.getElementById("area").value;

//4. đối tượng
let student = +document.getElementById("student").value;

// Process 
if (score1 === 0 || score2 === 0 || score3 === 0){
document.getElementById("showIntotal").innerHTML = "Rất tiếc bạn đã trượt";
} else if (score1 <= -score1 || score2 <= -score2 || score3 <= -score3){
    document.getElementById("showIntotal").innerHTML = "Rất tiếc bạn đã trượt";
    return;
}

let point = "";
// Công thức tính điểm chuẩn 
  result = sum(score1, score2, score3);
//  Tổng điểm = điểm thi + điểm khu vực + điểm ưu tiên
let total = result + area + student;

if (score <= total){
    point = "Xin chúc mừng bạn đã thi đỗ" + "Tổng điểm là:" + total;
}else {
    point = "Rất tiếc bạn đã trượt" + "Tổng điểm là: " + total;
}
display(point)
function display(point){
    document.getElementById("showIntotal").innerHTML  = point;
}

function sum(score1, score2, score3){
    let result = 0;
    result = score1 + score2 + score3;
    return result;
}

}
