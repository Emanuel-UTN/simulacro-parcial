import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

const Starbucks_Directory = sequelize.define("Starbucks_Directory", {
    storeNumber: {
        type: DataTypes.TEXT,
        primaryKey: true,
        autoIncrement: true,
        field: "STORE_NUMBER"
    },
    storeName: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "STORE_NAME"
    },
    streetAddress: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "STREET_ADDRESS"
    },
    city: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "CITY"
    },
    province: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "PROVINCE"
    },
    country: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "COUNTRY"
    },
    postCode: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "POSTCODE"
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "LONGITUDE"
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "LATITUDE"
    }
},{
    timestamps: false,
    tableName: "STARBUCKS_DIRECTORY"
});

export default Starbucks_Directory;