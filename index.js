function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(value){
    const blocks=distanceFromHqInBlocks(value)
    return blocks*264
}

function distanceTravelledInFeet(start,end){
    const blocks =Math.abs(start-end)
    return blocks*264
}

function calculatesFarePrice(start,end){
    const blocks=Math.abs(start-end)
    const feet=blocks*264
    if(feet <= 400){
       const price=0
       return price
    }
    else if(feet>=400 && feet<=2000){
        const price=2.56
        return price
    }
    else if(feet>2000 && feet<2500){
        const price=25
        return price
    }
    else{
        return "cannot travel that far"
    }
}