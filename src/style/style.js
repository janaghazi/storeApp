import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    errMsg: {
        color: "red",
        fontSize: 16,
        textAlign: "center"
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 30
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "500",
        fontWeight: "500",
        color: "#002881"
    },
    itemCard: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
        width: 190,
        height: 500,
        elevation: 50,
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
        bottom: 20,
        backgroundColor: '#002881',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        padding: 10,
        borderRadius: 10,
        // paddingRight: 90,
        marginBottom: 15
    },
    itemName: {
        padding: 5,
        color: 'white',
        fontSize: 15,
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
        fontWeight: "400"
    },
    itemDescription: {
        color: "#002881",
        fontWeight: "400"
    },
    detailsImage: {
        width: 450,
        height: 550,
        overflow: 'hidden',
        justifyContent: "space-between",
    },
    detailsCard: {
        backgroundColor: "white",
        borderRadius: 25,
        borderStartStartRadius: 40,
        borderEndStartRadius: 40,
        elevation: 20

    },
    detailsTitle: {
        color: "#0f2b64",
        fontSize: 26,
        textAlign: "center",
        fontWeight: "bold"
    },
    priceContainer: {
        backgroundColor: '#002881',
        height: 100,
        width: 190,
        margin: 20,
        marginLeft: 0,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        elevation: 8,

    },
    priceText: {
        color: 'white',
        fontSize: 40,
        fontWeight: "bold",
        shadowColor: "black",
        textAlign: "left",
    },
    dropDownContainer: {
        backgroundColor: 'white',
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        // elevation: 8,

    },
    dropdown: {
        height: 50,
        width: 150,
        borderColor: '#FF6557',
        backgroundColor: "#FF6557",
        borderWidth: 0.5,
        borderRadius: 50,
        paddingHorizontal: 8,
        elevation: 40,

    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white"
    },
    iconStyle: {
        width: 20,
        height: 20,
    },

    buttonContainer: {
        backgroundColor: "#FF6557",
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
        alignItems: "center",
        width: 200,
        elevation: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "400",
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#6C8EBF",
        borderRadius: 30,
        paddingHorizontal: 12,
        paddingVertical: 6,
        elevation: 8,
        margin: 50,

    },
    quantityText: {
        color: "white",
        fontSize: 25,
        fontWeight: "400",
        marginHorizontal: 10,
    },
    colorText:{
        textTransform:'uppercase',
        color:"grey",
        fontSize:15,
        padding:10,
    }
});