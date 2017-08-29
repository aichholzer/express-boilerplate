/**
 * Catch Errors Handler
 *
 * Con async/await es necesario capturar los errores,
 * en lugar de usar try{} catch(e) {} en cada controlador
 * se puede envolver a la función en catchErrors() para
 * capturar cualquier error y pasar la ejecución al
 * siguiente middleware de express con next()
 */
exports.catchErrors = fn => (
  function (req, res, next) {
    return fn(req, res, next).catch(next);
  }
);
