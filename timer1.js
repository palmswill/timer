const args=process.argv.slice(2).filter((number)=>!Number.isNaN(parseInt(number)) && number >= 0);


for (let timer of args){
  setTimeout(()=>{
    process.stdout.write('\x07');
  },timer*1000)
}
