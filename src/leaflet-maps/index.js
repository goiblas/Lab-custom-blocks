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
            default: "40.416775"
        },
        longitude: {
            type: "number",
            default: "-3.703790"
        },
        content: {
            type: 'string',
            default: 'Madrid'
        }

    },
    edit: props => {
        return (
            <Fragment> 
                <Inspector {...props}/>
                <LeafletMap {...props}/> 
            </Fragment>
        )
    },
    save: () => {
        return null;
    }
});