var pool = require('./bd');

async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedad(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query,[obj])
        return rows;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadesByNumero(numero) {
    var query = 'delete from novedades where numero = ?';
    var rows = await pool.query(query,[numero]);
    return rows;
}

/*para modificar*/

async function getNovedadBynumero(numero) {
    var query = 'select * from novedades where numero = ? ';
    var rows = await pool.query(query,[numero]);
    return rows[0];
}

/*para modificar el UPDATE de los datos*/

async function modificarNovedadBynumero(obj,numero) {
    try {
        var query = 'update novedades set ? where numero = ?';
        var rows = await pool.query(query,[obj,numero]);
        return rows;
    }catch (error) {
        throw error;
    }
}



module.exports = {getNovedades, insertNovedad, deleteNovedadesByNumero, getNovedadBynumero, modificarNovedadBynumero}