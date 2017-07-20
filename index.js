function theBeatlesPlay(musicians, instruments) {
  let whoPlaysWhat = []
  for (let i = 0; i < musicians.length; i++) {
    whoPlaysWhat[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return whoPlaysWhat
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(param) {
  let i = param
  let result = []
  do {
    result.push("I love the Beatles!")
    i += 1
  } while (i < 15);
  return result
}
