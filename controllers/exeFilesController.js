const exeService = require('../services/exeService');
const {extractFileNameFromUrl} = require('../helpers/filesHelper');

async function getEXEFile(req, res) {
    const url = req.params.url;
    const fileName = extractFileNameFromUrl(url);
    try {
        const exeFile = await exeService.readEXEFile(fileName);
        res.send(exeFile);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve exe file' });
    }
}

async function addEXEFile(req, res) {
    const url = req.body.url;
    const fileName = extractFileNameFromUrl(url);
    const content = req.body.data;
    try {
        await exeService.createEXEFile(fileName, content);
        res.send(`Succeeded to create exe file: ${fileName}`);
    } catch (error) {
        res.status(500).json({ error: `Failed to create exe file: ${fileName}` });
    }
}

async function updateEXEFile(req, res) {
    const url = req.body.url;
    const fileName = extractFileNameFromUrl(url);
    const newContent = req.body.data;
    try {
        await exeService.updateEXEFile(fileName, newContent);
        res.send(`Succeeded to update exe file: ${fileName}`);
    } catch (error) {
        res.status(500).json({ error: `Failed to update exe file: ${fileName}` });
    }
}

async function deleteEXEFile(req, res) {
    const url = req.params.url;
    const fileName = extractFileNameFromUrl(url);
    try {
        await exeService.deleteEXEFile(fileName);
        res.send(`Succeeded to delete exe file: ${fileName}`);
    } catch (error) {
        res.status(500).json({ error: `Failed to delete exe file: ${fileName}` });
    }
}

async function renameEXEFile(req, res) {
    const oldFileName = req.params.oldFileName;
    const newFileName = req.params.NewFileName;
    try {
        await exeService.renameEXEFile(oldFileName, newFileName);
        res.send(`File renamed successfully: ${newFileName}`);
    } catch (error) {
        res.status(500).json({ error: `Error renaming file: ${oldFileName}` });
    }
}

module.exports = { 
    getEXEFile,
    addEXEFile,
    updateEXEFile,
    deleteEXEFile,
    renameEXEFile
};
