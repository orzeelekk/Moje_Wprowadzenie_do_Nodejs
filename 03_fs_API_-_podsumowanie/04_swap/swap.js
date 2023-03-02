import fs from "fs"
import path from "path"

const createStructure = async () => {
    try {
        await fs.promises.mkdir('./dir_one', {recursive: true})
        await fs.promises.mkdir('./dir_two', {recursive: true})
        await fs.promises.writeFile('./dir_one/file1.txt','dzangalanga')
        await fs.promises.writeFile('./dir_two/file2.txt','ugabuga')
    } catch (err) {
        console.log(err)
    }
}

async function swapFiles(file1, file2) {
    try {
        await createStructure()
        const dirname1 = path.dirname(path.resolve(file1))
        console.log(path.resolve(file1))
        console.log(dirname1)
        const dirname2 = path.dirname(path.resolve(file2))

        const basename1 = path.basename(file1)
        const basename2 = path.basename(file2)
        console.log(basename1)

        //teraz wartosci
        const data1 = await fs.promises.readFile(file1, 'utf-8')
        const data2 = await fs.promises.readFile(file2, 'utf-8')
        console.log(data1)

        const path1 = path.join(dirname2, basename1)
        const path2 = path.join(dirname1, basename2)

        await fs.promises.writeFile(path1, data1);
        await fs.promises.unlink(file1);

        await fs.promises.writeFile(path2, data2);
        await fs.promises.unlink(file2);
    } catch(err) {
        console.log(err)
    }
}
swapFiles('./dir_one/file1.txt', './dir_two/file2.txt')