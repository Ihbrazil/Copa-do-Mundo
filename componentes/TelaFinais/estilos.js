import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    itemFinais: {
        width: '100%',
        marginVertical: 15,
        paddingHorizontal: 15,
    },

    imagemFundoFinais: {
        height: 145,
    },

    fundoEscuro: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 20,
        height: '100%',
    },

    areaResultado: {
        display: 'flex',
        flexDirection: 'row',

        justifyContent: "center",
        alignSelf: "center",

        width: 70,

        marginBottom: 15,
    },

    ano: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginVertical: 10,
        marginLeft: 15,
    },

    bandeira: {
        width: 100,
        height: 70,
    },
    
    resultado: {
        fontSize:30,
        fontWeight: 'bold',
        color: '#ffffff',
        marginHorizontal: 10,

        textAlignVertical: "center",
    },
});

export default estilos;