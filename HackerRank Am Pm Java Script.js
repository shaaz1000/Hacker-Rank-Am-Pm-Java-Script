function TimeConversion(time){
  let getTimeOfDay = time.split(":")
  let lastItem = getTimeOfDay.pop()
  for(let i = 0 ; i<lastItem.length ; i++){
    if(i==2){
      if(lastItem[i] == "P"){
        let convertTime = getTimeOfDay[0] % 12 + 12
        return convertTime+":"+getTimeOfDay[1]+":"+lastItem[0]+""+lastItem[1]
      }
      else if(lastItem[i] == "A"){
        return getTimeOfDay[0]+":"+getTimeOfDay[1]+":"+lastItem[0]+""+lastItem[1]
      }
    }
  
  
}


console.log(TimeConversion("11:01:02AM"))