import * as SQLite from 'expo-sqlite';


export const db = await SQLite.openDatabaseAsync('furnitureStoreApp');

await db.execAsync
    //  PRAGMA journal_mode = WAL;: multiple readers and a single writre
    (`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS Product (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        price REAL,
        description TEXT,
        category TEXT,
        image TEXT,
        rating_rate REAL,
        rating_count INTEGER);
    `);

await db.execAsync
    //  PRAGMA journal_mode = WAL;: multiple readers and a single writre
    (`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS Cart (
        id INTEGER PRIMARY KEY NOT NULL,
        prodId INTEGER,
        quantity INTEGER,
        FOREIGN KEY (prodId) REFERENCES Product(id));
    `);


export function populateProducts(productsList) {
    for (const product of productsList) {
        db.runAsync(`
        INSERT INTO Product (id, title, price, description, category, image, rating_rate, rating_count)
        VALUES (?, ?, ?, ?, ?, ?)`
            , [product.id,
            product.title,
            product.price,
            product.category,
            product.image,
            product.rating.rate,
            product.rating.count])
    }
    return (
        console.log("insertion sucessfull")
    );
}