const checkRes = (provide) => {
  let isRes = undefined;
  window.w >= 768 ? provide.res = "pc" : provide.res = "mo";
  provide.res = isRes;

  console.log(`window width size : ${w} \nwindow height size : ${h} \nwindow responsive : ${res} \nwindow location : ${loc}`);
  return isRes;
}

export default checkRes;