const checkRes = () => {
  let isRes;

  if (window.w >= 768) {
    window.res = "pc";
  } else {
    window.res = "mo";
  }

  console.log(`window width size : ${window.w} \nwindow height size : ${window.h} \nwindow responsive : ${window.res} \nwindow location : ${window.loc}`);

  return isRes;
};

export default checkRes;
