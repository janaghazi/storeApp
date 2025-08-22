import * as SQLite from 'expo-sqlite';

export async function initDatabase() {

    db = await SQLite.openDatabaseAsync('furnitureStoreApp');


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
        (`
    CREATE TABLE IF NOT EXISTS Cart (
        id INTEGER PRIMARY KEY,
        prodId INTEGER,
        quantity INTEGER,
        FOREIGN KEY (prodId) REFERENCES Product(id));
    `);
    return db;
}

export async function populateProducts(productsList) {
    try {
        for (const product of productsList) {
            await db.runAsync(`
            INSERT INTO Product (id, title, price, description, category, image, rating_rate, rating_count)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
                , [product.id,
                product.title,
                product.price,
                product.description,
                product.category,
                product.image,
                product.rating.rate,
                product.rating.count]);
        }
        console.log("insertion sucessfull")
    } catch (error) {
        console.error("Error inserting products:", error);
    }
}


export const handleAddToCart = async (prodID, quantity = 1) => {
    const isExist = await db.getFirstAsync(`SELECT quantity FROM Cart WHERE prodId = ?`, [prodID]);

    if (!isExist) {
        await db.runAsync(`INSERT INTO Cart (prodId, quantity) VALUES(?, ?)`, [prodID, quantity]);
    } else if (isExist) {
        await db.runAsync(`UPDATE Cart SET quantity = quantity + ? WHERE prodId = ?`, [quantity, prodID])
    }
    console.log("insertion in cart succesful")
}

export const deleteCartItem = async (prodID) => {
    try {
        await db.runAsync(`DELETE FROM Cart WHERE prodId = ?`, [prodID]);
        console.log("Item deleted from cart successfully");
    } catch (error) {
        console.error("Error deleting item from cart:", error);
    }
}

export const clearCart = async () => {
    try {
        await db.runAsync(`DELETE FROM Cart`);
        console.log("Cart cleared successfully");
    } catch (error) {
        console.error("Error clearing cart:", error);
    }
};


export const getCartItems = async () => {
    try {
        const cartItems = await db.getAllAsync(`
            SELECT Cart.quantity,
                Product.id AS productId,
                Product.title,
                Product.price
            FROM Cart
            JOIN Product ON Cart.prodId = Product.id
             `);
        return (cartItems)

    } catch (error) {
        console.error("Error fetching cart items:", error);
        return [];
    }
}
export const getCartTotal = async () => {
    const { totalAmount } = await db.getFirstAsync(`
        SELECT SUM(Cart.quantity * Product.price) AS totalAmount
        FROM Cart
        JOIN Product ON Cart.prodId = Product.id
    `);
    return totalAmount || 0;
}
