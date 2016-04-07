/* 
 * For reducing boilerplate on examine listeners.
 *
 * config object:
 *
 *  poi : An array or object with points of interest.
 *    It can be an array of strings or an object with strings as the keys and
 *    functions as the values.
 * 
 *  action: Needed if poi is an array of strings,   
 *    It is the function to run if the POI is found. 
 * 
 *  (optional) notFound: Function to run if the POI is 
 *    not found. A default is provided.
 */

var util = require('util');
module.exports.examine = (args, player, players, config) => {

  // Check to make sure config is valid.
  if (!config.poi) {
    util.log("Invalid config for examine event: ", config);
    return;
  }

  // Set defaults as needed.
  config.foundAtNight = config.foundAtNight || config.found;

  var valid = config.poi.indexOf(args.toLowerCase()) > -1;

  if (valid && CommandUtil.isDaytime()) {
    config.found();
  } else if (valid) {
    config.foundAtNight()
  } else config.nothingFound()
}
