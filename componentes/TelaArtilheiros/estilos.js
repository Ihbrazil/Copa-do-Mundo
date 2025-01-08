import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    itemArtilheiros: {
        width: '100%',
        marginVertical: 15,
        paddingHorizontal: 15,
    },

    imagemFundoArtilheiros: {
        height: 180,
    },

    fundoEscuro: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 20,
        height: '100%',
    },

    areaGols: {
        display: 'flex',
        flexDirection: 'row',

        justifyContent: "space-between",
    },

    nome: {
        fontSize: 32,
        textTransform: "uppercase",
        color: '#fff',
        marginVertical: 5,
        marginLeft: 15,
    },

    gols: {
        fontSize: 18,
        height: 30,
        width: 90,
        color: '#fff',

        textAlign: "center",

        backgroundColor: "#021245",
        textTransform: "uppercase",
        
        marginRight: 15,
        marginVertical: 15,

        paddingHorizontal: 5,
        paddingVertical: 2.5,

        borderRadius: 10,
    },

    anos: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 100,

        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#00905C',
    },
});

export default estilos;