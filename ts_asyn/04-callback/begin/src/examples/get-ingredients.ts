import { ingredients } from './ingredients';

/**
 * TODO
 * Wait for a delay, get the ingredients,
 * then pass them in a callback function
 */
export function getDataAfterDelay(
    delayMs:number,
    callback: (data:string[]) => void){ //as the callback returns a function
     
        setTimeout(() => {
           const data = ingredients;
           //we call our callback func and pass the data, this will happen after the delay time
           callback(data);
        }, delayMs);
}