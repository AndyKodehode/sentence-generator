let newSentence = ''
let sentenceBtn = document.getElementById("sentence-btn")
let sentenceEl = document.getElementById("sentence-el")
let sentenceArr = ["hello you fool I love you", "I`ll be back", "no-one puts baby in the corner", ]

/*for( i = 0; i< sentenceArr.length; i++){
    
    let newSentence = sentenceArr[Math.floor(Math.random()*sentenceArr.length)]
    console.log(newSentence)
    sentenceEl.textContent += newSentence + " , "
}*/

sentenceBtn.addEventListener("click", function(){
  // for( i = 0; i< sentenceArr.length; i++){
    
        let newSentence = sentenceArr[Math.floor(Math.random()*sentenceArr.length)]
        console.log(newSentence)
        sentenceEl.textContent = newSentence + " "
   // }
})