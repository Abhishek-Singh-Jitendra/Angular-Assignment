module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {

        title: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        }
    });

    return Product;
};