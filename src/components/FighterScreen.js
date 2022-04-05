const FighterScreen = ({isVisible, setVisible, selectedCharacter}) => {
    return (
    <div onClick={() => {setVisible(false)}}className="fighter-screen" style={{display: isVisible ? "block" : "none"}}>
        <h2>{selectedCharacter.name}</h2>
        <img width="100" height="100" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, modi nobis. Vero harum ratione nostrum suscipit doloribus dolorum, vel asperiores non quidem, quibusdam atque laudantium culpa unde labore velit. Similique.
        </p>
      </div>)
}

export default FighterScreen;