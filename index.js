const readline = require('readline-sync')


function start () {

const content = {}

content.searchTerm = askAndReturnSearchTerm()
content.prefix = askAndReturnPrefix()

 function askAndReturnSearchTerm(){
	return readline.question('o que busca: ')
	}

function askAndReturnPrefix(){
	const prefixes = ['quem e:','o que e:', 'a historia de:']
	const selectedPrefixIndex = readline.keyInSelect(prefixes,'o que quer saber')
	const selectedPrefixText = prefixes[selectedPrefixIndex]


	return selectedPrefixText
}

  console.log(content)
}
start()
