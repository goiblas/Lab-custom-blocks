/**
 * Block dependencies
 */
import icon from './icon';
import './editor.scss';

import edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType(
    'lcb/resizable-box', {
        title:__('Resizable box', 'lcb'),
        description: __('', 'lcb'),
        category: 'lab-custom-blocks',
        icon: {
            background: '#eceff4',
            src: icon
        }, 
        keywords: [
            __( 'background', 'lcb' ),
            __( 'Resizable', 'lcb' ),
            __( 'transform', 'lcb' ),
        ],
        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: '.rb-content'
            },
            top: {
                type:'number',
                default: 0
            },
            left: {
                type:'number',
                default: 0
            },
            width: {
                type:'number',
            },
            height: {
                type:'number',
            }
        },
        edit, 
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