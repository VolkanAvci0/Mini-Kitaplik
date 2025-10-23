import "./App.css";
import {useState} from "react";
import AramaCubugu from "./assets/components/AramaCubugu";
import KitapListe from "./assets/components/KitapListe";
import KategoriFiltre from "./assets/components/KategoriFiltre";
import FavoriPaneli from "./assets/components/FavoriPaneli";

const kitaplar = [
    {
        id: 1,
        isim: "Nutuk",
        yazar: "Mustafa Kemal Atatürk",
        tur: "Söylev"
    },
    {
        id: 2,
        isim: "JavaScript: The Definitive Guide",
        yazar: "David Flanagan",
        tur: "Programlama"
    },
    {
        id: 3,
        isim: "Learning Web Design",
        yazar: "Jennifer Robbins",
        tur: "Programlama"
    },
    {
        id: 4,
        isim: "SQL for Data Analysis",
        yazar: "Cathy Tanimura",
        tur: "Programlama"
    },
    {
        id: 5,
        isim: "The Maze Runner",
        yazar: "James Dashner",
        tur: "Bilim Kurgu"
    },
    {
        id: 6,
        isim: "Brave New World",
        yazar: "Aldous Huxley",
        tur: "Bilim Kurgu"
    }
]

function App() {
    const [aramaMetni, setAramaMetni] = useState(localStorage.getItem("aramaMetni") || "JavaScript");
    const [kategori, setKategori] = useState("tum");
    const [favoriler, setFavoriler] = useState(JSON.parse(localStorage.getItem("favoriler")) || []);

    const handleKategori = (event) => {
        setKategori(event.target.value);
    }

    const favoriEkle = (id) => {
        const yeniFavoriler = [...favoriler, id];
        setFavoriler(yeniFavoriler);
        localStorage.setItem("favoriler", JSON.stringify(yeniFavoriler));
    }

    const favoriSil = (id) => {
        const yeniFavoriler = favoriler.filter(favori => favori !== id);
        setFavoriler(yeniFavoriler);
        localStorage.setItem("favoriler", JSON.stringify(yeniFavoriler));
    }

    const turler = kitaplar
        .map(kitap => kitap.tur)
        .filter((value, index, self) => self.indexOf(value) === index);

    const filtrelenmisKitaplar = kitaplar.filter(kitap => {
        return (kitap.isim.toLowerCase().includes(aramaMetni.toLowerCase()) || kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase()))
            && (kategori === "tum" || kitap.tur === kategori)
    })

    return (
        <>
            <h1>Mini Kitaplık</h1>
            <div className="filtre">
                <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni}/>
                <KategoriFiltre kategori={kategori} handleKategori={handleKategori} turler={turler}/>
            </div>
            <div className="panel">
                <KitapListe kitaplar={filtrelenmisKitaplar} favoriler={favoriler} favoriEkle={favoriEkle} favoriSil={favoriSil} />
                <FavoriPaneli favoriler={favoriler} kitaplar={kitaplar} favoriSil={favoriSil} />
            </div>
        </>
    )
}

export default App;
