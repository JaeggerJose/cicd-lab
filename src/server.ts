import { buildApp } from './app';

const app = buildApp({ logger: true });
// Intentional type error for CI homework failure demo:
// process.env.PORT is string | undefined; `|| 3000` widens to string | number,
// which cannot be assigned to `number` without an explicit conversion.
const port: number = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

async function start() {
  try {
    await app.listen({ port, host });
    app.log.info(`Server listening at http://${host}:${port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

void start();
