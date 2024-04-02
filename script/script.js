let result=document.getElementById('result');
 function insertValue(value){
    result.value +=value;
}
function clearResult(){
    result.value= " ";
}
function deleteone(){
    result.value=result.value.slice(0,-1);
}
function caculate(){
    try{
        result.value=eval(result.value);
    }
    catch(error){
        result.value="error";
    }
}