import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    itemCard: {
        flexDirection: 'column',
        alignItems: 'left',
        padding: 100,
    },
    itemImage: {
        // margin:3,
        width: 190,
        height: 350,
        // height: 190,
        overflow: 'hidden',
        justifyContent: "space-between",
    },
    itemNameContainer: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: '#002881',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        padding: 10,
        borderRadius: 10,
        paddingRight: 60,
        marginBottom: 15
    },
    itemName: {
        padding: 5,
        color: 'white',
        fontSize: 15
    },
    itemIcons: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 20,
    },
    shoppingIconCircle: {
        backgroundColor: '#FF6557',
        width: 40,
        height: 40,
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemDetails: {
        flexDirection: 'column',
        margin: 10,
    },
    itemPrice: {
        color: "#FF6557",
        fontWeight:"400"
    },
    itemDescription: {
        color: "#002881",
        fontWeight:"500"
    },
});