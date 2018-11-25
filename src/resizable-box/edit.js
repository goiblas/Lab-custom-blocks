const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText } = wp.editor;


import { Rnd } from 'react-rnd';
import classNames from 'classnames';

export default class resizableBackgroundEdit extends Component { 
    constructor() {
        super(...arguments);
        this.state = {
            width: 520,
            height: 120,
            x: 0,
            y: 0
          };
    }
    render() {
        const { attributes, className, isSelected, setAttributes } = this.props;
        const { content, top, left, width, height} = attributes;

        return (
                    <Rnd
                    size={{ width: this.state.width,  height: this.state.height }}
                    position={{ x: this.state.x, y: this.state.y }}
                    onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                    onResize={(e, direction, ref, delta, position) => {
    
                        this.setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                        });
                    }}
                    className={classNames(className, "draggable", {"actived" :isSelected})}
                    >
                        <RichText 
                            tagName="div"
                            multiline="p"
                            placeholder={ __('Add content', 'lcb') }
                            onChange={ content => setAttributes({content}) }
                            value={content}
                        />
                    </Rnd>
       
        );
    }
}
