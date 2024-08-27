const path = require('path');
const config = require('../config');
const exeData = require('../dataAccess/exeData');

async function createEXEFile(fileName, content) {
    await exeData.createEXEFile(fileName, content);
}

async function readEXEFile(fileName) {
    const fileData = await exeData.readEXEFile(fileName);
    return fileData;
}

async function updateEXEFile(fileName, content) {
    await exeData.updateEXEFile(fileName, content);

    // Check and generate unique file name
    const newFileName = await exeData.getUniqueEXEFileName(fileName);
    await exeData.createEXEFile(newFileName, content);
}

async function deleteEXEFile(fileName) {
    await exeData.deleteEXEFile(fileName);
}

async function renameEXEFile(oldFileName, newFileName) {

    if (!exeData.isEXEFileExist(oldFileName)) {
        throw new Error('File not found.');
    }

    // Check if a file with the new name already exists and generate a unique name if needed
    const uniqueFileName = await exeData.getUniqueEXEFileName(oldFileName, newFileName);

    // Rename the file
    await exeData.renameEXEFile(oldFileName, uniqueFileName);
}

module.exports = {
    createEXEFile,
    readEXEFile,
    updateEXEFile,
    deleteEXEFile,
    renameEXEFile
}