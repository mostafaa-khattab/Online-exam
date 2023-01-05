import { Quiz } from "./Quiz.js"

export class Setting {
    constructor() {
        this.categoryElement = document.getElementById("category")
        this.difficultyElement = document.getElementsByName("difficulty")
        this.numberOfQuestionsElement = document.getElementById("numberOfQuestions")
        this.inp_Name = document.getElementById("inp_Name")

        document.getElementById("startBtn").addEventListener("click", this.startQuiz.bind(this))

    }

    async startQuiz() {
        let category = this.categoryElement.value
        let difficulty = Array.from(this.difficultyElement).filter((el) => el.checked)[0].value;
        let numberOfQuestions = this.numberOfQuestionsElement.value

        let api = ` https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty} `

        let questions = await this.fetchApi(api)

        var regxName = /^[A-Z][a-z]{2,9}[0-9]?$/
        if (this.inp_Name.value == "" && regxName.test(this.inp_Name.value) == false) {
            $("#alert1").fadeIn(500)
        } else {
            $("#alert1").fadeOut(500)
        }

        if (numberOfQuestions == "" || numberOfQuestions <= 0 || numberOfQuestions > 50) {
            $("#alert2").fadeIn(500)
        } else {
            $("#alert2").fadeOut(500)
        }

        if (questions.length > 0 && questions.length <= 50 && numberOfQuestions <= 50) {

            $("#setting").css("display", "none").fadeOut(500, () => {
                $("#quiz").css("display", "block").fadeIn(500, () => {

                    $("#sideBar").fadeOut(100)
                })
            })

            let quiz = new Quiz(questions, this.inp_Name.value)

        }

    }

    async fetchApi(API) {
        let response = await fetch(API)
        response = await response.json()

        return response.results
    }
}




