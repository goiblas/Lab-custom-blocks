const { Component, Fragment } = wp.element;

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';


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
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
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
                    <iframe
                         width="100%"
                         height="420px"
                         src={`https://maps.google.com/maps?width=100%&height=600&hl=enq=''&q=${encodeURI(address)}&ll=${latitute},${longitude}&t=m&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
                         frameborder="0"
                         scrolling="no"
                         marginheight="0"
                         marginwidth="0"
                     ></iframe>
                     : null
                }
            </div>
        )
    }
}