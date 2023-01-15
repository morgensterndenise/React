
  
function getInputValue(elementId:string): string {
    const inpElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
  
    return inpElement.value;
  }


function logger(msg:string):void {
   console.log(msg);
}  

export {getInputValue as getValue, logger }