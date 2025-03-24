#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateRound, rules } from '../src/games/gcd.js';

runGame(rules, generateRound);