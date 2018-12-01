const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

import icon from './icon';
import './editor.scss';
import './style.scss';
import Inspector from './inspector';
import LeafletMap from './leafletMap';

export default registerBlockType(  'lcb/leaflet-map', {
    title:__('leaflet maps block', 'lcb'),
    description: __('', 'lcb'),
    category: 'lab-custom-blocks',
    icon: {
        background: '#eceff4',
        src: icon
    }, 
    attributes: {
        latitude: {
            type: "number",
        },
        longitude: {
            type: "number"
        },
        aspectRatio: {
            type: 'string',
            default: '2_1'
        }

    },
    edit: props => {
        const { attributes } = props;
        const { latitude, longitude} = attributes;
        return (
            <Fragment>
                <Inspector {...props}/>
                <div>{latitude} - {longitude}</div>
                <LeafletMap />
            </Fragment>
        )
    },
    save: () => {
        return null;
    }
});