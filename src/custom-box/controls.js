import {invertIcon} from './icon';

const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    AlignmentToolbar,
    BlockControls,
    BlockAlignmentToolbar,
} = wp.editor;

const {
    Toolbar,
    Button,
    Tooltip,
} = wp.components;

export default class Controls extends Component {
    render() {
        const { attributes, setAttributes } = this.props;
        const {textAlignment, blockAlignment, backgroundColor, textColor} = attributes;
        const invertColors = () => {
            const tmp_backgroundColor = backgroundColor;
            const tmp_textColor = textColor;
            setAttributes({textColor: tmp_backgroundColor});
            setAttributes({backgroundColor: tmp_textColor});
        }
        return (
            <BlockControls>
                <AlignmentToolbar
                    value={ textAlignment }
                    onChange={ textAlignment => setAttributes({textAlignment}) }
                />
                <BlockAlignmentToolbar
                    value={ blockAlignment }
                    onChange={ ( blockAlignment ) => setAttributes( { blockAlignment } ) }
                />
                <Toolbar>
                    <Tooltip text={__('Invert colors', 'lcb')}>
                        <Button
                            onClick={() => invertColors()}
                        >
                            {invertIcon}
                        </Button>
                    </Tooltip>
                </Toolbar>

            </BlockControls>
        );
    }
}