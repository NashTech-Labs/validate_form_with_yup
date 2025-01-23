import './App.css';
import Picker from 'emoji-picker-react';
import React, {useState} from 'react';


function App() {
  const EmojiData = ({ chosenEmoji }) => (
    <div>
      <strong>Unified:</strong> {chosenEmoji.unified}
      <br />
      <strong>Names:</strong> {chosenEmoji.names.join(', ')}
      <br />
      <strong>Symbol:</strong> {chosenEmoji.emoji}
      <br />
      <strong>ActiveSkinTone:</strong> {chosenEmoji.activeSkinTone}
    </div>
  );
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  return (
 
    <div>
      <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} native />
      {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}
    </div>
  )
}

export default App;
