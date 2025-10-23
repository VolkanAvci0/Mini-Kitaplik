import star from "../icons/star.svg";
import starOff from "../icons/star-off.svg";

export default function KitapKarti({id, isim, yazar, tur, favorideMi, favoriEkle, favoriSil}) {
    return (
        <div className="kitap-karti">
            <div>
                <h3>{isim}</h3>
                <span>{yazar} ‧ {tur}</span>
            </div>
            <button className={favorideMi ? "favori-evet" : "favori-hayir"} onClick={() => favorideMi ? favoriSil(id) : favoriEkle(id)}>
                <img src={favorideMi ? star : starOff} alt="Favori" width={20} height={20} />
                <span>{favorideMi ? "Favoride" : "Favori Ekle"}</span>
            </button>
        </div>
    )
}