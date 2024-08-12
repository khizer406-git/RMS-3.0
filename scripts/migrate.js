import { execSync } from 'child_process';

execSync('npx sequelize-cli db:migrate', {
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'development' },
});
