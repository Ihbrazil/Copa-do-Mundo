import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    itemTitulos: {
        width: '100%',
        marginVertical: 15,
        paddingHorizontal: 15,
    },

    imagemFundoTitulos: {
        height: 180,
    },

    fundoEscuro: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 20,
        height: '100%',
    },

    areaTitulos: {
        display: 'flex',
        flexDirection: 'row',

        justifyContent: "space-between",
    },

    pais: {
        fontSize: 32,
        textTransform: "uppercase",
        color: '#fff',
        marginTop: 30,
        marginLeft: 30,
    },

    titulo: {
        marginTop: 30,
        marginRight: 30,
    },

    ano: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#fff',
        
        textAlign: 'center',
    },
});

export default estilos;