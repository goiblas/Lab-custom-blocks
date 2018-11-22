const attributes = {
    content: {
        type: 'array',
        source: 'children',
        selector: '.lcb-content'
    }, 
    blockAlignment: {
        type: 'string'
    },
    textAlignment: {
        type: 'string',
        default: 'center'
    },
    borderRadius: {
        type: 'number',
        default: "3"
    },
    backgroundColor: {
        type: 'string',
        default: '#fff'
    },
    textColor: {
        type: 'string',
        default: '#333333'
    },
    rotation: {
        type: 'number',
        default: '0'
    }
};

export default attributes;