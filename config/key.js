if (process.env.NODE_ENV === 'production') {
  module.exports = {
    // Remote database URI
    // mongoURI:
    //   'mongodb://zebxu:xlz19950522@ds123434.mlab.com:23434/dream-gallery'
  };
} else {
  module.exports = {
    // Local database URI
    // mongoURI: 'mongodb://localhost:27017/VR'
  };
}
