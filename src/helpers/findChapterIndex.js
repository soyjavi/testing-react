export const findChapterIndex = (chapters = {}, component) =>
  Object.keys(chapters).findIndex((chapter = '') => {
    const name = chapter.includes('.') ? chapter.split('.')[1] : chapter;

    return name.trim() === component;
  }) + 1;
