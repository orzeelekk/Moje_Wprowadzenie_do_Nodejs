import fs from 'fs';
import path from 'path';

const getRandomNumber = (max = 100_000_000) => Math.floor(Math.random() * max);

const createStructure = async () => {
    try {
        await fs.promises.mkdir('dir_one');
        for (let i = 1; i <= 10; i++) {
            await fs.promises.writeFile(`./dir_one/file_${i}.txt`,`${getRandomNumber()} ${getRandomNumber()} ${getRandomNumber()} ${getRandomNumber()}`)
        }
    } catch (err) {
        console.log(err)
    }
}

const readData = async () => {
    try {
        await createStructure();
        const files = await fs.promises.readdir('./dir_one');
        return await Promise.all(
            files.map(async (file) => {
                const fileStats = await fs.promises.stat(`./dir_one/${file}`);
                return {
                    basename: path.basename(`./dir_one/${file}`, '.txt'),
                    extname: path.extname(`./dir_one/${file}`),
                    dirname: path.dirname(path.resolve(`./dir_one/${file}`)),
                    size: fileStats.size,
                    birthtime: fileStats.birthtime,
                    isFile: fileStats.isFile(),
                    isDirectory: fileStats.isDirectory(),
                };
            }),
        );
    } catch (err) {
        console.log(err);
    }
}
const saveDataToFile = async () => {
    try {
        const stats = await readData();
        await fs.promises.writeFile('response.txt', JSON.stringify(stats, null, 2)); // K
    } catch (err) {
        console.log(err);
    }
};
saveDataToFile();