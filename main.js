name_of_the_student_array=[];
function submit(){
    var name_1 = document.getElementById("sentence_1").value;
    var name_2 = document.getElementById("sentence_2").value;
    var name_3 = document.getElementById("sentence_3").value;
    var name_4 = document.getElementById("sentence_4").value;


    name_of_the_student_array.push(name_1);
    name_of_the_student_array.push(name_2);
    name_of_the_student_array.push(name_3);
    name_of_the_student_array.push(name_4);


    console.log(name_of_the_student_array);


    document.getElementById("display_name").innerHTML = name_of_the_student_array;
document.getElementById("get_para1_button").style.display = "none";
}   