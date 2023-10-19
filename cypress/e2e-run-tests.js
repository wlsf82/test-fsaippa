const cypress = require('cypress');
const fs = require('fs');

cypress.run({
    browser: 'chrome',
    spec: './cypress/e2e/CBS/API*.js',
    }).then(({
        status,
        startedTestsAt,
        endedTestsAt,
        totalDuration,
        totalTests,
        totalPassed,
        totalPending,
        totalFailed,
        totalSkipped,
        runs,
    }) => {
    let requestBody = {
        status,
        startedTestsAt,
        endedTestsAt,
        totalDuration,
        totalTests,
        totalPassed,
        totalPending,
        totalFailed,
        totalSkipped,
        systemName: 'CBS',
        testResults:[]
        
    };
    for (var i = 0, len = runs.length; i < len; i++){
        for (var j = 0, len2 = runs[i].tests.length; j < len2; j++){
            requestBody.testResults.push({
                name: runs[i].tests[j].title[1],
                status: runs[i].tests[j].state,
                message: runs[i].tests[j].displayError,
                noOfAttempts: runs[i].tests[j].attempts.length,
            })
        }
    }
    requestBody = JSON.stringify(requestBody)

    fs.writeFile('cypress/reports/test2.json' ,requestBody, err => {
        });
    

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: requestBody,
    };

    fetch('http://qa0156:18002/rest/api/Cypress', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Request completed:', data);
        })
        .catch(error => {
            console.error('Request error:', error);
        }); 
    });
      