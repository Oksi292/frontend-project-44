#!/usr/bin/env node

import { runGame } from '../src/index.js';
import generateRound from '../src/games/calc.js';

runGame(generateRound);

