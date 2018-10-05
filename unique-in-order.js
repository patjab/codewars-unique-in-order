var uniqueInOrder=function(iterable){
  const answer = []
  for ( let char of iterable ) {
    if (answer[answer.length-1] !== char) {
      answer.push(char)
    }
  }
  return answer
}
