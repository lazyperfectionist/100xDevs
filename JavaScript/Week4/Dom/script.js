function getSum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    const sum = parseInt(num1) + parseInt(num2);
    document.getElementById('sum').innerHTML = "Final sum is : " + sum;
}
