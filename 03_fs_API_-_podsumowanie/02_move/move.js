import fs from "fs";

const move = async(path1,path2) => {
    const fileValue = await js.promises.readFile(path1);

    await fs.promises.writeFile(path2,fileValue);
    await fs.promises.unlink(path1);
}

(async() => {
    await move (`./one.txt`,`./fir/two.txt`)
})();