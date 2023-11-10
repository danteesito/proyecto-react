import { createContext, useState} from "react";

export const Contexto = createContext();

export default function MiProvider({children}) {
    const [pokemons, setPokemons] = useState([
        { id: 1, title: 'Guillermo Barros', content: 'DT', imageUrl: "https://pbs.twimg.com/media/E8bbANLXIAAu4V_.jpg"},
        { id: 2,title: 'Rossi', content: 'Arquero', imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfRy8vH_VOkLqU2Tph5SXZZwFyz0MXySVwvFkqrYoMnoJFaZSXlW2P4DGEk4plt3w4y4&usqp=CAU" },
        { id: 3, title: 'Fabra', content: 'Defensa', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmlmKLo8AtJ3dRSo7FGiemqpSBYq_uTX5QhRQqPax1-xFzwK74ixjQVrKG4v3AgQ7w0E&usqp=CAU" },
        { id: 4, title: 'Julio Buffarini', content: 'Defensa', imageUrl: "https://media.tycsports.com/files/2022/06/16/441335/julio-buffarini-boca_1440x810_wmk.webp?v=1" },
        { id: 5, title: 'Lisandro Magallán', content: 'Defensa', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbuXS9DtiiGMD1flGKefusf6jDFMdT2Ax5e90w_Mg9hSDtwrE76vPcBt-HN3O0OTxXQY&usqp=CAU"},
        { id: 6, title: 'Santiago Vergini', content: 'Defensa' , imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtA0-2AJ-_De57zDSxJbjAU8LCKdAVjzhrMkaGHpuzOhoI61_EoZHcSCZJBVVAaOzKZ4Y&usqp=CAU"},
        { id: 7, title: 'Julián Chicco', content: 'Mediocampista',imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0vaU9ly4JV2_oe_UiKW0RZpqr0-Q51E5wXJhlKj1kd3Ajj-i5MxCYNsenkI81ExoluM&usqp=CAU" },
        { id: 8, title: 'Emanuel Reynoso', content: 'Mediocampista',imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJOXkQWEKryEXHnoI-bCSDGFOmjhpYOdhaCQ2TI3RmBSrfRQUMxm8PBYTseFSQX_NW7s&usqp=CAU"},
        { id: 9, title: 'Sebastián Pérez', content: 'Mediocampista', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCY1YfvpF8KU6GL173-2L3qpOgIiuvcA5vLtGwGAAjNfMX2py3vc5gOVxuGKaIGk-A2hs&usqp=CAU"},
        { id: 10, title: 'Gago ', content: 'Mediocampista',imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlkO_SH1JVKADWBJYsLThNEM4BAYvQgQhYcdPDkfJ4wBmUg4PGo1rXNbAszHEBTnAkak&usqp=CAU" },
        { id: 11, title: 'Carlos Tevez ', content: 'Delantero',imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqUkik9e00qIfSfNKBoSothyz9YDwygIDcSQqCMcQ-06vOmY4Ua_Uw7UIk68O1nGt7OU&usqp=CAU"},   
    ]);

    return (<>
        <Contexto.Provider value={{pokemons, setPokemons}}>
            {children}
        </Contexto.Provider>
    </>)
}


