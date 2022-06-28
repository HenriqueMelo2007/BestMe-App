const questions = [
  'Quantas horas você estudou hoje?',
  'O que aprendeu de novo?',
  'Quantas pessoas você ajudou hoje?',
  'Algo te aborreceu? Há como melhorar?',
  'Algo te fez feliz?'
]

console.log(`Seja bem vindo ao BestMe APP! Gostaria de refletir sobre o dia de hoje com algumas perguntas? Responda com "c" para continuar, ou "l" para sair (a qualquer momento)`)

process.stdin.on('data', data => {
  const dados = data.toString().trim().toLowerCase()

  if (dados == 'c') {
    function ask ( index = 0 ) {
      console.log(questions[index])
    }

    ask()

    const answers = []

    process.stdin.on('data', data => {
      answers.push(data.toString().trim())
      if (answers.length < questions.length) {
        ask(answers.length)
      } else {
        process.exit()
      }
    })

    process.on('exit', () => {
      console.log(`
      Aqui estão suas respostas:
      
      Você estudou um total de:
      ${answers[0]} horas
      
      Você aprendeu:
      ${answers[1]}
      
      Você ajudou:
      ${answers[2]} pessoas
      
      Você se aborreceu? Se sim por conta de:
      ${answers[3]}
      
      Você ficou feliz? Se sim por conta de:
      ${answers[4]}
      
      Fim! Volte amanhã para refletir novamente`)
    })

  } if (dados == 'l') {
    console.log('Uma pena a sua saída :(')
    process.exit()
  }
})