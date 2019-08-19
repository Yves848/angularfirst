import {plainToClass, classToPlain} from 'class-transformer'

import { SearchResult } from './src/app/models/Images';

let sr = classToPlain(SearchResult, JSON);

console.log(sr);
