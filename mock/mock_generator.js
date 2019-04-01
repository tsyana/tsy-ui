var apiPath = 'system.swagger';
var fileList = ['system.swagger', 'merchant_management.swagger', 'transaction.swagger']
var Swagmock = require('swagmock');

var fs = require('fs');

for (const i in fileList) {
    let mockgen = Swagmock('../../design/yaml/' + fileList[i]);
    mockgen.responses({}, function (error, mock) {
        if(error){
            console.log(error);
            return;
        }
        fs.writeFile(`generate/${fileList[i]}.json`, JSON.stringify(mock, null, 4), (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    });
}