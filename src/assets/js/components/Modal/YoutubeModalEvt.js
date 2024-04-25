const youtubeModalEvt = (th,name, toggle) => {
  const regExp = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;

  if(toggle){
    let videoUrl = th.data('youtube');
    let videoId = '';
    if(th.hasClass("shorts_video")){
      videoId = regExp.exec(videoUrl)[3];
    }else{
      videoId = videoUrl.match(/[?&]v=([^?&]+)/)[1];
    }
    $(`#${name}`).find("iframe").attr('src',`https://www.youtube.com/embed/${videoId}`);
  }else{
    $(`#${name}`).find("iframe").attr('src','');
  }
}

export default youtubeModalEvt;