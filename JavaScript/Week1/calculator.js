class Calculator {
    constructor(){
      this.result = 0;
    }
    add(num) {
      this.result +=num;
    }
    subtract(){
      this.result -=num;
    }
    multiply(){
      this.result *=num;
    }
    divide(num){
      this.result /= num;
    }
    clear(){
      this.result = 0;
    }
    getresult(){
      return this.result;
    }
    calcluate(expression){
        this.result = eval(expression);
        console.log(this.result);
    }
  }

let calci = new Calculator;
calci.calcluate('10   +    2 *     (6   -   5/   2)    +    7 ')