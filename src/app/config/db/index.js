const mongoose = require('mongoose');

async function connect() {
    try {
   
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
