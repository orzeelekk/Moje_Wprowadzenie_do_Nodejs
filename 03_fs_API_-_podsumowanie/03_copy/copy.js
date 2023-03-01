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

const getRandomNumber = () => Math.floor(Math.random() * 100_000_000);

async function copyFile(fileToCopy, locationToCopy) {
    await createStructure();
    const extname = path.extname(fileToCopy);
    const basename = path.basename(fileToCopy, extname);
    let newFile = path.join(locationToCopy, `${basename}${extname}`);


    try {
        await fs.promises.access(newFile, fs.constants.F_OK);
        //dziala tylko jak jest kopia

        const fileName = `${basename}_${getRandomNumber()}${extname}`;
        newFile = path.join(locationToCopy, fileName);

        const fileData = await fs.promises.readFile(fileToCopy, 'utf-8');
        await fs.promises.writeFile(newFile, fileData);
    } catch {
        //dziala jak pusto
        try {
            const fileData = await fs.promises.readFile(fileToCopy, 'utf-8');
            await fs.promises.writeFile(newFile, fileData);
        } catch (err) {
            console.log(err);
        }
    }
}
copyFile('./dir_one/file1.txt', './dir_two');
copyFile('./dir_one/file1.txt', './dir_one');