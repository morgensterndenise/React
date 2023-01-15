import {Book} from './book';

function checkOut<T,V>(item: T, customer: V): T {

    let availableItem: T = getItemFromDb(item);
    let availableCustomer: V = getCustomerFromDb(customer);
    if(availableItem && availableCustomer){
        //todo
    }

    return item;
}

let someBook: Book = new Book();
checkOut<Book>(someBook);