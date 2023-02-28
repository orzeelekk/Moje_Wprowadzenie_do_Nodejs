import fs from 'fs';
import path from 'path';

const getRandomNumber = (max = 100_000_000) => Math.floor(Math.random() * max);

const createStructure = async () => {
    await fs.promises.mkdir("dir_one");
    for (let i = 1; i <= 10; i++) {
        await fs.promises.writeFile(`file_${i}.txt`,`${getRandomNumber()} ${getRandomNumber()} ${getRandomNumber()} ${getRandomNumber()}`)
    }
}
const readData = async () => {
    const files = await fs.promises.readdir("dir_one")
    const data = [];

    for (let i = 0; i < files.length; i++) {
        const fileStats = await fs.promises.stat(`dir_one/${files[i]}`)
        data.push()

    }

}
