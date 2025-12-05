import React from 'react';
import { Text, View, TouchableOpacity, Platform, PermissionsAndroid, ScrollView, Image, Linking} from 'react-native';
import PropTypes from 'prop-types';

import styles from './Home.styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {request, PERMISSIONS} from 'react-native-permissions';
import {result, truncate, sortBy, size}from 'lodash';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ReactNativeModal from 'react-native-modal';
import MenuBurger from '../Asset/Image/menu-icon-White.png';
import WhiteBell from '../Asset/Image/whiteBell.png';

import Plus from '../Asset/Image/Plus.jpg';
import Minus from '../Asset/Image/Minus-icon-png-17.jpg';

import Posko1 from '../Asset/Image/Chevron-1.png';
import Posko2 from '../Asset/Image/Chevron.png';
import Posko3 from '../Asset/Image/Medal.png';
import Posko4 from '../Asset/Image/Military-rank.png';
import FilterIcon from '../Asset/Image/Filter.png'
import CancelButton from '../Asset/Image/CloseButton.jpg'

import Geolocation from '@react-native-community/geolocation';

import BlankPaper from '../Asset/Image/Blank-Paper.png'
import HomeIcon from '../Asset/Image/HomeIcon.jpg'
import MapIcon from '../Asset/Image/Map.png'
import PhoneBlack from '../Asset/Image/Phone-1.png'
import PhoneColor from '../Asset/Image/Phone-2.png'
class HomeScreenComponent extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  mapRef = null;

  googlePlaceRef = null;

  state = {
    mapRegion: {
      latitude: -6.126976, 
      longitude: 106.720854,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    tapLocation: null,
    onSearch: false,
    dataSearch: {},
    onFilterSelection: false,
    onMarkSelection: false,
    onFilterSelectionPosko: false,
    selectionData: {},
    ascendingOn: true,
    onMarkSelectionSearch: false,
    dummyDataPosko1: [
      {
        id: 1,
        posko_name: 'Posko 1',
        name: 'PIK Avenue',
        icon: Posko1,
        location: {
          latitude: -6.108829,
          longitude: 106.740208,
        },
        phone_number: '0801283012830',
        officer_name: 'Robi',
        officer_rank: 'pangkat 1'
      },
      {
        id: 2,
        posko_name: 'Posko 1',
        name: 'Sedayu Mall',
        icon: Posko1,
        location: {
          latitude: -6.138848,
          longitude: 106.728702,
        },
        phone_number: '07384749347',
        officer_name: 'Aswa',
        officer_rank: 'pangkat 1'
      },
      {
        id: 3,
        posko_name: 'Posko 1',
        name: 'Taman Mini 1',
        icon: Posko1,
        location: {
          latitude: -6.302039,
          longitude: 106.889892,
        },
        phone_number: '08384749347',
        officer_name: 'Asnawi',
        officer_rank: 'pangkat 1'
      }
    ],
    dummyDataPosko2: [
      {
        id: 4,
        posko_name: 'Posko 2',
        name: 'PIK Avenue 2',
        icon: Posko2,
        location: {
          latitude: -6.108829,
          longitude: 106.740208,
        },
        phone_number: '0801283012830',
        officer_name: 'maail',
        officer_rank: 'pangkat 1'
      },
      {
        id: 5,
        posko_name: 'Posko 2',
        name: 'Sedayu Mall 2',
        icon: Posko2,
        location: {
          latitude: -6.138848,
          longitude: 106.728702,
        },
        phone_number: '07384749347',
        officer_name: 'Upin',
        officer_rank: 'pangkat 1'
      },
      {
        id: 6,
        posko_name: 'Posko 2',
        name: 'Taman Mini 2',
        icon: Posko2,
        location: {
          latitude: -6.302039,
          longitude: 106.889892,
        },
        phone_number: '08384749347',
        officer_name: 'Lili',
        officer_rank: 'pangkat 1'
      }
    ],
    dummyDataPosko3: [
      {
        id: 7,
        posko_name: 'Posko 3',
        name: 'PIK Avenue 3',
        icon: Posko3,
        location: {
          latitude: -6.108829,
          longitude: 106.740208,
        },
        phone_number: '0801283012830',
        officer_name: 'Budi',
        officer_rank: 'pangkat 1'
      },
      {
        id: 8,
        posko_name: 'Posko 3',
        name: 'Sedayu Mall 3',
        icon: Posko3,
        location: {
          latitude: -6.138848,
          longitude: 106.728702,
        },
        phone_number: '07384749347',
        officer_name: 'Pirlo',
        officer_rank: 'pangkat 1'
      },
      {
        id: 9,
        posko_name: 'Posko 3',
        name: 'Taman Mini 3',
        icon: Posko3,
        location: {
          latitude: -6.302039,
          longitude: 106.889892,
        },
        phone_number: '08384749347',
        officer_name: 'Sanusi',
        officer_rank: 'pangkat 1'
      }
    ],
    dummyDataPosko4: [
      {
        id: 10,
        posko_name: 'Posko 4',
        name: 'PIK Avenue 4',
        icon: Posko4,
        location: {
          latitude: -6.108829,
          longitude: 106.740208,
        },
        phone_number: '0801283012830',
        officer_name: 'Junet',
        officer_rank: 'pangkat 1'
      },
      {
        id: 11,
        posko_name: 'Posko 4',
        name: 'Sedayu Mall 4',
        icon: Posko4,
        location: {
          latitude: -6.138848,
          longitude: 106.728702,
        },
        phone_number: '07384749347',
        officer_name: 'Tatang',
        officer_rank: 'pangkat 1'
      },
      {
        id: 12,
        posko_name: 'Posko 4',
        name: 'Taman Mini 4',
        icon: Posko4,
        location: {
          latitude: -6.302039,
          longitude: 106.889892,
        },
        phone_number: '08384749347',
        officer_name: 'Urip',
        officer_rank: 'pangkat 1'
      }
    ]
  }

  componentDidMount = () => {
    Geolocation.getCurrentPosition(
      position => {
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);

          this.setState({
            mapRegion: {
              ...this.state.mapRegion,
              latitude: result(position, 'coords.latitude', -6.126976), 
              longitude: result(position, 'coords.longitude', 106.720854),
            },
          })
      },
      error => {
          switch (error.code) {
              case error.PERMISSION_DENIED:
                  console.error("User denied the request for Geolocation.");
                  break;
              case error.POSITION_UNAVAILABLE:
                  console.error("Location information is unavailable.");
                  break;
              case error.TIMEOUT:
                  console.error("The request to get user location timed out.");
                  break;
              case error.UNKNOWN_ERROR:
                  console.error("An unknown error occurred.");
                  break;
          }
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 } // Optional PositionOptions
  );
    if (Platform.OS === 'ios')
      {
        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((status) => {

          request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((status) => {
          
            // …
          });
        });
      }
      else {
        request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((status) => {

        });
      }

  }
  filterSelectionMenu = () => {
    this.setState({onFilterSelection: true})
  }
  clearSearch = () => {
    this.setState({onSearch: false, dataSearch: {}, tapLocation: null, onMarkSelection: false, onMarkSelectionSearch: false})
  }
  getTapMarker = (region) => {
    const { coordinate, position} = region.nativeEvent;
    this.setState({tapLocation: coordinate});
  }
  getTapMarkerExist = (marker) => {
    const { coordinate, position} = marker.nativeEvent;
    this.setState({tapLocation: coordinate});
    console.log('data detail ', coordinate);
  }

  handlePlaceSelect = (data, details = null) => {
    console.log('data', data);
    console.log('data detail ', details);
    if (details && details.geometry && details.geometry.location) {
      const { lat, lng } = details.geometry.location;
      const newRegion = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      };
      this.setState({tapLocation: newRegion, mapRegion: newRegion, onSearch: true, dataSearch: details, onMarkSelectionSearch: true});
    }
  };


  handleZoomIn = () => {
    this.setState({mapRegion: {...this.state.mapRegion,
      latitudeDelta: this.state.mapRegion.latitudeDelta * 0.5,
      longitudeDelta: this.state.mapRegion.longitudeDelta * 0.5,
    }
    });
  };

  handleZoomOut = () => {
    this.setState({mapRegion: {...this.state.mapRegion,
      latitudeDelta: this.state.mapRegion.latitudeDelta * 2,
      longitudeDelta: this.state.mapRegion.longitudeDelta * 2,
    }
    });
  };

  tapFilter = (item) => {
    console.log('name', item);
    this.setState({selectionData: sortBy(result(item, 'data', []), 'name'), onFilterSelection: false})
    setTimeout(() => {
      this.setState({onFilterSelectionPosko: true});
    }, 600);
  }

  changedataPosko = () => {
    console.log('state', this.state);
    if(this.state.ascendingOn) {
      this.setState({selectionData: sortBy(this.state.selectionData, 'name').reverse(), ascendingOn: !this.state.ascendingOn})
    } else {
      this.setState({selectionData: sortBy(this.state.selectionData, 'name'), ascendingOn: !this.state.ascendingOn})
    }
  }

  clearFilterMenu = () => {
    this.setState({onFilterSelection: false})
  }
  clearFilterMenuFilter = () => {
    this.setState({onFilterSelectionPosko: false})
  }

  goTomarked = (item) => {
    console.log('itme', item);
    const dataNew = {
      formatted_address: result(item, 'posko_name', '') + ' ' + result(item, 'name', ''),
      ...item
    };
    const newRegion = {
      latitude: result(item, 'location.latitude', -6.00277),
      longitude: result(item, 'location.longitude', 106.70277),
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    };
    this.setState({tapLocation: newRegion, mapRegion: newRegion, onSearch: true, dataSearch: dataNew, onMarkSelection: true, onFilterSelectionPosko: false});

  }
  savenewLocation = (item) => {
    this.setState({mapRegion: item})
  }
  renderOverlayFilter = () => {
    const data = [
     {
      id: 1,
      name: 'Posko 1',
      icon: Posko1,
      data: this.state.dummyDataPosko1
     }, 
     {
      id: 2,
      name: 'Posko 2',
      icon: Posko2,
      data: this.state.dummyDataPosko1
     }, 
     {
      id: 3,
      name: 'Posko 3',
      icon: Posko3,
      data: this.state.dummyDataPosko1
     }, 
     {
      id: 4,
      name: 'Posko 4',
      icon: Posko4,
      data: this.state.dummyDataPosko1
     }, 
     
    ]
    return(
      <ReactNativeModal
      isVisible={this.state.onFilterSelection}
      animationInTiming={200}
      animationOutTiming={300}
      onBackButtonPress={this.clearFilterMenu}
      onBackdropPress={this.clearFilterMenu}
      swipeThreshold={100}
      style={styles.rnModalStyle}
      backdropColor={'rgba(0, 0, 0, 0.3)'}
      hasBackdrop={false}
      backdropOpacity={0.2}
      >
      <View style={styles.overlayFilter}>
        <View style={styles.backgroundFilter}>

        <View style={styles.headerFilter}>
          <Text>Pilih Filter</Text>
          <TouchableOpacity onPress={this.clearFilterMenu}>
          <Image source={CancelButton} style={styles.closeButton}/>
        </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollFilter}>
        {data.map(item => (
          <TouchableOpacity key={result(item, 'id', '')} style={styles.itemFilter} onPress={() => this.tapFilter(item)}>
            <Image source={result(item, 'icon', Posko1)} style={styles.filterIconPosko}/>
            <Text key={result(item, 'id', '')} style={styles.stylesNameFilter}>{result(item, 'name', '')}</Text>
          </TouchableOpacity>
        ))}
        </ScrollView>
        </View>
      </View>
    </ReactNativeModal>
    )
  }

  renderOverlayFilterPosko = () => {
 
    return(
      <ReactNativeModal
      isVisible={this.state.onFilterSelectionPosko}
      animationInTiming={200}
      animationOutTiming={300}
      onBackButtonPress={this.clearFilterMenuFilter}
      onBackdropPress={this.clearFilterMenuFilter}
      swipeThreshold={100}
      style={styles.rnModalStyle}
      backdropColor={'rgba(0, 0, 0, 0.3)'}
      hasBackdrop={false}
      backdropOpacity={0.2}
      >
      <View style={styles.overlayFilter}>
        <View style={styles.backgroundFilterPosko}>

        <View style={styles.headerFilter}>
          <Text>Pilih Posko</Text>
          <View style={styles.rowDataPosko}>
            <TouchableOpacity onPress={this.changedataPosko} style={styles.sortingData}>
              <Text>{this.state.ascendingOn ? 'Sort A-Z' : 'Sort Z-A'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clearFilterMenuFilter}>
              <Image source={CancelButton} style={styles.closeButton}/>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrollFilter}>
        {size(this.state.selectionData) > 0 && this.state.selectionData.map(item => (
          <TouchableOpacity key={result(item, 'id', '')} style={styles.itemFilter} onPress={() => this.goTomarked(item)}>
            <Image source={result(item, 'icon', Posko1)} style={styles.filterIconPoskoBig}/>
            <View>
              <Text style={styles.stylesNameFilter1}>{result(item, 'posko_name', '')} {result(item, 'name', '')}</Text>
              <Text style={styles.stylesNameFilter2}>{result(item, 'officer_name', '')} - {result(item, 'officer_rank', '')}</Text>
              <Text style={styles.stylesNameFilter3}>{result(item, 'name', '')}</Text>
              <View style={styles.phoneContainer}>
                <Image source={PhoneBlack} style={styles.phone}/>
                <Text style={styles.stylesNameFilter}>{result(item, 'phone_number', '')}</Text>
              </View>
              <View>
              <TouchableOpacity style={styles.phoneContainerCall} onPress={() => Linking.openURL(`tel:${result(item, 'phone_number', '')}`)}>
                <Image source={PhoneColor} style={styles.phoneColor}/>
                <Text style={styles.stylesNameFilter}>Hubungi</Text>
              </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        </ScrollView>
        </View>
      </View>
    </ReactNativeModal>
    )
  }

  render() {
    return (
      <View style={styles.styleMainContainer}>
        {!this.state.onSearch ?
          <View style={styles.headerButton}>
            <View style={styles.tabbarContainer}>
              <Image source={MenuBurger} style={styles.hamburMenu}/>
              <Text style={styles.textTitleHeader}>HEADER</Text>
              <Image source={WhiteBell} style={styles.hamburMenu}/>
            </View>
          </View>
        :
        <View style={styles.labelSearchContainer}>
      <View style={styles.labelSearchON}>
        <View>
          <Text style={styles.titleStyle}>{truncate(result(this.state.dataSearch, 'formatted_address', ''), {'length': 44, 'separator': '..'})}</Text>
        </View>
        <TouchableOpacity onPress={this.clearSearch}>
          <Image source={CancelButton} style={styles.closeButton}/>
        </TouchableOpacity>
      </View>
      </View>
      }
        <View>

          <View style={styles.zoomContainer}>
            <TouchableOpacity style={styles.containerPlus} onPress={this.handleZoomIn}>
              <Image source={Plus} style={styles.zoomIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerMinus} onPress={this.handleZoomOut}>
              <Image source={Minus} style={styles.zoomIcon}/>
            </TouchableOpacity>
          </View>
          {!this.state.onSearch &&
          <View>

        <GooglePlacesAutocomplete
         ref={(ref) => {{
          this.googlePlaceRef = ref; 
          
         }}}
        placeholder="Cari lokasi"
        onPress={this.handlePlaceSelect}
        query={{
          key: '', // Replace with your actual Google API key
          language: 'en',
        }}
        styles={{
          container: styles.autocompleteContainer,
          textInput: styles.autocompleteInput,
        }}
        fetchDetails={true}
        returnKeyType={'search'}
       
        getDefaultValue={() => this.state.locationName}
        onFail={error => console.error(error)}
        keepResultsAfterBlur={false}
        textInputProps={{
          onChangeText: (text) => { console.log(text) }
        }}

      /> 
      </View>
      }

      </View>
        <View style={styles.containerMap}>

  
        {this.renderOverlayFilter()}
        {this.renderOverlayFilterPosko()}
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          ref={(ref) => { {
            this.mapRef = ref; 
          }}}
          region={this.state.mapRegion}
          onPress={this.getTapMarker}
          onPoiClick={this.getTapMarkerExist}
          onRegionChangeComplete={(item, {isGesture}) => {
            if(isGesture){
              this.savenewLocation(item);
            }
          }}
        >
        {this.state.tapLocation && 
          <Marker coordinate={this.state.tapLocation}>
          </Marker>
        }
        </MapView>

      </View>

          <View style={styles.filterButton}>
            <TouchableOpacity style={styles.positionFilter} onPress={this.filterSelectionMenu}>
            <Image source={FilterIcon} style={styles.iconFilter}/>
              <Text>Filter Peta</Text>
            </TouchableOpacity>
          </View>
        {this.state.onMarkSelection &&
        <View style={styles.cardFloating}>
          <View style={styles.containerCard}>
            <View style={styles.itemFilterCard}>
              <Image source={result(this.state.dataSearch, 'icon', Posko1)} style={styles.filterIconPoskoBig}/>
              <View>
                <Text style={styles.stylesNameFilter1}>{result(this.state.dataSearch, 'posko_name', '')} {result(this.state.dataSearch, 'name', '')}</Text>
                <Text style={styles.stylesNameFilter2}>{result(this.state.dataSearch, 'officer_name', '')} - {result(this.state.dataSearch, 'officer_rank', '')}</Text>
                <Text style={styles.stylesNameFilter3}>{result(this.state.dataSearch, 'name', '')}</Text>
                <View style={styles.phoneContainer}>
                  <Image source={PhoneBlack} style={styles.phone}/>
                  <Text style={styles.stylesNameFilter}>{result(this.state.dataSearch, 'phone_number', '')}</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.phoneContainerCall} onPress={() => Linking.openURL(`tel:${result(this.state.dataSearch, 'phone_number', '')}`)}>
                  <Image source={PhoneColor} style={styles.phoneColor}/>
                  <Text style={styles.stylesNameFilter}>Hubungi</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        }
        {this.state.onMarkSelectionSearch &&
        <View style={styles.cardFloating}>
          <View style={styles.containerCardSearch}>
            <View style={styles.itemFilterCard}>
              <Image source={Posko1} style={styles.filterIconPoskoBig}/>
              <View style={styles.infoContainer}>
                <Text style={styles.stylesNameFilter1}>{result(this.state.dataSearch, 'name', '')}</Text>
                <Text style={styles.stylesNameFilter3}>{truncate(result(this.state.dataSearch, 'formatted_address', ''), {'length': 100, 'separator': '..'})}</Text>
                <View style={styles.phoneContainer}>
                  <Image source={PhoneBlack} style={styles.phone}/>
                  <Text style={styles.stylesNameFilter}>{result(this.state.dataSearch, 'formatted_phone_number', '')}</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.phoneContainerCall} onPress={() => Linking.openURL(`tel:${result(this.state.dataSearch, 'formatted_phone_number', '')}`)}>
                  <Image source={PhoneColor} style={styles.phoneColor}/>
                  <Text style={styles.stylesNameFilter}>Hubungi</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        }
        <View style={styles.tabBar}>
          <View style={styles.iconContainer}>
            <Image source={HomeIcon} style={styles.iconTab}/>
            <Text style={styles.titleTabbar}>Beranda</Text>
          </View>
          <View style={styles.iconContainerMap}>
            <Image source={MapIcon} style={styles.iconTab}/>
            <Text style={styles.titleTabbar}>Peta</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={BlankPaper} style={styles.iconTab}/>
            <Text style={styles.titleTabbar}>Rengiat</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreenComponent;


