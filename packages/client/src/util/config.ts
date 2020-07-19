import { allConfig } from '@common/envBuild';

const envVars = allConfig();

interface ServerConfig {
  TEST_REACT: string;
}

const env: ServerConfig = { TEST_REACT: envVars.TEST_REACT || 'elite' };

export { env };
