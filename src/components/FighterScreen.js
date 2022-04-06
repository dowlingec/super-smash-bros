const FighterScreen = ({isVisible, setVisible, selectedCharacter}) => {
    return (
    <div onClick={() => { return (null) }}className="fighter-screen" style={{display: isVisible ? "block" : "none"}}>
        <span className="name-bg">{selectedCharacter.name}</span>
        <h2 className="name-fg">{selectedCharacter.name}</h2>
        <img className="char-portrait" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`} />
        <p className="fighter-desc">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, modi nobis. Vero harum ratione nostrum suscipit doloribus dolorum, vel asperiores non quidem, quibusdam atque laudantium culpa unde labore velit. Similique. */}
        </p>
      </div>)
}

export default FighterScreen;