import fs from "fs";
import path from 'path';

const createStructure = async () => {
    try {
        await fs.promises.mkdir('./dir_one', {recursive: true});
        await fs.promises.mkdir('./dir_two', {recursive: true});
        await fs.promises.writeFile('./dir_one/file1.txt','ugabuga');
    } catch (err) {
        console.log(err)
    }
}
async function moveFile(file,fileLocation) {
    try {
        await createStructure()
        const basename = path.basename(file);
        const newFile = path.extname(fileLocation) ? fileLocation : path.join(fileLocation, basename);
        const fileData = await fs.promises.readFile(file, "utf-8");

        await fs.promises.writeFile(newFile, fileData);

        await fs.promises.unlink(file);
    } catch (err) {
        console.log(err)
    }
}

moveFile('./dir_one/file1.txt', './dir_two/test.txt');