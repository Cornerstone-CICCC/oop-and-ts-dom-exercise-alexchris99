// vars
const calculate = document.querySelector("#calculateBtn")



class Calculator {

    constructor(){
        this.operation = document.querySelector("#operation").value
        this.result = 0
        this.num1 = document.querySelector("#num1").value
        this.num2 = document.querySelector("#num2").value
        this.result = result
        this.compute()
        
    }

    compute(){
        if(this.operation == "add"){
            this.add()
        }
        if(this.operation == "substract"){
            this.substract()
        }
        if(this.operation == "multiply"){
            this.multiply()
        }
        if(this.operation == "divide"){
            this.divide()
        }
        document.querySelector("#result").innerHTML = this.result
    }


    add(){
        this.result = (Number(this.num1) + Number(this.num2))
        return this.result
    }

    substract(){
        this.result = (Number(this.num1) - Number(this.num2))
        return this.result
    }
                                                    
    multiply(){
        this.result = (Number(this.num1) * Number(this.num2))
        return this.result
    }

    divide(){
        this.result = (Number(this.num1) / Number(this.num2))
        return this.result
    }
}

calculate.addEventListener("click",()=>{
    const calculator = new Calculator()
})