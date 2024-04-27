const poll =
{
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    //method registerNewAnswer
    registerNewAnswer()
    {
           let answer=Number(
            prompt(`${this.question}\n ${this.options.join('\n')}\n(write option number)`)
        );

        console.log(answer);

        if(typeof answer==='number' && answer<this.answers.length)
        {
          const arr=this.answers;
          arr[answer]++;//in place of this we can also write this.answers[answer]++;
          console.log(arr);
         
         /* //in case if i want to perform operation on each element of array you can use tranditional for loop
          for(let i=0;i<this.answers.length;i++)
          {
            this.answers[i]++;
          }
          //another one is usig foreach loop
        this.answers.forEach(function(element,index,arr){arr[index]++;});

        //using arrow function
        this.answers.forEach((ele,indx,arr1)=> {console.log(indx,ele)});*/
    }
       

        else
        alert("invalid input");
    },

};
poll.registerNewAnswer();

//task to addeventlistener
//document.querySelector('.poll').addEventListener(click,poll.registerNewAnswer.bind(poll));

const displayResults=function(type)
{
   if(typeof type===Array)
    console.log(type);
   else if(typeof type===String)
   {
    
   }
};