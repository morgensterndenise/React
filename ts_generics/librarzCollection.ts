export interface LibraryCollection<T> {
    _item: T[];
    addItemToCatalog(newItem: T): void;
    removeItemFromCatalog(oldItem: T): void;
}

let titleCollection: LibraryCollection<string> = {
    _item: ['Winnie the Pooh', 'Wierd sisters'],
    addItemToCatalog: s => console.log(`Added item ${s}`),
    removeItemFromCatalog: s => console.log(`Removed item ${s}`)

}