import { readdir } from "fs/promises";

const allFiles = [];

const readDirectory = async (directory, previous = []) => {
  const files = await readdir(directory, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      const _previous = [...previous, file.name];
      await readDirectory(directory + "/" + file.name, _previous);
    } else {
      // const fileName = file.name.split(".")[0];
      const fileName = file.name.slice(0, -3);
      const fileParams = {
        params: { slug: previous ? [...previous, fileName] : [fileName] },
      };
      allFiles.push(fileParams);
    }
  }
  return allFiles;
};

export default readDirectory;
