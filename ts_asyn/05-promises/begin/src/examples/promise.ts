import { heroes } from './heroes';
import { Hero } from '../lib';

/**
 * Return a fulfilled promise after a given delay.
 */
const delay: (ms:number) => Promise<void> = function(ms:number) {
   return new Promise<void>(resolve => setTimeout(resolve,ms));
};

/**
 * Return a fulfilled promise of heroes
 */
const getHeroesDelayedAsync: () => Promise<Hero[]> = () => {
    //heroes is a collection of heroes coming from a file
    return new Promise<Hero[]>(resolve => resolve(heroes))
};

/**
 * Return a fulfilled promise of empty array
 */
const getHeroesEmpty: () => Promise<Hero[]> =  () => Promise.resolve([]);

/**
 * Get the heroes via a Promise
 */
export let getHeroesViaPromise: () => Promise<Hero[]> = function() {
    return delay(1000).then(() => getHeroesDelayedAsync());
};

/**
 * Create and return a promise.
 * When invoked, it will settle
 * by either resolve or reject.
 */
export let getHeroesViaNewPromise: () => Promise<Hero[]> = function(){
    const newPromise = new Promise<Hero[]>((resolve, reject) => {
        return delay(1000)
        .then(() => getHeroesDelayedAsync())
        .then((heroes: Hero[]) => {
            if(heroes && heroes.length){
                resolve(heroes);
            } else {
                reject(Error('Oh! Error!'));
            }
        })
    });
    return newPromise;
};

/**
 * Get the heroes,
 * except this always causes a Promise reject
 */
export let getHeroesViaPromiseReject: () => Promise<Hero[]> = function() {
    const newPromise = new Promise<Hero[]>((resolve, reject) => {
        return delay(1000)
        .then(() => getHeroesEmpty())
        .then((heroes: Hero[]) => {
            if(heroes && heroes.length){
                resolve(heroes);
            } else {
                reject(Error('Oh! Error!'));
            }
        })
    });
};

/**
 * Get the heroes
 * Except this always causes a Promise to reject, too
 */
export let getHeroesViaPromiseRejectShorter: () => Promise<Hero[]>;
