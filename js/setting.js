import {Quiz} from './quiz.js'
export class Setting 
{
    constructor(){
        this.category = document.getElementById("category");
        this.difficulty = document.getElementsByName("difficulty");
        this.amount = document.getElementById("Number");
        this.startBtn = document.getElementById("startBtn");
        this.startBtn.addEventListener("click" ,this.startquiz.bind(this))

    }
    async startquiz()
    {
        let cat = this.category.value; // sports
        let difficulty =[...this.difficulty].filter(element => element.checked); //easy hard
        let amount = this.amount.value; // 10
        let url = `https://opentdb.com/api.php?amount=${amount}&category=${cat}&difficulty=${difficulty[0].value}`;
        let result = await this.fetchUrl(url);
        if(result.length > 0)
        {
            $("#setting").fadeOut(500 , ()=>
            {
                $("#quiz").fadeIn(500)
            })
            new Quiz(result , amount)
        }



    }
   async fetchUrl(url)
    {
        let respones = await fetch(url);
        let data = await respones.json();
        return data.results;
    }
}