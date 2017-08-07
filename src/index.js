// import css files here for production only
import './index.css';

// numeral is a number formatting module
import numeral from 'numeral';

const demoValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${demoValue} for this Javascript enviroment!`);
