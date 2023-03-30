export const position = (obj: any) => {
  let currenttop = 0;

  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop];
  }
};
