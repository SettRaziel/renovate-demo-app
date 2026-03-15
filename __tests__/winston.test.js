const winston = require('winston');

test('erstellt einen Logger und loggt eine Nachricht', () => {
  const logger = new winston.Logger({
    transports: [new winston.transports.Console({ silent: true })],
  });
  logger.info('Testmeldung');
});
