import { sequelize } from './configDB.js';
import defineRelations from '../models/relations.js';


class ConnectDataBase {
    constructor() {
        this.sequelize = sequelize;
    };

    async connect() {
        // Define relaciones antes de sincronizar la base de datos
        defineRelations();

        // Sincroniza la base de datos
        try {
            await this.sequelize.sync();
            console.log('Base de datos conectada');
        } catch (err) {
            console.log('Error al conectar la base de datos', err);
        };
    };
};


export default ConnectDataBase;