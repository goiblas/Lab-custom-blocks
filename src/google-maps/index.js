const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


import './editor.scss';
import edit from './edit';

/**
 * Register the gutenberg map block inside the embed category.
 * 
 * @since 1.0.0.
 */
export default registerBlockType(  'lcb/google-maps', {
    title:__('Google maps block', 'lcb'),
    description: __('', 'lcb'),
    category: 'lab-custom-blocks',
    icon: 'location',
    attributes: {
        latitute: {
            type: "number",
        },
        longitude: {
            type: "number"
        },
        address: {
            type: "string"
        },
        maptype: {
            type: "string"
        }
    },
    edit,
    save: props => {
        return (
            <div className={props.className}>
                <div>adios!</div>
            </div>
        )
    }
});