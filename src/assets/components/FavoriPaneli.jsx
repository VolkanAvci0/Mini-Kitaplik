export default function FavoriPaneli({ favoriler, kitaplar, favoriSil }) {
    return (
        <div className="card" style={{ alignItems: "flex-start" }}>
            <h2>Favoriler ({favoriler.length})</h2>
            <ul className="favori-listesi">
                {
                    favoriler.length === 0 ?
                        "Favori Yok"
                        :
                        favoriler.map(favoriId => <li className="favori-item" key={favoriId}>
                            <span>{kitaplar.find(kitap => kitap.id === favoriId).isim}</span>
                            <button className="kaldir" onClick={() => favoriSil(favoriId)}>Sil</button>
                        </li>)
                }
            </ul>
        </div>
    )
}