import AppStore_download from '../../../Images/AppStore_download.svg';
const appStoreURL = "https://apps.apple.com/bm/app/sigicker-sticker-maker/id1550885981";

function AppStoreButton(props) {
  return (
    <a href={appStoreURL} target="_blank" rel="noreferrer">
      <img src={AppStore_download} alt="link to AppStore"  style={{height: props.height}} />
    </a>
  )
}

export default AppStoreButton;