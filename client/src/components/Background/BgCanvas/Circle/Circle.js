
export const circleConstructor=(number)=>{
    const circleArray=[];
    for (let i = 0; i < number; i++){
      let radius =  Math.random() * 3
      let dx = Math.random() * 0.2 * (-1) ** getRndInteger(-1,1);
      let dy = Math.random() * 0.2 * (-1) ** getRndInteger(-1,1);
      let x = Math.random() * (window.innerWidth - radius * 2) + radius;
      let y = Math.random() * (window.innerHeight - radius * 2) + radius;

      circleArray.push({
        x:x,
        y:y,
        dx:dx,
        dy:dy,
        radius:radius
        });

    }
    return circleArray;
  };
export const getRndInteger=(min,max)=>{
    return Math.floor(Math.random() * (max - min) ) + min;
  };
