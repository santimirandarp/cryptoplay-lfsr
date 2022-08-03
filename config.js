export default { 
  importMeta: import.meta, 
  flags:{
    polynomy:{type:'string', alias:'p'},//write polynomy as csv string, low to high
    grade:{type:'number', alias:'g'},//or a grade from 0 to ?? for the maximum period polynomy from wikipedia
    message: {type:'string', alias:'m'}//message from user
    }
  }
