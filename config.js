const config { 
  importMeta: import.meta, 
  flags:{
    polynomy:{type:'string', alias:'p'},//write polynomy as csv string, low to high
    grade:{type:'number', alias:'g'},//or a grade from 0 to ?? for the maximum period polynomy from wikipedia
    message: {type:'string', alias:'m'}//message from user
    }
  }


//import selectByGrade from 'wikiPolys'; (just an idea, we create an object with the ones w maximum
//period)


//set up of the CLI parser
const { message, polynomial, grade } = meow("parsing...", config).flags

if(!message){
  throw new SyntaxError("User message is missing.")
}

if(!p && !grade){
  throw new SyntaxError("Either polynomyal or grade must be specified.")
}

const binaryMsg = message
.split('')
.map(letter => { 
    const binaryLetter = letter.charCodeAt().toString(2);
    return parseInt(binaryLetter,2)
    })

export default { binaryMsg, polynomial, grade }
