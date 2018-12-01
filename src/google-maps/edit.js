const { Component } = wp.element;
const { __ } = wp.i18n;
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';


import GoogleMapsRender from './google-maps-render';

export default class googleMapsEdit extends Component {
    constructor(){
        super(...arguments);
    }
    async onChoosePlace(address) {
        const {setAttributes} = this.props;

        try {
          const newAddress = await geocodeByAddress(address);

          setAttributes({ address: newAddress[0].formatted_address });
          const {lat, lng} = await getLatLng(newAddress[0]);
          
          setAttributes({
            latitute: lat,
            longitude: lng
          })
        }
        catch (error) {
          console.warn(error);
        }

    }
    onAddressChange(address) {
        const {setAttributes} = this.props;
        setAttributes({address});
    }
    render() {
        const { address, latitute, longitude } = this.props.attributes;

        return (
            <div className="google-maps">
                 <PlacesAutocomplete
                    value={address}
                    onChange={this.onAddressChange.bind(this)}
                    onSelect={this.onChoosePlace.bind(this)}
                >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: __('Search Places ...', 'lcb'),
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>{__('Loading...', 'lcb')}</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';

                  const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
                </PlacesAutocomplete>
                { typeof latitute === "number" && typeof longitude === "number" ?
                  <GoogleMapsRender {...this.props.attributes} />
                     : null
                }
            </div>
        )
    }
}