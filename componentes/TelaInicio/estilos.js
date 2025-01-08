import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    itemMenu: {
        marginVertical: 15,
        paddingHorizontal: 15,
    },

    imagemFundoMenu: {
        width: 450,
        height: 230,
    },

    textoMenu: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffffff',
        textTransform: 'uppercase',

        width: 450,
        height: 230,

        textAlign: 'center',
        textAlignVertical: 'center',

    },

    fundoEscuro: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 20,
        height: '100%',
    },
    
});

export default estilos;