import {
    Dimensions,
} from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
export default {
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#f8f8f8',
    },
    outterCanvas: {
        height: 0.7 * windowHeight,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    canvas: {
        height: 0.6 * windowWidth,
        width: 0.6 * windowWidth,
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: '#aaa',
        margin: 10,
    },
    draggableText: {
        position: 'absolute',
        padding: 8,
        borderRadius: 6,
        borderColor: '#ccc',
    },
    textInput: {
        fontSize: 16,
        padding: 4,
        minWidth: 100,
    },
    textDisplay: {
        fontSize: 16,
        color: 'black',
    },
    popup: {
        position: 'absolute',
        bottom: 20,
        right: 10,
        left: 10,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 100
    },
    option: {
        paddingVertical: 10,
        fontSize: 16,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },
    optionText: {
        paddingVertical: 15,
        fontSize: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },
    draggable: {
        position: 'absolute',
        top: windowHeight / 3,
        left: windowWidth / 4,
    },
    image: {
        width: 150,
        height: 150,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
};
