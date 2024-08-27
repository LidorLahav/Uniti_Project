const express = require('express');
const exeFilesRoutes = require('./routes/exeFilesRoutes')
// import exeFilesRoutes from './routes/exeFilesRoutes';

const app = express();
app.use(express.json());
app.use('/api/exeFiles', exeFilesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
