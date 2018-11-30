/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType(
    'lcb/icon-list', {
        title:__('Lista con iconos', 'lcb'),
        description: __('', 'lcb'),
        category: 'lab-custom-blocks',
        icon: {
            background: '#eceff4',
            src: icon
        }, 
        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: '.rb-content'
            }
        },
        edit: () => {
            return (
                <div>hola!</div>
            );
        }, 
        save: ({attributes, className}) => {
            const {content } = attributes;
            return (
                <div className={className}>
                    <div className="rb-content">
                        {content}
                    </div>
                </div>
            );
        }
    }
)