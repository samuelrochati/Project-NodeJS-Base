const moment = require("moment");
const { ErrorHandler } = require("../helpers/error");

moment.locale("pt-br");

module.exports = {
  create({ bot }) {
    return async (request, response, next) => {
      try {
        const exemplo = request.body.exemplo;

        if (!exemplo) {
          throw new ErrorHandler(422, "Exemplo :D");
        }

        next();
      } catch (error) {
        next(error);
      }
    };
  },
};
