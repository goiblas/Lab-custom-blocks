const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls
  } = wp.editor;

  const {
    PanelBody,
    TextareaControl,
    TextControl,
  } = wp.components;

export default class Inspector extends Component {
    render() {
        const { attributes, setAttributes } = this.props;
        const { latitude, longitude, content } = attributes;
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
                <PanelBody>
                    <TextareaControl 
                    label={__('Contenido del tooltip', 'lcb')}
                        onChange={ content => setAttributes({content})}
                        value={content}
                    />
                </PanelBody>

            </InspectorControls>
        );
    }
}