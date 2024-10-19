const display=document.getElementById('display');
function appendToDisplay(input) {
    display.value +=input;
}/*اي شي بكتبه المستخدم يظهر عالشاشة*/


/*زر الحذف*/
function clearDisplay () {
    display.value='';
}
/*العمليات الحسابية*/
function calculate (input) {
   display.value=eval(display.value);

}
