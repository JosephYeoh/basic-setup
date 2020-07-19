import { allConfig } from '@common/envBuild';

const envVars = allConfig();

interface ServerConfig {
  TEST: number;
}

const env: ServerConfig = { TEST: envVars.TEST || 1337 };

export { env };
