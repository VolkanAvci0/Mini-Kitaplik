import KitapKarti from "./KitapKarti";

export default function KitapListe({ kitaplar, favoriler, favoriEkle, favoriSil }) {
    return (
        <div className="card">
            <h2>Kitaplar</h2>
            {
                kitaplar.map(kitap =>
                    <KitapKarti
                        key={kitap.id}
                        {...kitap}
                        favorideMi={!!favoriler.find(favori => favori === kitap.id)}
                        favoriEkle={favoriEkle}
                        favoriSil={favoriSil}
                    />
                )
            }
        </div>
    )
}