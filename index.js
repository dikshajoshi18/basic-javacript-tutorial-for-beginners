
        //commenting 
        console.log('hello world');
        //variables
    
        //lbel to put on box
        //cant be reserved word
        //meaningful
        //casesensitve
        let name ="diksha";
        console.log(name);
        //camel notation
        let firsName='diksha';
        lastName='joshi';
        //constants
        //interatrate is a variable here
        let interestRate=0.3;
        interestRate=1;//it can change
        console.log(interestRate);
        //constant
        const interatrate=0.3;
        //it will remain same
        console.log(interestRate);
        //two ctegories
        //1 primitive/value types
        //referencin type
        let name="diksha";//string literal
        let age=19;//number literal
        let isApproved=false;//boolen literal
        let firsName=undefined;//setting explicitly
        let lastName=null;//EXPLICITLY CLEAR TE VALUE OF THE VARIABLE
        let selectedcolor=red;//u cn set thi to null
        //to check the type of variable
        typeof age;//example there is no int or float in the js all numbers are of number type
        // objects in javascript
        let person={
                //add keys values
                //keys
                name="dikshaj"//value
                age=19;

        };
        //dot notation it is better
        person.name="ayush";
        //bracket notation
        person['name']="joshi";
        console.log(person.name);
        //to implement bracket notation
        let selection='name';
        person[selection]='joshi';
        //arrays
        let selectedcolors=['red,blue,orange'];
        console.log(selectedcolors[0]);
        console.log(selectedcolors.length);
        //functions
        function greet(){
                console.log('hello world');

        }
        greet();
        //parameter in function
        function para(name,lastName){
                console.log('hello'+name+''+lastName);//name is parameter
        }
        para('ayush','gupta');
        //function that calculates
        function square(number){
                return number* number;

        }
        square(5);
        console.log(square(5));
        //end of the lecture
