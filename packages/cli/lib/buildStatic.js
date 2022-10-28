import fs from 'fs';
import path from 'path';
import { execa } from 'execa';

import { exit, error, log } from './utils/index.js';
import { FLOWERSHOW_FOLDER_NAME } from './const.js';


export default async function buildStatic(dir) {
  const flowershowDir = path.resolve(dir, FLOWERSHOW_FOLDER_NAME);

  const subprocess = execa('npm', [ 'run', 'export' ], { cwd: flowershowDir });

  subprocess.stdout.pipe(process.stdout);
}