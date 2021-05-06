function Video() {
  return (
    <div className="video">
      <div className="video__thumbnail">
        <img
          src="https://i.ytimg.com/vi/2mDCVzruYzQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMzUssSrMdzd-g7ts0pAjoHUhsUw"
          alt="thumbnail"
        />
      </div>
      <div className="video__details">
        <div className="author">
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwnjs39FzjzREzTGZS6kP0YEWRHsNVnAjQ2tYRoGung=s68-c-k-c0x00ffffff-no-rj"
            alt="thumbnail"
          />
        </div>
        <div className="title">
          <h3>Buttabomma Song</h3>
          <a
            href="https://www.youtube.com/channel/UCmo0ZANU_oN_hWy77Hjuuxg"
            target="_blank"
            rel="noreferrer"
          >
            Watop
          </a>
          <span>8.4 M Views &#8226; 1 Month Ago </span>
        </div>
      </div>
    </div>
  );
}

export default Video;
