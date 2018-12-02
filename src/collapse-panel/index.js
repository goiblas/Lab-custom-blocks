/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';
import './editor.scss';

import classNames from 'classnames';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

export default registerBlockType(
    'lcb/collapse-panel',
    {
        title:__('collapse panel', 'lcb'),
        description: __('A collapse panel', 'lcb'),
        category: 'lab-custom-blocks',
        icon: {
            background: '#eceff4',
            src: icon
        }, 
        keywords: [
            __( 'collapse', 'lcb' ),
            __( 'panel', 'lcb' ),
        ],
        attributes: {
            title: {
                type: 'html',
                source: 'children',
                selector: '.lcb-cp-title'
            },
            content: {
                type: 'array',
                source: 'children',
                selector: '.lcb-cp-content'
            }
        },
        edit: props => {
            const { attributes, setAttributes, className, isSelected } = props;
            const { content, title } = attributes;
            return (
                    <div className={ className }>
  
                        <RichText 
                            format="string"
                            tagName="h3"
                            placeholder={ __('Add title', 'lcb') }
                            onChange={ title => setAttributes({title}) }
                            className={classNames("lcb-cp-title", {"opened": isSelected})}
                            value={title}                            />

                        {isSelected && <div className="lcb-cp-content">
                        <RichText 
                            tagName="div"
                            multiline="p"
                            placeholder={ __('Add content', 'lcb') }
                            onChange={ content => setAttributes({content}) }
                            value={content}
                            />
                        </div>
                        }
                    </div>
            );
        },
        save: ({ attributes, className}) => {
            const {content, title} = attributes;
            return (
                <div className={ className }>
                        <RichText.Content tagName="h3" value={ title } className="lcb-cp-title" />
                    <div className="lcb-cp-container">
                        <RichText.Content tagName="div" value={ content } className="lcb-cp-content" />
                    </div>
                </div>
            )

        }
    }
)
