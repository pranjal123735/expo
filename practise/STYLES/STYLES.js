export const STYLES = {

    HOMESCREEN_CONTAINER:{
        flex:1,
        width:'100%',
        paddingTop:'4%'
    },

    HOMESCREEN_PARENT:{
        backgroundColor:'#e4f5f4',
        paddingBottom:'5%'
    },

    HOMESCREEN_TEXT:{
        color:"black",
        margin:'4%',
        fontSize:15,
    },

    HOMESCREEN_CHILD:{
        display:'grid',
        flexDirection: "row" ,
        justifyContent: 'space-evenly'
    },

    CARD:{
        padding:'1%'
    },

    CHATSCREEN_CONTAINER:{
        flex: 1, 
        width: '100%', 
        paddingTop: '4%'
    },
    CHATSCREEN_PARENT:{
        marginTop:'5%',
        padding:'2%'
    },
    CHATSCREEN_TEXTFIELD:{
        // backgroundColor:'red',
    },
    
    CHATSCREEN_MESSAGE_MEDIUM_CONTAINER:{
        flexDirection: "column", 
        padding: '2%' 
    },

    CHATSCREEN_MESSAGE_MEDIUM_TEXT:{
        marginBottom: '5%'
    },

    CHATSCREEN_MESSAGE_MEDIUM:{
        width: "fit-content",
        padding: '2%',
        alignItems: 'center' 
    },

    MODAL_CONTAINER: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // semi-transparent background
      },

    MODAL_TASK_BUTTON_CONTAINER:{
        display:'flex',
        justifyContent:'center'
    },

    MODAL_TASK_BUTTON:{
        marginBottom:'10%',
        width:'50%',
        alignSelf:'center'
    },

    MODAL_CLOSE_ICON:{
        width:'100%',
        position:'absolute',
        top:'1%',
        left:'85%'
    },

    NOTESCREEN_CONTAINER:{
        flex:1,
        width:'100%',
        paddingTop:'4%',
        backgroundColor:'white'
    },

    NOTESSCREEN_PARENT:{
        backgroundColor:'#e4f5f4',
        paddingBottom:'5%',
        height:'10%',
        display:'flex',
        justifyContent:'center'
    },

    NOTESSCREEN_PARENT_TEXT_CONTAINER:{
        alignItems: 'center',
        alignSelf:'center',
        textAlign:'center'
    },

    NOTESCREEN_TEXT:{
        color:'black',
        margin:'4%',
        fontSize:18,
    },

    INPUT_FIELD_SLIDER_CONTAINER:{

        alignSelf:'center',
        width: '90%',
        alignItems: 'center', 
        marginBottom: '10%',
        backgroundColor:'white',
        borderRadius: 25,
    },

    INPUT_FIELD_SLIDER_CONTAINER_TEXT_CONTAINER:{

        padding: 5, 
        width: '80%', 
        height: '100%',
        position: 'absolute', 
        justifyContent: 'center'
    },

    INPUT_FIELD_SLIDER_CONTAINER_TEXT:{

        textAlign: 'center',
        opacity:0.5
    },

    INPUT_FIELD_SLIDER_CONTAINER_INPUT:{

        borderColor: "black",
        width: "100%",
        borderWidth: 1,
        borderRadius: 25,
        padding: '3%',
    },

    NOTESCREEN_INPUTFIELD:{
        height:'70%',
        backgroundColor:'white',
        marginBottom:'5%'
    },

    NOTESCREEN_INPUTFIELD_PARENT:{

        marginTop:'5%',
        height:'100%',
        marginBottom:'5%'
    },

    NOTESCREEN_INPUTFIELD_CONTAINER:{

        height:'80%',
        backgroundColor:'white'
    },

    NOTESCREEN_INPUTFIELD_ICON_CONTAINER:{
        position: 'relative', 
        bottom:'17%',
        width:"90%",
        marginLeft:'5%',
        padding:'2%'
    },

    NOTESCREEN_INPUTFIELD_ICON_CONTAINER_DIVIDER:{
        height: '2%', 
    },

    INPUT_FIELD_SLIDER_CONTAINER_PARAGRAPH:{
        borderColor: "black",
        width: "90%",
        borderWidth: 1,
        borderRadius:20,
        padding: '3%',
        height:'100%',
        backgroundColor:'white',
        marginLeft:'5%',
        marginBottom:'5%'
    },

    NOTESCREEN_ICON_LEFT:{
        display:'flex',
        flex:1,
        flexDirection: "row" ,
    },

    NOTESCREEN_ICON_RIGHT:{
        position:'absolute',
        right:'1%'
    },

    NOTESCREEN_BUTTON_CONTAINER:{
        display:'flex',
        justifyContent:'center',
        width:"100%",
        marginBottom:'5%',
    },

    NOTESCREEN_BUTTON_PARENT:{
        position:'relative',
        alignItems:'center',
        alignSelf:'center',
    },

    NOTESCREEN_TAGS:{

        display:'flex',
        flexDirection:'row',
        bottom:'1%'
    },

    INPUT_FIELD_PASSWORD:{

        borderColor: "black",
        width: "70%",
        borderWidth: 1,
        borderRadius:20,
        padding: '2%',
        backgroundColor:'white',
        marginLeft:'5%',
        marginBottom:'5%',
    }
}