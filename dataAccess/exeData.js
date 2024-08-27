const path = require('path');
const config = require('../config');
const {
    createFile,
    readFile,
    updateFile,
    deleteFile,
    getFileStat,
    getReadingStream,
    getWritingStream,
    getUniqueFileName,
    renameFile,
    isFileExists
} = require('../helpers/filesHelper');

async function createEXEFile(fileName, content) {
    const filePath = path.join(config.FileSystemPath, fileName);
    await createFile(filePath, content);
}

async function readEXEFile(fileName) {
    const filePath = path.join(config.FileSystemPath, fileName);
    const fileData = await readFile(filePath, content);
    return fileData;
}

async function updateEXEFile(fileName, content) {
    const filePath = path.join(config.FileSystemPath, fileName);
    await updateFile(filePath, content);
}

async function deleteEXEFile(fileName) {
    const filePath = path.join(config.FileSystemPath, fileName);
    await deleteFile(filePath, content);
}

async function getEXEStat(fileName) {
    const filePath = path.join(config.FileSystemPath, fileName);
    return await getFileStat(filePath);
}

function getEXEReadingStream(fileName) {
    const filePath = path.join(config.FileSystemPath, fileName);
    return getReadingStream(filePath);
}

function getEXEWritingStream(fileName) {
    const filePath = path.join(config.FileSystemPath, fileName);
    return  getWritingStream(filePath);
}

async function getUniqueEXEFileName(fileName) {
    const filePath = path.join(config.FileSystemPath, fileName);
    return await getUniqueFileName(filePath, fileName);
}

async function isEXEFileExist(fileName) {
    const filePath = path.join(config.FileSystemPath, fileName);
    const isItExists = await isFileExists(filePath);
    return isItExists;
}

async function renameEXEFile(oldFileName, newFileName) {
    const oldFilePath = path.join(config.FileSystemPath, oldFileName);
    const newFilePath = path.join(config.FileSystemPath, newFileName);
    await renameFile(oldFilePath, newFilePath);
}

module.exports = {
    createEXEFile,
    readEXEFile,
    updateEXEFile,
    deleteEXEFile,
    getEXEStat,
    getEXEReadingStream,
    getEXEWritingStream,
    getUniqueEXEFileName,
    isEXEFileExist,
    renameEXEFile
}