const { Router } = require('express');
const { 
    getEXEFile,
    addEXEFile,
    updateEXEFile,
    deleteEXEFile,
    renameEXEFile
} = require('../controllers/exeFilesController');
const router = Router();

router.get('/', getEXEFile);
router.post('/rename', renameEXEFile);
router.post('/', addEXEFile);
router.put('/', updateEXEFile);
router.delete('/', deleteEXEFile);

module.exports = router;
