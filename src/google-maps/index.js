const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


import './editor.scss';
import edit from './edit';
import GoogleMapsRender from './google-maps-render';
import icon from './icon';

/**
 * Register the gutenberg map block inside the embed category.
 * 
 * @since 1.0.0.
 */
export default registerBlockType( 'lcb/google-maps', {
    title:__('Google maps block', 'lcb'),
    description: __('', 'lcb'),
    category: 'lab-custom-blocks',
    icon: {
        background: '#eceff4',
        src: icon
    }, 
    keywords: [
        __( 'google map', 'lcb' ),
        __( 'map', 'lcb' ),
    ],
    attributes: {
        latitute: {
            type: "number",
        },
        longitude: {
            type: "number"
        },
        address: {
            type: "string"
        }
    },
    edit,
    save: ({className, attributes}) => {
        return (
            <div className={className}>
                <GoogleMapsRender {...attributes} />
            </div>
        )
    }
});