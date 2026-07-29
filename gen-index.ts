import { regeneratePluginIndex } from './quartz/plugins/loader/gitLoader.js';
await regeneratePluginIndex({ verbose: true });
console.log('Done generating plugin index');
