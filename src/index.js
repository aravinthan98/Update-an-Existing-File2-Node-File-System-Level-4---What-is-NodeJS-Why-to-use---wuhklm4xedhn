const fs = require('fs').promises;
const fileName = 'myfile.txt';

const updateFile = async (fileName, fileContent) => {
    //Write your code here to overwrite the file content
    //Don't change function name
    await fs.writeFile(fileName,fileContent);
    const updatedContent=await fs.readFile(fileName,"utf-8");
    return UpdatedContent;
    
};


module.exports = updateFile;
