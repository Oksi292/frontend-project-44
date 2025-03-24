#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateRound, rules } from '../src/games/prime.js';

runGame(rules, generateRound);

