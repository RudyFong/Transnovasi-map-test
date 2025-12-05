import { Dimensions} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default {
  styleMainContainer: {

  },
  zoomContainer: {
    position: 'absolute',
    zIndex: 90,
    height: 60,
    width: 30,
    right: 12,
    top: 60,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5
  },
  zoomIcon: {
    height: 20,
    width: 20
  },
  containerPlus: {
    borderBottomWidth: 1,
    height: 30,
    paddingTop: 5
  },
  containerMinus: {
    height: 25,
    paddingBottom: 0
  },
  containerMap: {
    height: windowHeight - 160,
    width: windowWidth,
  },
  map: {
    height: windowHeight - 160,
    width: windowWidth,
  },
  buttonGenerate: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  autocompleteInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  labelSearchContainer: {
    height: 80,
    width: windowWidth,
    backgroundColor: '#FFFFFF',
    zIndex: 100,
    alignItems: 'center'
  },
  labelSearchON: {
    width: windowWidth,
    paddingHorizontal: 10,
    marginTop : 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle : {
    color: 'black',
    fontSize: 18,
  },
  clearStyle: {
    fontSize: 40,
    fontWeight: '700',
    color: 'black'
  },
  headerButton: {
    height: 80, 
    backgroundColor: '#000080',
    width: windowWidth,
    zIndex: 100,
    alignItems: 'center'
  },
  filterButton: {
    position: 'absolute',
    bottom: 110,
    zIndex: 90,
    height: 30,

    left: (windowWidth - 110) /2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.5
  },
  iconFilter:{
    height: 17,
    width: 17,
    marginRight: 10
  },
  tabbarContainer: {
    width: windowWidth,
    paddingHorizontal: 20,
    marginTop : 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBar: {
    height: 80,
    backgroundColor: 'white',
    zIndex: 110,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  tabBarTitle: {
    fontSize: 20,
    color: 'white'
  },
  hamburMenu: {
    height: 30,
    width: 30
  },
  positionFilter: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  filterTitle: {
    fontSize: 14,
    color: 'white'
  },
  overlayFilter: {

  },
  backgroundFilter: {
    backgroundColor: 'white',
    height: (windowHeight - 160) * 0.4,
    width: windowWidth,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  backgroundFilterPosko: {
    backgroundColor: 'white',
    height: (windowHeight - 160) * 0.6,
    width: windowWidth,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  headerFilter: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rnModalStyle: {
    justifyContent: 'flex-end',
    height: windowHeight,
    margin: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 55,
    marginBottom: 55
  },
  textTitleHeader: {
    fontSize: 18, 
    color: 'white',
    fontWeight: '400'
  },
  cardFloating: {
    position: 'absolute',
    height: 230,
    width: windowWidth,
    bottom: 100,
    alignItems: 'center',
    zIndex: 200
  },
  containerCard: {
    backgroundColor: 'white',
    padding: 10,
    height: 200,
    width: windowWidth - 20,
    borderRadius: 10
  },
  closeButton: {
    height: 30,
    width: 30,
  },
  itemFilter: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#E9E9E9'
  },
  filterIconPosko: {
    height: 23,
    width: 23,
    marginRight: 15
  },
  stylesNameFilter: {
    fontSize: 15
  },
  scrollFilter: {
    flexGrow: 1
  },
  iconContainer:{
    alignItems: 'center',
    paddingTop: 10
  },
  iconTab:{
    height: 30,
    width: 28,
  },
  titleTabbar:{

  },
  iconContainerMap: {
    alignItems: 'center',
    width: 70,
    borderTopWidth: 5,
    bordercolor: '#000080',
    paddingTop: 10
  },
  rowDataPosko: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sortingData: {
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginRight: 15
  },
  filterIconPoskoBig: {
    height: 70,
    width: 70,
  },
  phone: {
    height: 17,
    width: 17,
    marginRight: 10
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  stylesNameFilter1: {
    fontSize: 24,
    fontWeight: '500'
  },
  stylesNameFilter2: {
    fontSize: 16
  },
  stylesNameFilter3: {
    fontSize: 16
  },
  phoneContainerCall: {
    borderWidth: 1, 
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 15,
    width: 100
  },
  phoneColor: {
    height: 17,
    width: 17,
    marginRight: 10
  },
  itemFilterCard: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  infoContainer: {
    flex: 1,
  },
  containerCardSearch: {
    backgroundColor: 'white',
    padding: 10,
    width: windowWidth - 20,
    borderRadius: 10
  }
};
