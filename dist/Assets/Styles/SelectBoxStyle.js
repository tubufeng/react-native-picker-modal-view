import { StyleSheet } from 'react-native';
export const SelectBoxStyle = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 8,
        position: 'relative',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#cccccc',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    chooseText: {
        fontWeight: '400',
        fontSize:14,
        color: "#000000"
    },
    downBtn: {
        width: 10,
        height: 10,
    },
    pressBtn: {
        marginVertical: 10,
    },
    disabledBtn: {
        borderColor: '#ddd',
    },
    disabledTxt: {
        // color: '#ddd',
    },
    disabledImage: {
        opacity: 0.2,
    },
});
//# sourceMappingURL=SelectBoxStyle.js.map
