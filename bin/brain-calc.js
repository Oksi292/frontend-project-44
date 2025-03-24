#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateRound, rules } from '../src/games/calc.js';

runGame(rules, generateRound);


