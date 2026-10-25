function makeSample(subject){
    return {
      subject,
      questions: Array.from({length:10},(_,i)=>({
        name:`${subject} 문제 내용${i+1}`,
        answers:[0,1,2,3].map(k=>({content:`답변${k+1}`,isAnswer:k===i%4}))
      }))
    };
}

const quizData = ["상식","역사","영화","성경"].map(makeSample);
  
