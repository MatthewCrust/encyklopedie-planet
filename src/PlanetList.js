import Planet from './Planet.js'
import './PlanetList.css'
function PlanetList(){
    return(
        <div className='planet-list-container'>
            <Planet title={"Merkur"} fact={"První známou osobou, která pozorovala planetu přímo pomocí dalekohledu, byl Gallileo Gallilei."} text={"Merkur je Slunci nejbližší a současně i nejmenší planetou sluneční soustavy,[1] dosahuje pouze 140 % velikosti zemského Měsíce a je menší než Jupiterův měsíc Ganymed a Saturnův Titan.[2] Merkur nemá žádný měsíc. Jeho oběžná dráha je ze všech planet nejblíže ke Slunci[3] a jeden oběh trvá pouze 87,969 dne. Dráha Merkuru má největší výstřednost dráhy ze všech planet sluneční soustavy a sama planeta má nejmenší – téměř nulový – sklon rotační osy. Během dvou oběhů kolem Slunce dojde ke třem otočením kolem rotační osy. Perihelium jeho dráhy se stáčí ke Slunci o 43 vteřin za století; fenomén, který ve 20. století vysvětlil Albert Einstein obecnou teorií relativity.[4] Při pohledu ze Země dosahuje Merkur jasnosti mezi -2,0 až 5,5m, takže je viditelný i pouhým okem, ale jelikož se nikdy nevzdaluje od Slunce dále než na 28,3°, je většinu roku těžko pozorovatelný. Nejlepší podmínky nastávají při ranním a večerním soumraku, kdy se slunce nachází pod horizontem. "} imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/375px-Mercury_in_color_-_Prockter07-edit1.jpg"}/>
            <Planet title={"Venuše"} imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Venuspioneeruv.jpg/375px-Venuspioneeruv.jpg"}/>
            <Planet title={"Země"} imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/375px-The_Blue_Marble_%28remastered%29.jpg"}/>
            <Planet title={"Mars"} imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/375px-OSIRIS_Mars_true_color.jpg"}/>
            <Planet title={"Jupiter"} imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter.jpg/375px-Jupiter.jpg"}/>
            <Planet title={"Saturn"} imageUrl={"https://c02.purpledshub.com/uploads/sites/48/2019/10/Hubble-Saturn-f74bbab.jpg?w=1029&webp=1"}/>
            <Planet title={"Uran"} imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg/375px-Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg"}/>
            <Planet title={"Neptun"} imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Neptune_Voyager2_color_calibrated%2C_brightened.png/375px-Neptune_Voyager2_color_calibrated%2C_brightened.png"}/>
        </div>
    )
};

export default PlanetList;