/*  this script generates mock data for local development.
    this way you dont have to point to an actual api.
    but you can enjoy realistic, but randomized data,
    and rapid page loads due to local, static data.
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

// this line uses JSON Schema Faker to take in a schema in mockDataSchema.js
// and uses stringify to convert that into a json string.
const json = JSON.stringify(jsf(schema));

// we then save that json string to a file named db.json
fs.writeFile('./src/api/db.json', json, function(err) {
    // if err use chalk to display the error in red
    if (err) {
        console.log(chalk.red(err));
    // if okay use chalk to display the success message in green
    } else {
        console.log(chalk.green('Mock data successfully generated.'));
    }
});
