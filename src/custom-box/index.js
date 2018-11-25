/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';
import attributes from './attributes.js';
import Controls  from './controls.js';
import Inspector  from './inspector.js';
/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { Fragment } = wp.element;

export default registerBlockType(
    'lcb/custom-box',
    {
        title:__('Custom box', 'lcb'),
        description: __('A Simple box that you can customizer from inspector', 'lcb'),
        category: 'lab-custom-blocks',
        icon: {
            background: '#eceff4',
            src: icon
        }, 
        keywords: [
            __( 'Custom box', 'lcb' ),
        ],
        attributes,
        getEditWrapperProps({blockAlignment}){
            if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
                return { 'data-align': blockAlignment };
            }
        },
        edit: props => {
            const { attributes, setAttributes, className } = props;
            const { content, textAlignment, borderRadius, backgroundColor, textColor, rotation } = attributes;
            const styles = {
                textAlign: textAlignment,
                borderRadius: `${borderRadius}px`,
                backgroundColor: backgroundColor,
                color: textColor,
                transform: `rotate(${rotation}deg)`
            }
            return (
                <Fragment>
                    <Inspector { ...props }/>
                    <Controls { ...props }/>
                    <div className={ className } style={ styles }>
                        <RichText 
                            tagName="div"
                            multiline="p"
                            placeholder={ __('Add content', 'lcb') }
                            onChange={ content => setAttributes({content}) }
                            value={content}
                            />
                    </div>
                </Fragment>
            );
        },
        save: ({ attributes, className}) => {
            const { content, textAlignment, borderRadius, backgroundColor, textColor, rotation } = attributes;
            const styles = {
                textAlign: textAlignment,
                borderRadius: `${borderRadius}px`,
                backgroundColor: backgroundColor,
                color: textColor,
                transform: `rotate(${rotation}deg)`
            }
            return (
                <div className={ className }  style={ styles }>
                    <div className="lcb-content">
                        {content}
                    </div>
                </div>
            )

        }
    }
)
