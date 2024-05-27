import React from 'react';
import AppStore_download from '../../../Images/AppStore_download.svg';
const appStoreURL = "https://apps.apple.com/us/app/emoji-kitchen-keyboard/id6467653793";

function AppStoreButton(props) {
  return (
    <a href={appStoreURL} target="_blank" rel="noreferrer">
      <img src={AppStore_download} alt="link to AppStore"  style={{height: props.height}} />
    </a>
  )
}

export default AppStoreButton;