export default ({latitute, longitude, address}) => {
    return (
        <iframe
            width="100%"
            height="420px"
            src={`https://maps.google.com/maps?width=100%&height=600&hl=enq=''&q=${encodeURI(address)}&ll=${latitute},${longitude}&t=m&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
        ></iframe>
    );
  }