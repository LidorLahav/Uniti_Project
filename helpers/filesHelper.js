const fs = require('fs');

// Create operation
function createFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                reject(`Error creating file:, ${err}`);
            } else {
                resolve(`Succeed creating file:, ${filePath}`);
            }
        });
    })
}

// Read operation
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(`Error reading file:, ${err}`);
            } else {
                resolve(data);
            }
        });
    });
}

// Update operation (Append data to file)
function updateFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, content, (err) => {
            if (err) {
                reject(`Error updating file:, ${err}`);
            } else {
                resolve(`Succeed updating file:, ${filePath}`);
            }
        });
    });
}

// Delete operation
function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(`Error deleting file:, ${err}`);
            } else {
                resolve(`Succeed deleting file:, ${filePath}`);
            }
        })
    });
}

// Retrieve file stat
function getFileStat(filePath) {
    return new Promise((resolve, reject) => {
        fs.stat(filePath, (err) => {
            if (err) {
                reject(`Error reading file stat:, ${err}`);
            } else {
                resolve(`Succeed reading file stat:, ${filePath}`);
            }
        });
    });
}

// Retrieve a reading stream
function getReadingStream(filePath) {
    return fs.createReadStream(filePath);
}

// Retrieve a writing stream
function getWritingStream(filePath) {
    return fs.createWriteStream(filePath);
}

async function getUniqueFileName(filePath, fileName) {
    let newFileName = fileName;
    let fileExists = await getFileStat(filePath);
    let counter = 1;

    while (fileExists) {
        const originalfileName = path.basename(fileName, path.extname(fileName));
        const fileExt = path.extname(fileName);
        newFileName = `${originalfileName}_${counter}${fileExt}`;
        filePath = path.join(destination, newFileName);
        fileExists = await getFileStat(filePath);
        counter++;
    }

    return newFileName;
}

function renameFile(oldFilePath, newFilePath) {
    return new Promise((resolve, reject) => {
        fs.rename(oldFilePath, newFilePath, (err) => {
            if (err) {
                reject('Error renaming file.');
            } else {
                resolve(`Succeed renaming file:, ${oldFilePath}`);
            }
        });
    });
}

function isFileExists(filePath) {
    return new Promise((resolve, reject) => {
        resolve(fs.existsSync(filePath));
    });
}

function extractFileNameFromUrl(url) {
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname;
    const fileName = pathname.substring(pathname.lastIndexOf('/') + 1);
    return fileName;
}

module.exports = {
    createFile,
    readFile,
    updateFile,
    deleteFile,
    getFileStat,
    getReadingStream,
    getWritingStream,
    getUniqueFileName,
    renameFile,
    isFileExists,
    extractFileNameFromUrl
}