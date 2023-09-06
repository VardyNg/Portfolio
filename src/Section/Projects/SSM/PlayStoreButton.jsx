import Playstore_download from '../../../Images/PlayStore_download.png';

const playStoreURL = "https://play.google.com/store/apps/details?id=com.app.signalstickermaker"
function PlayStoreButton(props) {
  return (
    <a href={playStoreURL} target="_blank" rel="noreferrer">
      <img src={Playstore_download} alt="link to AppStore"  style={{height: props.height}} />
    </a>
  )
}

export default PlayStoreButton;