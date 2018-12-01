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
    TextControl
  } = wp.components;

export default class Inspector extends Component {
    render() {
        const { attributes, setAttributes } = this.props;
        const { latitude, longitude} = attributes;
        return (
            <InspectorControls>
                <PanelBody title={__('Controles', 'lcb')} initialOpen={true}>
                    <label class="blocks-base-control__label" for="lcb_text_control_lat">{__('latitude', 'lcb')}</label>
                    <TextControl 
                        id="lcb_text_control_lat"
                        onChange={ latitude => setAttributes({latitude})}
                        type="number"
                        value={latitude}
                    />
                    <label class="blocks-base-control__label" for="lcb_text_control_lon">{__('longitude', 'lcb')}</label>
                    <TextControl 
                        onChange={ longitude => setAttributes({longitude})}
                        id="lcb_text_control_lon"
                        type="number"
                        value={longitude}
                    />

                </PanelBody>

            </InspectorControls>
        );
    }
}