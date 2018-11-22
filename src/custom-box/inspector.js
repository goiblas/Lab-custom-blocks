const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
    PanelColorSettings,
    ContrastChecker
  } = wp.editor;

  const {
    PanelBody,
    RangeControl,
  } = wp.components;

export default class Inspector extends Component {
    render() {
        const { attributes, setAttributes } = this.props;
        const { borderRadius, backgroundColor, textColor, rotation } = attributes;
        
        return (
            <InspectorControls>
                
                <PanelBody title={__('Border Radius', 'lcb')} initialOpen={false}>
                    <RangeControl
                        label={__("Border Radius", "lcb")}
                        value={borderRadius}
                        onChange={borderRadius => setAttributes({ borderRadius })}
                        min={1}
                        max={25} />
                </PanelBody>
                <PanelBody title={__('Rotation', 'lcb')} initialOpen={false}>
                    <RangeControl
                        label={__("Rotation", "lcb")}
                        value={rotation}
                        onChange={rotation => setAttributes({ rotation })}
                        min={-15}
                        max={15} />
                </PanelBody>

                <PanelColorSettings
                    title={__("Colors", "lcb")}
                    colorSettings={[
                        {
                        value: backgroundColor,
                        onChange: backgroundColor => {
                            setAttributes({ backgroundColor });
                        },
                        label: __("Background Color")
                        },
                        {
                        value: textColor,
                        onChange: textColor => {
                            setAttributes({ textColor });
                        },
                        label: __("Text Color")
                        }
                    ]}
                    />
                <ContrastChecker
                    textColor={textColor}
                    backgroundColor={backgroundColor}
                />

            </InspectorControls>
        );
    }
}