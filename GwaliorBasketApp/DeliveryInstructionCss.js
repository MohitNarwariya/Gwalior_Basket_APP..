import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width:120,
        height: 100,
        display: 'flex',
        flexDirection: 'row',
    },
    firstboxrow: {
        border: 1,
        borderColor: '#000',
        backgroundColor: '#fff',
        width: '90%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 0.1,
        borderColor: '#8e8e8e',
        marginHorizontal: 5,
    },
    firstboxcolumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    boxtext: {
        fontSize: 16,

    },
    firstrow:{
        flexDirection:'row'
    },
    lastrow:{
        marginVertical:8
    }

})

export default styles